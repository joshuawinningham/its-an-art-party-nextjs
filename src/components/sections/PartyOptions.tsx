import Image from "next/image";
import Link from "next/link";

const parties = [
  {
    image: "/images/gallery-8.jpg",
    badgeText: "Indoor",
    badgeColor: "bg-teal text-white",
    badgeRotate: "rotate-[-3deg]",
    title: "Indoor Party",
    titleColor: "text-teal",
    description:
      "Art parties are messy! Let us handle the prep and clean up of the party area inside your home or venue.",
    btnColor: "bg-teal hover:bg-teal-dark text-white",
    tilt: "tilt-left",
    delay: "",
  },
  {
    image: "/images/outdoor-party.jpg",
    badgeText: "Outdoor",
    badgeColor: "bg-pink text-white",
    badgeRotate: "rotate-[2deg]",
    title: "Outdoor Party",
    titleColor: "text-pink",
    description:
      "Love the weather? We can set up our art stations outside! Perfect for spring and fall parties.",
    btnColor: "bg-pink hover:bg-pink-dark text-white",
    tilt: "",
    delay: "delay-200",
  },
  {
    image: "/images/gallery-9.jpg",
    badgeText: "Theme",
    badgeColor: "bg-gold text-dark",
    badgeRotate: "rotate-[-2deg]",
    title: "Theme Party",
    titleColor: "text-gold-dark",
    description:
      "Have a creative theme? We can come up with custom paintings to match your theme! Just ask!",
    btnColor: "bg-gold hover:bg-gold-dark text-dark",
    tilt: "tilt-right",
    delay: "delay-400",
  },
];

export default function PartyOptions() {
  return (
    <section id="parties" className="relative overflow-hidden">
      {/* Diagonal top */}
      <div className="absolute top-0 left-0 w-full" style={{ lineHeight: 0, zIndex: 10 }}>
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-[40px] md:h-[60px]"
        >
          <path d="M0,0 L1440,0 L1440,40 L0,60 Z" fill="#fffbf0" />
        </svg>
      </div>

      <div className="bg-gold pt-24 pb-20 md:pt-28 md:pb-28 relative">
        <div className="absolute inset-0 speckle-bg opacity-50" />
        <span className="absolute top-16 left-[5%] text-dark/5 text-[120px] select-none pointer-events-none font-display">
          &#9733;
        </span>
        <span className="absolute bottom-10 right-[8%] text-dark/5 text-[80px] select-none pointer-events-none font-display rotate-12">
          &#9733;
        </span>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center animate-on-scroll">
            <h2 className="font-display text-dark text-4xl md:text-[64px] uppercase">
              Plan Your Upcoming Party
            </h2>
            <p className="text-dark/70 text-lg mt-3 font-bold">
              Mobile party options are endless! Contact me today to help you plan something
              fantastic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-12">
            {parties.map((party, i) => (
              <div
                key={party.title}
                className={`bg-white rounded-3xl shadow-xl overflow-hidden animate-on-scroll ${party.tilt} ${party.delay} transition-all duration-500 group ${
                  i === 1 ? "md:-translate-y-6" : ""
                }`}
              >
                <div className="h-[240px] overflow-hidden relative">
                  <Image
                    src={party.image}
                    alt={party.title}
                    fill
                    className="object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                  />
                  <div
                    className={`absolute top-4 left-4 ${party.badgeColor} font-display text-sm uppercase px-4 py-1 rounded-full shadow-md`}
                    style={{ transform: party.badgeRotate.replace("rotate-[", "rotate(").replace("]", ")") }}
                  >
                    {party.badgeText}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className={`font-display ${party.titleColor} text-2xl uppercase`}>
                    {party.title}
                  </h3>
                  <p className="text-muted text-sm mt-3 leading-relaxed">{party.description}</p>
                  <Link
                    href="/contact"
                    className={`btn-chunky ${party.btnColor} text-sm mt-5 inline-block py-3 px-8`}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Diagonal bottom */}
      <div className="absolute bottom-0 left-0 w-full" style={{ lineHeight: 0, zIndex: 10 }}>
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-[40px] md:h-[60px]"
        >
          <path d="M0,20 L1440,60 L1440,60 L0,60 Z" fill="#f8fafb" />
        </svg>
      </div>
    </section>
  );
}
