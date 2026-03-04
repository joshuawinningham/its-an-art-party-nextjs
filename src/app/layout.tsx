import type { Metadata } from "next";
import { Chewy, Lato } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";
import "./globals.css";

const chewy = Chewy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "It's an Art Party | Mobile Art & Paint Parties for Kids in Charlotte, NC",
    template: "%s | It's an Art Party",
  },
  description:
    "Mobile art and canvas painting parties with all supplies included for ages 4 and up in Charlotte, NC. Custom parties, art lessons, and DIY options available.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${chewy.variable} ${lato.variable} font-body text-body bg-cream antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <ScrollAnimations />
      </body>
    </html>
  );
}
