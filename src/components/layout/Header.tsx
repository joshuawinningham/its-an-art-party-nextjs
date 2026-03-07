"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/kids-birthdays", label: "Kids Parties" },
  { href: "/art-lessons", label: "Art Lessons" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const hideNav = pathname.startsWith("/kids-painting-party-scottsdale-az");

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="bg-teal sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          {hideNav ? (
            <div className="relative z-10">
              <Image
                src="/images/logo.png"
                alt="It's an Art Party"
                width={192}
                height={64}
                className="h-12 md:h-16 w-auto"
                priority
              />
            </div>
          ) : (
            <Link href="/" className="relative z-10">
              <Image
                src="/images/logo.png"
                alt="It's an Art Party"
                width={192}
                height={64}
                className="h-12 md:h-16 w-auto"
                priority
              />
            </Link>
          )}

          {!hideNav && (
            <>
              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white text-xs font-black uppercase tracking-widest hover:text-gold transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-gold rounded-full group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}
                <a
                  href="tel:9802534829"
                  className="bg-gold text-dark text-xs font-black uppercase tracking-wider px-5 py-2 rounded-full hover:bg-white hover:text-pink transition-all duration-300 shadow-md"
                >
                  980-253-4829
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white relative z-10"
                aria-label="Toggle menu"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        {!hideNav && (
          <div className={`md:hidden bg-teal mobile-menu ${mobileOpen ? "open" : ""}`}>
            <div className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white font-bold text-lg uppercase tracking-wider"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:9802534829"
                className="bg-gold text-dark font-bold text-lg px-6 py-2 rounded-full mt-2"
              >
                980-253-4829
              </a>
            </div>
          </div>
        )}

        {/* Wavy bottom edge */}
        <svg className="nav-wave" viewBox="0 0 1440 20" preserveAspectRatio="none">
          <path d="M0,0 C240,20 480,20 720,10 C960,0 1200,15 1440,5 L1440,0 L0,0 Z" fill="#4ecdc4" />
        </svg>
      </nav>
    </>
  );
}
