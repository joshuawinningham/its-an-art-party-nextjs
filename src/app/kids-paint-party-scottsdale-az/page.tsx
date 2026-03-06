import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
export const metadata: Metadata = {
  title: "Kids Paint Party Scottsdale AZ | Birthday Painting Parties",
  description:
    "Find the best kids paint party services in Scottsdale, AZ. Canvas painting parties for birthdays, playdates, and events — at a studio or at your location. All supplies included for ages 4 and up.",
  openGraph: {
    title: "Kids Paint Party Scottsdale AZ | Birthday Painting Parties",
    description:
      "Find the best kids paint party services in Scottsdale, AZ. Canvas painting parties for birthdays, playdates, and events — at a studio or at your location. All supplies included for ages 4 and up.",
  },
};

const benefits = [
  {
    title: "All Supplies Included",
    description:
      "Canvases, paints, brushes, easels, aprons, and table covers — everything your little artists need is provided.",
    color: "pink",
  },
  {
    title: "Studio or Mobile Options",
    description:
      "Book at a dedicated art studio for a hassle-free experience, or choose a mobile provider who brings the party to your home, park, or venue.",
    color: "teal",
  },
  {
    title: "Guided Instruction",
    description:
      "A professional art instructor leads the group step by step so every child creates a painting they love.",
    color: "gold",
  },
  {
    title: "Custom Themes",
    description:
      "From desert sunsets to unicorns, the canvas design can be customized to match any birthday party theme.",
    color: "pink",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  pink: { bg: "bg-pink/10", border: "border-pink", text: "text-pink" },
  teal: { bg: "bg-teal/10", border: "border-teal", text: "text-teal" },
  gold: { bg: "bg-gold/10", border: "border-gold", text: "text-gold-dark" },
};

export default function KidsPaintPartyScottsdaleAZ() {
  return (
    <main>
      <PageHero
        title="Kids Paint Parties in Scottsdale, AZ"
        quote="Every child is an artist. — Pablo Picasso"
        bgColor="bg-teal"
      />

      {/* Intro */}
      <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
        <div className="blob blob-animate bg-teal/5 w-[300px] h-[300px] -top-20 -right-20" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none animate-on-scroll">
              <p>
                Looking for a kids paint party in Scottsdale, Arizona? Canvas painting parties are one
                of the most popular ways to celebrate birthdays, playdates, and special events for
                children ages 4 and up. Whether you visit a local art studio or book a mobile
                provider who comes to you, all supplies are included so you can focus on the fun.
              </p>
              <p>
                Scottsdale is home to a thriving arts scene, and that creative energy extends to kids
                parties too. Whether you&apos;re hosting in North Scottsdale, Old Town, or anywhere in
                the greater Phoenix area, there are talented paint party providers ready to make your
                celebration unforgettable.
              </p>
            </div>
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-xl animate-on-scroll delay-200">
              <Image
                src="/images/kids-paint-party-scottsdale-az.png"
                alt="Kids Painty Party Scottsdale AZ"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What to Look For */}
      <section className="bg-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full" style={{ lineHeight: 0, zIndex: 10 }}>
          <svg
            viewBox="0 0 1440 50"
            preserveAspectRatio="none"
            className="w-full h-[30px] md:h-[50px]"
          >
            <path d="M0,0 L1440,0 L1440,20 L0,50 Z" fill="#fffbf0" />
          </svg>
        </div>
        <div
          className="blob blob-animate bg-pink/5 w-[250px] h-[250px] bottom-10 -left-10"
          style={{ animationDelay: "-4s" }}
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="font-display text-teal text-4xl md:text-[52px] uppercase text-center mb-12 animate-on-scroll">
            What to Look For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((card, i) => {
              const styles = colorMap[card.color];
              return (
                <div
                  key={card.title}
                  className={`${styles.bg} rounded-2xl p-8 border-l-4 ${styles.border} shadow-md hover:shadow-lg transition-shadow animate-on-scroll delay-${(i % 4) * 100 + 100}`}
                >
                  <h3 className={`font-display ${styles.text} text-2xl uppercase mb-3`}>
                    {card.title}
                  </h3>
                  <p className="text-body leading-relaxed">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scottsdale Info */}
      <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
        <div
          className="blob blob-animate bg-gold/5 w-[250px] h-[250px] -top-10 -right-10"
          style={{ animationDelay: "-2s" }}
        />
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <h2 className="font-display text-teal text-4xl md:text-[52px] uppercase text-center mb-10 animate-on-scroll">
            Why Scottsdale Loves Paint Parties
          </h2>
          <div className="prose prose-lg max-w-none animate-on-scroll delay-200">
            <p>
              With over 300 days of sunshine a year, Scottsdale is perfect for paint parties — whether
              indoors at a dedicated art studio or outdoors in a backyard, community park, or event
              space. The desert landscape provides endless inspiration for canvas designs, from
              saguaro cactus scenes to colorful Arizona sunsets.
            </p>
            <p>
              Kids paint parties typically run 1 to 2 hours and include about 45 to 60 minutes of
              guided painting time. Many providers have studio locations in and around Scottsdale,
              while others offer mobile services throughout Paradise Valley, Fountain Hills, Cave
              Creek, and the greater Phoenix metro. Parties usually start around 8 to 12 guests
              with options to accommodate larger groups.
            </p>
            <p>
              The best part? Every child takes home their own canvas painting as a party favor — a
              keepsake that lasts far longer than a goody bag.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full" style={{ lineHeight: 0, zIndex: 10 }}>
          <svg
            viewBox="0 0 1440 50"
            preserveAspectRatio="none"
            className="w-full h-[30px] md:h-[50px]"
          >
            <path d="M0,0 L1440,0 L1440,20 L0,50 Z" fill="#fffbf0" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="font-display text-pink text-4xl md:text-[52px] uppercase text-center mb-12 animate-on-scroll">
            How It Works
          </h2>
          <div className="space-y-6 animate-on-scroll delay-200">
            {[
              {
                step: "1",
                title: "Choose a Theme",
                description:
                  "Pick a canvas design that matches your party theme, or let the instructor suggest something fun.",
                accent: "bg-pink text-white",
              },
              {
                step: "2",
                title: "Book Your Date",
                description:
                  "Contact a local Scottsdale paint party provider — pick a studio visit or mobile service — and lock in your date and time.",
                accent: "bg-teal text-white",
              },
              {
                step: "3",
                title: "Party Time",
                description:
                  "Show up to the studio or welcome the instructor to your location — they handle all the supplies, setup, painting, and cleanup.",
                accent: "bg-gold text-dark",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-5 bg-cream rounded-2xl p-6 shadow-sm"
              >
                <div
                  className={`${item.accent} w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-display text-xl`}
                >
                  {item.step}
                </div>
                <div>
                  <h3 className="font-display text-dark text-xl uppercase mb-1">{item.title}</h3>
                  <p className="text-body leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directory Placeholder */}
      <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
        <div
          className="blob blob-animate bg-teal/5 w-[300px] h-[300px] bottom-10 -right-20"
          style={{ animationDelay: "-5s" }}
        />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center animate-on-scroll">
          <h2 className="font-display text-teal text-4xl md:text-[52px] uppercase mb-6">
            Scottsdale Paint Party Providers
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Are you a kids paint party business in Scottsdale, AZ? Get listed here and connect with
            local families looking for painting party services. Contact us to learn more about
            being featured in our directory.
          </p>
          <div className="mt-10 bg-white rounded-2xl p-8 shadow-md border-t-4 border-teal">
            <p className="font-display text-pink text-2xl uppercase">
              Directory listings coming soon!
            </p>
            <p className="text-muted mt-3">
              Know a great paint party provider in Scottsdale? Let us know!
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
