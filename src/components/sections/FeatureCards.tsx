import Image from "next/image";

const cards = [
  {
    image: "/images/custom-parties.jpg",
    badgeText: "Custom",
    badgeColor: "bg-gold text-dark",
    title: "Custom Parties",
    titleColor: "text-pink",
    description:
      "I will work with your party theme to create an art project everyone will enjoy!",
    tilt: "tilt-left",
    delay: "",
    overlay: "from-pink/40",
    badgeRotate: "-rotate-2",
  },
  {
    image: "/images/supplies-included.jpg",
    badgeText: "Included",
    badgeColor: "bg-teal text-white",
    title: "Supplies Included",
    titleColor: "text-teal",
    description:
      "All art supplies are included in the party price along with full setup and clean-up.",
    tilt: "",
    delay: "delay-200",
    overlay: "from-teal/40",
    badgeRotate: "rotate-1",
  },
  {
    image: "/images/mobile-parties.jpg",
    badgeText: "Mobile",
    badgeColor: "bg-pink text-white",
    title: "Mobile Parties",
    titleColor: "text-gold",
    description:
      "Canvas painting parties for kids ages 4 and up. I come to your home, park, or party location.",
    tilt: "tilt-right",
    delay: "delay-400",
    overlay: "from-gold/40",
    badgeRotate: "-rotate-1",
  },
];

export default function FeatureCards() {
  return (
    <section className="bg-pink relative pt-20 pb-20 md:pt-24 md:pb-28 speckle-bg">
      <div className="blob bg-pink-dark/30 w-[180px] h-[180px] top-10 right-[5%] blur-md" />
      <div
        className="blob bg-white/10 w-[120px] h-[120px] bottom-20 left-[8%] blur-sm"
        style={{ animationDelay: "-2s" }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`bg-white rounded-3xl shadow-xl overflow-hidden animate-on-scroll ${card.tilt} ${card.delay} transition-all duration-500 group cursor-pointer ${
                i === 1 ? "md:-translate-y-4" : ""
              }`}
            >
              <div className="h-[260px] overflow-hidden relative">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${card.overlay} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </div>
              <div className="p-6 text-center relative">
                <div
                  className={`absolute -top-5 left-1/2 -translate-x-1/2 ${card.badgeColor} font-display text-sm uppercase px-4 py-1 rounded-full shadow-md ${card.badgeRotate}`}
                >
                  {card.badgeText}
                </div>
                <h3
                  className={`font-display ${card.titleColor} text-3xl uppercase tracking-wide mt-2`}
                >
                  {card.title}
                </h3>
                <p className="text-muted text-base mt-3 leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Diagonal bottom */}
      <div className="absolute bottom-0 left-0 w-full" style={{ lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-[40px] md:h-[60px]"
        >
          <path d="M0,20 L1440,60 L1440,60 L0,60 Z" fill="#fffbf0" />
        </svg>
      </div>
    </section>
  );
}
