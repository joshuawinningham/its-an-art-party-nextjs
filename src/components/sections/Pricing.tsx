import Link from "next/link";

const plans = [
  {
    title: "Art Lessons",
    price: "45",
    label: "Starting Price",
    color: "teal",
    bgHeader: "bg-teal",
    popular: false,
    order: "md:order-1",
    rotate: "2deg",
    features: [
      "Private or Group lessons",
      "1 hour session",
      "Skill building focus",
      "Ages 6 and up",
      "Various mediums available",
    ],
    buttonText: "Read More",
    buttonUrl: "/contact",
  },
  {
    title: "Mobile Party",
    price: "240",
    label: "Starting Price",
    color: "pink",
    bgHeader: "bg-gradient-to-r from-pink to-pink-dark",
    popular: true,
    order: "md:order-2",
    rotate: "-1deg",
    features: [
      "2 hours of party time",
      "Full set up/clean up",
      "Canvas painting",
      "Supplies included",
      "Instructor led step-by-step",
    ],
    buttonText: "Read More",
    buttonUrl: "/contact",
  },
  {
    title: "DIY Party",
    price: "200",
    label: "Starting Price",
    color: "gold",
    bgHeader: "bg-gold",
    popular: false,
    order: "md:order-3",
    rotate: "-1.5deg",
    features: [
      "Up to 10 kids",
      "Pre-sketched canvas",
      "Paint included",
      "Supplies included",
      "Instruction sheet provided",
    ],
    buttonText: "Read More",
    buttonUrl: "/contact",
  },
];

const colorClasses: Record<string, { text: string; bg10: string; btnHover: string; btnText: string }> = {
  teal: { text: "text-teal", bg10: "bg-teal/10", btnHover: "hover:bg-teal-dark", btnText: "text-white" },
  pink: { text: "text-pink", bg10: "bg-pink/10", btnHover: "hover:bg-pink-dark", btnText: "text-white" },
  gold: { text: "text-gold", bg10: "bg-gold/10", btnHover: "hover:bg-gold-dark", btnText: "text-dark" },
};

export default function Pricing() {
  return (
    <section className="bg-bg-light py-16 md:py-24 relative overflow-hidden speckle-bg">
      <div
        className="blob blob-animate bg-teal/5 w-[300px] h-[300px] top-10 -right-20"
        style={{ animationDelay: "-2s" }}
      />
      <div
        className="blob blob-animate bg-pink/5 w-[250px] h-[250px] bottom-20 -left-10"
        style={{ animationDelay: "-5s" }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center animate-on-scroll">
          <h2 className="font-display text-teal text-4xl md:text-[68px] uppercase leading-tight">
            Choose Your Path to Art!
          </h2>
          <p className="text-pink text-xl mt-3 italic font-bold">
            Options include do-it-yourself, full-service art parties, or art lessons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mt-14 items-start">
          {plans.map((plan, i) => {
            const colors = colorClasses[plan.color];
            return (
              <div
                key={plan.title}
                className={`relative animate-on-scroll ${plan.order} ${
                  i === 0 ? "delay-200" : i === 2 ? "delay-400" : ""
                } ${plan.popular ? "md:-translate-y-4" : ""}`}
              >
                <div className="pin" />
                <div
                  className={`bg-white rounded-3xl ${
                    plan.popular ? "shadow-2xl border-4 border-pink/30" : "shadow-xl"
                  } overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                    plan.popular
                      ? "hover:shadow-[0_20px_60px_rgba(234,82,131,0.25)]"
                      : "hover:shadow-2xl"
                  } relative`}
                  style={{ transform: `rotate(${plan.rotate})` }}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-dark text-white text-[10px] font-black uppercase tracking-wider px-5 py-2 shadow-lg z-10 rounded-bl-xl">
                      Popular
                    </div>
                  )}
                  <div className={`${plan.bgHeader} py-7 text-center relative overflow-hidden`}>
                    {plan.popular && (
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle, white 1px, transparent 1px)",
                          backgroundSize: "12px 12px",
                        }}
                      />
                    )}
                    <h3 className="font-display text-white text-3xl uppercase tracking-wider relative">
                      {plan.title}
                    </h3>
                  </div>
                  <div className="p-7 text-center">
                    <div className="flex items-baseline justify-center">
                      <span className={`font-display ${colors.text} text-2xl`}>$</span>
                      <span className={`font-display ${colors.text} text-6xl`}>{plan.price}</span>
                    </div>
                    <p className="text-light-gray text-xs font-bold mt-1 uppercase tracking-wider">
                      {plan.label}
                    </p>
                    <ul className="mt-6 space-y-4 text-left">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <span
                            className={`w-6 h-6 rounded-full ${colors.bg10} flex items-center justify-center shrink-0`}
                          >
                            <svg
                              className={`w-3 h-3 ${colors.text}`}
                              viewBox="0 0 12 12"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                            >
                              <path d="M10 3L4.5 8.5 2 6" />
                            </svg>
                          </span>
                          <span className="text-body text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={plan.buttonUrl}
                      className={`btn-chunky bg-${plan.color} ${colors.btnText} text-sm block mt-7 ${colors.btnHover} py-3 text-center`}
                    >
                      {plan.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
