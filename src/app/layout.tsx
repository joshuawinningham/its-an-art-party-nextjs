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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.itsanartparty.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Charlotte Painting Parties for Kids | It's an Art Party",
    template: "%s | It's an Art Party",
  },
  description:
    "It's an Art Party offers mobile art and canvas painting parties for kids ages 4 and up in Charlotte, NC. All supplies included. Book your party today!",
  icons: {
    icon: "/images/favicon.png",
  },
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "It's an Art Party",
    locale: "en_US",
    images: [{ url: "/images/hero-bg.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "It's an Art Party",
        url: siteUrl,
        telephone: "980-253-4829",
        email: "robin@itsanartparty.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "7845 Colony Rd Ste C4-227",
          addressLocality: "Charlotte",
          addressRegion: "NC",
          postalCode: "28226",
          addressCountry: "US",
        },
        description:
          "Mobile art and canvas painting parties for kids ages 4 and up in Charlotte, NC. All supplies included.",
        priceRange: "$",
        image: `${siteUrl}/images/hero-bg.jpg`,
      },
      {
        "@type": "WebSite",
        name: "It's an Art Party",
        url: siteUrl,
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${chewy.variable} ${lato.variable} font-body text-body bg-cream antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        <ScrollAnimations />
      </body>
    </html>
  );
}
