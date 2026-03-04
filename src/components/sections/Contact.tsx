"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    if (formData.get("website")) return;

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    if (!data.name || !data.email || !data.message) {
      setErrorMessage("Please fill in all required fields.");
      setFormState("error");
      return;
    }

    setFormState("sending");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setFormState("success");
      } else {
        const json = await res.json();
        setErrorMessage(json.error || "Something went wrong. Please try again.");
        setFormState("error");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setFormState("error");
    }
  }

  return (
    <section id="contact" className="bg-cream py-16 md:py-24 relative overflow-hidden">
      <div className="blob blob-animate bg-pink/5 w-[300px] h-[300px] top-10 -right-10" />
      <div
        className="blob blob-animate bg-teal/5 w-[250px] h-[250px] bottom-20 -left-10"
        style={{ animationDelay: "-3s" }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 md:gap-14">
          {/* Left Side */}
          <div className="animate-on-scroll">
            <h2 className="font-display text-teal text-4xl md:text-[52px] uppercase leading-[1.15] tracking-wide">
              Plan Your
              <br />
              <span className="relative inline-block">
                Paint Party
                <span className="absolute -bottom-1 left-0 w-full h-3 bg-gold/30 -skew-x-3 rounded" />
              </span>
              <br />
              Today
            </h2>
            <p className="text-pink text-sm font-bold mt-4 leading-relaxed">
              Please include date, time, approx # of painters, age, and location so that we can
              start creating your custom party!
            </p>

            <div className="mt-6 space-y-4">
              <ContactInfoItem
                icon="📍"
                iconBg="bg-pink/10 group-hover:bg-pink/20"
                iconColor="text-pink"
                label="Address"
                value={
                  <>
                    7845 Colony Rd Ste C4-227
                    <br />
                    Charlotte, NC 28226
                  </>
                }
              />
              <ContactInfoItem
                icon="✉"
                iconBg="bg-teal/10 group-hover:bg-teal/20"
                iconColor="text-teal"
                label="Email"
                value={
                  <a
                    href="mailto:robin@itsanartparty.com"
                    className="text-muted text-sm hover:text-pink transition-colors"
                  >
                    robin@itsanartparty.com
                  </a>
                }
              />
              <ContactInfoItem
                icon="📞"
                iconBg="bg-gold/10 group-hover:bg-gold/20"
                iconColor="text-gold"
                label="Phone"
                value={
                  <a
                    href="tel:9802534829"
                    className="text-muted text-sm hover:text-pink transition-colors"
                  >
                    980-253-4829
                  </a>
                }
              />
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="animate-on-scroll delay-200">
            {formState === "success" ? (
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-t-4 border-teal text-center">
                <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-teal text-3xl">&#10003;</span>
                </div>
                <h3 className="font-display text-teal text-3xl uppercase mb-4">Thank You!</h3>
                <p className="text-muted text-lg leading-relaxed max-w-md mx-auto">
                  We&apos;ve received your message and will be in touch soon!
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-t-4 border-pink relative overflow-hidden">
                <div className="blob bg-teal/3 w-[200px] h-[200px] -bottom-10 -right-10" />
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10" noValidate>
                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website-hp">Website</label>
                    <input
                      type="text"
                      id="website-hp"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      className="w-full h-[50px] bg-bg-gray border-2 border-transparent rounded-xl px-4 text-sm font-bold shadow-sm focus:outline-none focus:border-teal focus:bg-white placeholder-light-gray transition-all duration-300"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="w-full h-[50px] bg-bg-gray border-2 border-transparent rounded-xl px-4 text-sm font-bold shadow-sm focus:outline-none focus:border-teal focus:bg-white placeholder-light-gray transition-all duration-300"
                    />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="w-full h-[50px] bg-bg-gray border-2 border-transparent rounded-xl px-4 text-sm font-bold shadow-sm focus:outline-none focus:border-teal focus:bg-white placeholder-light-gray transition-all duration-300"
                  />
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your party! Include date, time, # of painters, ages, and location..."
                    required
                    className="w-full bg-bg-gray border-2 border-transparent rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:border-teal focus:bg-white resize-none placeholder-light-gray transition-all duration-300"
                    style={{ minHeight: "150px" }}
                  />

                  {formState === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-bold">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "sending"}
                    className="btn-chunky bg-pink text-white w-full hover:bg-pink-dark text-center block disabled:opacity-70"
                  >
                    {formState === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoItem({
  icon,
  iconBg,
  iconColor,
  label,
  value,
}: {
  icon: string;
  iconBg: string;
  iconColor: string;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 group">
      <div
        className={`w-10 h-10 ${iconBg} rounded-full flex items-center justify-center shrink-0 transition-colors`}
      >
        <span className={`${iconColor} text-lg`}>{icon}</span>
      </div>
      <div>
        <p className="text-body text-sm font-bold">{label}</p>
        <div className="text-muted text-sm">{value}</div>
      </div>
    </div>
  );
}
