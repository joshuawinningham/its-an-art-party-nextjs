interface PageHeroProps {
  title: string;
  quote?: string;
  bgColor?: string;
  textColor?: string;
  quoteColor?: string;
  textShadow?: string;
}

export default function PageHero({
  title,
  quote,
  bgColor = "bg-teal",
  textColor = "text-white",
  quoteColor = "text-white/80",
  textShadow = "2px 2px 0 rgba(0,0,0,0.15)",
}: PageHeroProps) {
  return (
    <section
      className={`${bgColor} ${textColor} pt-28 pb-20 md:pt-32 md:pb-24 px-6 relative overflow-hidden`}
    >
      <div className="blob blob-animate bg-pink/10 w-[250px] h-[250px] -top-16 -left-16" />
      <div
        className="blob blob-animate bg-gold/10 w-[200px] h-[200px] top-10 -right-10"
        style={{ animationDelay: "-3s" }}
      />

      <div className="container mx-auto max-w-wide relative z-10 text-center">
        <h1
          className="font-display text-5xl md:text-[72px] uppercase leading-tight"
          style={{ textShadow }}
        >
          {title}
        </h1>
        {quote && (
          <p className={`${quoteColor} text-xl md:text-2xl mt-4 font-bold italic max-w-2xl mx-auto`}>
            &ldquo;{quote}&rdquo;
          </p>
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full" style={{ lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 50"
          preserveAspectRatio="none"
          className="w-full h-[30px] md:h-[50px]"
        >
          <path d="M0,50 L1440,15 L1440,50 Z" fill="#fffbf0" />
        </svg>
      </div>
    </section>
  );
}
