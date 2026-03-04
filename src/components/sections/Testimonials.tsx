import Image from "next/image";

const testimonials = [
  {
    image: "/images/gallery-1.jpg",
    quote:
      "Thank you for the awesome party for my daughter's 11th. They painted a custom otter for our otter themed party. My daughter and her friends loved it!",
    name: "Juliet",
    avatar: "/images/juliet.png",
    rotation: "-3deg",
    tapeRotation: "5deg",
    quoteColor: "text-pink",
    borderColor: "border-pink",
    delay: "",
  },
  {
    image: "/images/gallery-4.jpg",
    quote:
      "Robin did an amazing job for my daughter's party! For everything you get, the party price is a total bargain and doesn't even compare to what else is out there!",
    name: "Kelley",
    avatar: "/images/kelley.png",
    rotation: "2deg",
    tapeRotation: "-3deg",
    quoteColor: "text-teal",
    borderColor: "border-teal",
    delay: "delay-200",
  },
  {
    image: "/images/gallery-7.jpg",
    quote:
      "Had a great experience with 'It's An Art Party'. Robin brought all of the supplies and guided everyone in a fun project. My daughter loved it.",
    name: "Lyndsi",
    avatar: "/images/lyndsi.png",
    rotation: "-1.5deg",
    tapeRotation: "4deg",
    quoteColor: "text-gold",
    borderColor: "border-gold",
    delay: "delay-400",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-teal py-16 md:py-24 relative overflow-hidden">
      <div className="blob blob-animate bg-white/5 w-[400px] h-[400px] -top-20 -right-20" />
      <div
        className="blob blob-animate bg-white/5 w-[300px] h-[300px] bottom-10 -left-20"
        style={{ animationDelay: "-4s" }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center animate-on-scroll">
          <h2
            className="font-display text-white text-4xl md:text-[64px] uppercase"
            style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.15)" }}
          >
            Testimonials
          </h2>
          <p className="text-white/80 text-sm font-bold mt-3">
            Hear what Charlotte area moms are saying about It&apos;s an Art Party!
          </p>
          <div className="flex justify-center mt-5 gap-2">
            <span className="text-gold text-2xl">&#9733;</span>
            <span className="text-gold text-2xl">&#9733;</span>
            <span className="text-gold text-2xl">&#9733;</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mt-12">
          {testimonials.map((t) => (
            <div key={t.name} className={`relative animate-on-scroll ${t.delay}`}>
              <div
                className="polaroid relative"
                style={{ "--rotation": t.rotation } as React.CSSProperties}
              >
                <div
                  className="tape"
                  style={{ "--tape-rotation": t.tapeRotation } as React.CSSProperties}
                />
                <div className="aspect-[4/3] overflow-hidden rounded-sm bg-gray-100">
                  <Image
                    src={t.image}
                    alt=""
                    width={400}
                    height={300}
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
                <div className="mt-4 text-center px-4">
                  <span
                    className={`${t.quoteColor} text-[60px] font-display leading-none block -mb-4 opacity-40`}
                  >
                    &ldquo;
                  </span>
                  <p className="text-body text-sm leading-relaxed italic">{t.quote}</p>
                  <div className="flex items-center justify-center gap-3 mt-4">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={40}
                      height={40}
                      className={`w-10 h-10 rounded-full object-cover border-2 ${t.borderColor}`}
                    />
                    <span className="font-display text-dark text-sm uppercase tracking-wider">
                      {t.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
