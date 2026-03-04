import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Cta from "@/components/sections/Cta";

export const metadata: Metadata = {
  title: "Kids Art Lessons | It's an Art Party Charlotte NC",
  description:
    "Fun art lessons for kids in Charlotte, NC. Small group and private instruction with professional artist. All supplies included.",
  openGraph: {
    title: "Kids Art Lessons | It's an Art Party Charlotte NC",
    description:
      "Fun art lessons for kids in Charlotte, NC. Small group and private instruction with professional artist. All supplies included.",
  },
};

const features = [
  "Individual Lessons: $45 (1 child)",
  "Group Lessons: $30 per child (up to 10 children)",
  "All Supplies Included",
  "2-Hour Sessions",
  "Available Monday-Friday",
];
const badgeColors = [
  "bg-gold/10 text-gold-dark",
  "bg-teal/10 text-teal",
  "bg-pink/10 text-pink",
  "bg-gold/10 text-gold-dark",
  "bg-teal/10 text-teal",
];

const detailCards = [
  {
    title: "Individual Lessons",
    description:
      "Individual one-on-one art lesson session (1 child) \u2013 $45. Great for kids who need personalized attention and focus on detailed projects.",
    color: "gold",
  },
  {
    title: "Group Lessons",
    description:
      "Group art lesson session (up to 10 children) \u2013 $30 per child. Fun with friends! Group lessons are great for afternoons or summer breaks.",
    color: "teal",
  },
  {
    title: "Locations",
    description:
      "Lessons are provided to the following zip codes: 28207, 28209, 28211, 28210, 28226, 28270, 28105, 28277, 28104, 28173, 28078, 28031, 28036, 29715",
    color: "pink",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  gold: { bg: "bg-gold/10", border: "border-gold", text: "text-gold-dark" },
  teal: { bg: "bg-teal/10", border: "border-teal", text: "text-teal" },
  pink: { bg: "bg-pink/10", border: "border-pink", text: "text-pink" },
};

export default function ArtLessonsPage() {
  return (
    <main>
      <PageHero
        title="Art Lessons"
        quote={`"Creativity is intelligence having fun." Albert Einstein`}
        bgColor="bg-gold"
        textColor="text-dark"
        quoteColor="text-dark/70"
        textShadow="2px 2px 0 rgba(255,255,255,0.3)"
      />

      {/* Main Content */}
      <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
        <div className="blob blob-animate bg-gold/5 w-[300px] h-[300px] -top-20 -right-20" />
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
              Art has been linked to many developmental benefits including improving fine motor
              skills and developing cognitive skills like how to plan, execute, and problem solve
              through a project. It also encourages decision making and self-expression and may even
              improve academic performance.
            </p>
            <p>
              My goal is to encourage out-of-the-box thinking through hands-on art projects that
              will keep your child(ren) learning throughout the summer months. Creativity fosters
              imagination and expression through experimentation with a variety of materials.
            </p>
            <p>
              With art lessons, I will provide private in-home one-on-one instruction on an
              individual basis and in small groups for children ages 4 and up. Art lesson sessions
              can be custom designed around the materials with which the child(ren) would like to
              work. I can also provide suggestions and ideas for fun projects.
            </p>
          </div>
          <div className="mt-10 bg-white rounded-2xl p-6 shadow-md border-l-4 border-gold animate-on-scroll delay-300">
            <p className="font-display text-gold-dark text-xl uppercase">
              Art lessons are available Monday-Friday. All supplies are included. A $25
              non-refundable deposit is required at the time of scheduling. The deposit will be
              applied to the total amount on the day of the session. Each session will last 2 hours.
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
          className="blob blob-animate bg-gold/5 w-[250px] h-[250px] bottom-10 -left-10"
          style={{ animationDelay: "-4s" }}
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="font-display text-teal text-4xl md:text-[52px] uppercase text-center mb-12 animate-on-scroll">
            Lesson Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {detailCards.map((card, i) => {
              const styles = colorMap[card.color];
              return (
                <div
                  key={card.title}
                  className={`${styles.bg} rounded-2xl p-8 border-t-4 ${styles.border} shadow-md hover:shadow-lg transition-shadow animate-on-scroll delay-${i * 200}`}
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

      {/* Ideas */}
      <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
        <div
          className="blob blob-animate bg-teal/5 w-[250px] h-[250px] -top-10 -right-10"
          style={{ animationDelay: "-2s" }}
        />
        <div className="max-w-[800px] mx-auto px-6 relative z-10 animate-on-scroll">
          <h2 className="font-display text-teal text-4xl md:text-[52px] uppercase text-center mb-10">
            Ideas to Get You Started
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              These projects can be completed during art lessons, or even used for parties. The
              possibilities are ENDLESS!
            </p>
            <ul>
              <li>
                Use vegetables, flowers, bubble wrap, string, shaving cream and more to create
                unique designs with paint.
              </li>
              <li>
                &ldquo;Paint&rdquo; with chalk shavings or use a spray bottle filled with water or
                diluted paint.
              </li>
              <li>
                Learn different techniques for using acrylic paint on surfaces like canvas, wood,
                and paper.
              </li>
              <li>Paint a phrase, name, or initials for personalized wall art.</li>
              <li>Learn to draw or paint still life images or portraits.</li>
              <li>Create a collage with words that describe yourself.</li>
              <li>Paint on stones or tree branches.</li>
              <li>
                Printmaking using styrofoam templates on paper, card stock, or note cards.
              </li>
              <li>
                Learn about color theory and experiment with painting using the color wheel.
              </li>
              <li>
                Glue &ldquo;odds and ends&rdquo; (mismatched puzzle pieces, buttons, bolts, boxes,
                etc.) to a board and spray paint everything the same color.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Cta
        heading="Contact Me Today!"
        subtitle="Ready to nurture your child's creativity? Let's set up a lesson."
        buttonText="Get Started"
      />
    </main>
  );
}
