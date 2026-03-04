import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Cta from "@/components/sections/Cta";

export const metadata: Metadata = {
  title: "Kids Birthday Paint Parties | It's an Art Party Charlotte NC",
  description:
    "Book a mobile paint party for your child's birthday! We bring all the art supplies to your home in Charlotte, NC. Custom canvas designs for every theme.",
  openGraph: {
    title: "Kids Birthday Paint Parties | It's an Art Party Charlotte NC",
    description:
      "Book a mobile paint party for your child's birthday! We bring all the art supplies to your home in Charlotte, NC. Custom canvas designs for every theme.",
  },
};

const features = [
  "Starting From $240",
  "Unlimited Design Themes",
  "Up To 25 Guests",
  "1 - 2 Hours (45-60 minute painting time)",
  "Free Planning and Consultation",
];
const badgeColors = [
  "bg-pink/10 text-pink",
  "bg-teal/10 text-teal",
  "bg-gold/10 text-gold-dark",
  "bg-pink/10 text-pink",
  "bg-teal/10 text-teal",
];

const detailCards = [
  {
    title: "What to Wear",
    description:
      "Dress for fun in clothes that will get a little messy and/or bring a smock to wear.",
    color: "pink",
  },
  {
    title: "Art Supplies",
    description:
      "I bring the supplies to you and they are included in the party price.",
    color: "teal",
  },
  {
    title: "Party Favors",
    description:
      "Guests get to take their custom painting home to display as a party favor!",
    color: "gold",
  },
  {
    title: "Instruction",
    description:
      "I provide professional instruction for painting with hands-on help and guidance.",
    color: "pink",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  pink: { bg: "bg-pink/10", border: "border-pink", text: "text-pink" },
  teal: { bg: "bg-teal/10", border: "border-teal", text: "text-teal" },
  gold: { bg: "bg-gold/10", border: "border-gold", text: "text-gold-dark" },
};

export default function KidsBirthdaysPage() {
  return (
    <main>
      <PageHero
        title="Kids Birthday Parties"
        quote={`"The world is but a canvas to the imagination." Henry David Thoreau`}
        bgColor="bg-pink"
      />

      {/* Main Content */}
      <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
        <div className="blob blob-animate bg-teal/5 w-[300px] h-[300px] -top-20 -right-20" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-on-scroll">
            {features.map((feature, i) => (
              <span
                key={feature}
                className={`${badgeColors[i]} px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide`}
              >
                {feature}
              </span>
            ))}
          </div>
          <div className="prose prose-lg max-w-none animate-on-scroll delay-200">
            <p>
              Paint parties are a great way to celebrate while exploring art with family and
              friends!
            </p>
            <p>
              Customize any project based on the birthday theme or the personal taste of the
              birthday boy or girl.
            </p>
          </div>
          <div className="mt-10 bg-white rounded-2xl p-6 shadow-md border-l-4 border-pink animate-on-scroll delay-300">
            <p className="font-display text-pink text-2xl uppercase">
              All parties are $240 for up to 8 children. Add $20 for each additional child.
            </p>
          </div>
        </div>
      </section>

      {/* Detail Cards */}
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
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {detailCards.map((card, i) => {
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

      {/* What to Expect */}
      <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
        <div
          className="blob blob-animate bg-gold/5 w-[250px] h-[250px] -top-10 -right-10"
          style={{ animationDelay: "-2s" }}
        />
        <div className="max-w-[800px] mx-auto px-6 relative z-10 animate-on-scroll">
          <h2 className="font-display text-teal text-4xl md:text-[52px] uppercase text-center mb-10">
            What to Expect
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Party planning includes selecting a theme for canvas designs a week in advance of the
              party. I will create black and white outline designs ahead of time on each canvas for
              the kids to paint during the party. Upon arrival, I will set up tables with all of the
              art supplies (tables not included). Painting will take approximately 45-60 minutes. I
              will clean up all art supplies and prepare your tables for other activities of your
              choosing (food and drinks not included). If there is anything else I can do to assist
              during the party, just ask! I am here to help! Most parties only require access to
              trash cans and sinks.
            </p>
          </div>
        </div>
      </section>

      <Cta
        heading="Plan Your Party Today!"
        subtitle="Contact me to start planning the perfect art party for your child."
        buttonText="Book Now"
      />
    </main>
  );
}
