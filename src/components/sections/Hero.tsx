"use client";

import Image from "next/image";
import Link from "next/link";
import { useRotatingWord } from "@/hooks/useRotatingWord";

const heroWords = ["AMAZING", "FUN", "MEMORABLE"];

export default function Hero() {
  const { word, isFadingOut } = useRotatingWord(heroWords);

  return (
    <section className="relative min-h-[650px] md:min-h-[750px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover scale-110"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Blob decorations */}
      <div className="blob blob-animate bg-pink/20 w-[300px] h-[300px] -top-20 -left-20 blur-xl" />
      <div
        className="blob blob-animate bg-teal/20 w-[250px] h-[250px] -bottom-10 -right-10 blur-xl"
        style={{ animationDelay: "-3s" }}
      />
      <div
        className="blob blob-animate bg-gold/15 w-[200px] h-[200px] top-1/4 right-[10%] blur-lg"
        style={{ animationDelay: "-5s" }}
      />

      {/* Splatter dots */}
      <div className="absolute top-[15%] left-[5%] w-4 h-4 bg-gold rounded-full opacity-60 hidden md:block" />
      <div className="absolute top-[25%] left-[12%] w-2 h-2 bg-pink rounded-full opacity-50 hidden md:block" />
      <div className="absolute top-[20%] right-[8%] w-3 h-3 bg-teal rounded-full opacity-50 hidden md:block" />
      <div className="absolute bottom-[30%] right-[15%] w-5 h-5 bg-gold rounded-full opacity-40 hidden md:block" />
      <div className="absolute bottom-[25%] left-[20%] w-3 h-3 bg-pink rounded-full opacity-40 hidden md:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 pt-16 pb-28 max-w-[950px] mx-auto">
        <div className="relative inline-block">
          <h1
            className="font-display"
            style={{
              textShadow: "3px 3px 0 rgba(0,0,0,0.3), 0 0 40px rgba(78,205,196,0.3)",
            }}
          >
            <span className="block text-white text-5xl sm:text-7xl md:text-[100px] leading-[1.05] tracking-wide">
              MAKE YOUR PARTY
            </span>
            <span className="relative inline-block my-2">
              <span
                className="absolute -inset-x-6 -inset-y-2 bg-gold/80 -skew-x-3 rounded-lg"
                style={{ zIndex: -1 }}
              />
              <span
                className={`rotating-word text-dark text-5xl sm:text-7xl md:text-[100px] leading-[1.05] tracking-wide relative ${
                  isFadingOut ? "fade-out" : ""
                }`}
              >
                {word}
              </span>
            </span>
            <span className="block text-white text-5xl sm:text-7xl md:text-[100px] leading-[1.05] tracking-wide">
              WITH ART!
            </span>
          </h1>
        </div>

        <p
          className="font-display text-teal text-2xl sm:text-3xl md:text-[44px] mt-6"
          style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.3)" }}
        >
          CELEBRATE AND CREATE!
        </p>
        <p
          className="text-white text-lg md:text-xl mt-5 leading-relaxed max-w-2xl mx-auto font-bold"
          style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}
        >
          Mobile art and canvas painting parties with all supplies included for ages 4 and up
        </p>
        <Link
          href="/contact"
          className="btn-chunky bg-pink text-white mt-10 mb-16 inline-block hover:bg-pink-dark"
        >
          Request Your Party
        </Link>
      </div>

      {/* Bottom angled edge */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-[40px] md:h-[60px]"
        >
          <path d="M0,60 L1440,20 L1440,60 Z" fill="#ea5283" />
        </svg>
      </div>
    </section>
  );
}
