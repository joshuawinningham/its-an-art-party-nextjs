import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, website } = body;

    // Honeypot check
    if (website) {
      return NextResponse.json({ success: true });
    }

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "robin@itsanartparty.com";
    const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "It's an Art Party <onboarding@resend.dev>";
    const WEBHOOK_URL = process.env.WEBHOOK_URL || "";

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Party Inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    // Optional webhook (Zapier, CRM, etc.)
    if (WEBHOOK_URL) {
      fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, date: new Date().toISOString() }),
      }).catch((err) => console.error("Webhook error:", err));
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
