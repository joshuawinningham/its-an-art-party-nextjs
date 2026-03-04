import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact Us | It's an Art Party Charlotte NC",
  description:
    "Get in touch with It's an Art Party to book a kids paint party or art lesson in Charlotte, NC. Call 980-253-4829 or fill out our contact form.",
  openGraph: {
    title: "Contact Us | It's an Art Party Charlotte NC",
    description:
      "Get in touch with It's an Art Party to book a kids paint party or art lesson in Charlotte, NC. Call 980-253-4829 or fill out our contact form.",
  },
};

export default function ContactPage() {
  return (
    <main>
      <PageHero title="Contact" />

      {/* Intro */}
      <section className="bg-cream pt-16 pb-0 relative overflow-hidden">
        <div className="max-w-2xl mx-auto px-4 text-center animate-on-scroll">
          <h2 className="font-display text-teal text-4xl md:text-[52px] uppercase leading-tight">
            I&apos;d Love to Hear From You
          </h2>
          <p className="text-body text-lg leading-relaxed mt-4">
            Whether you&apos;re interested in booking a birthday party, scheduling art lessons, or
            just have questions about our services, I&apos;m here to help! Fill out the form or
            contact me directly using the information below.
          </p>
        </div>
      </section>

      <Contact />
    </main>
  );
}
