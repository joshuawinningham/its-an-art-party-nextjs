import Image from "next/image";

const logos = [
  { src: "/images/charlotte-parent.png", alt: "Charlotte Parent", wide: false },
  { src: "/images/macaroni-kid.png", alt: "Macaroni Kid", wide: false },
  { src: "/images/charlotte-observer.svg", alt: "The Charlotte Observer", wide: true },
  { src: "/images/creative-child.png", alt: "Creative Child", wide: false },
  { src: "/images/brittanys-rabbit-hole.png", alt: "Brittany's Rabbit Hole", wide: false },
];

export default function AsSeenIn() {
  return (
    <section className="bg-dark py-8 md:py-10 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(255,255,255,0.3) 8px, rgba(255,255,255,0.3) 16px)",
        }}
      />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <p className="text-white/50 text-xs font-bold uppercase tracking-[0.3em] text-center mb-5">
          As Seen In
        </p>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-8 md:gap-12 animate-on-scroll">
          {logos.map((logo) =>
            logo.wide ? (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={44}
                style={{ width: "clamp(130px, 18vw, 180px)", height: "auto" }}
                className="object-contain opacity-80"
              />
            ) : (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={44}
                className="h-9 md:h-11 w-auto object-contain opacity-80"
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
