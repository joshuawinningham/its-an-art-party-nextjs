import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-cream py-16 md:py-24 relative overflow-hidden">
      <div className="blob blob-animate bg-teal/5 w-[400px] h-[400px] -top-20 -right-20" />
      <div
        className="blob blob-animate bg-pink/5 w-[300px] h-[300px] bottom-10 -left-10"
        style={{ animationDelay: "-4s" }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Text Column */}
          <div className="order-2 md:order-1">
            <h2 className="font-display text-teal text-4xl sm:text-5xl md:text-[68px] leading-[1.05] uppercase animate-on-scroll">
              <span className="relative inline-block">
                Charlotte
                <span className="absolute -bottom-1 left-0 w-full h-3 bg-gold/30 -skew-x-3 rounded" />
              </span>
              <br />
              Painting
              <br />
              Parties for Kids
            </h2>

            <div className="mt-8 space-y-5 text-body text-xl leading-relaxed animate-on-scroll delay-200">
              <p>
                It&apos;s an Art Party is a mobile art and paint party service! I specialize in{" "}
                <Link href="/kids-birthdays" className="text-pink font-bold">kids birthday parties</Link> including canvas
                painting and mixed media art projects for ages 4 and up. I bring the creativity to
                you with all supplies included.
              </p>
              <p>
                My goal is for children to experience the fun of art and paint in a celebratory
                atmosphere. Art parties fuel their creativity with personalized projects that create
                unforgettable memories.
              </p>
              <p>
                <Link href="/contact" className="text-pink font-bold">
                  Contact me
                </Link>{" "}
                today to plan your next party!
              </p>
            </div>

            <Link
              href="/kids-birthdays"
              className="btn-chunky bg-teal text-white mt-8 hover:bg-teal-dark text-base animate-on-scroll delay-300"
            >
              Read More
            </Link>
          </div>

          {/* Image Column */}
          <div className="order-1 md:order-2 relative animate-on-scroll animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-pink via-teal to-gold rounded-3xl rotate-3 opacity-20" />
              <Image
                src="/images/girl-painting.png"
                alt="Charlotte Painting Parties for Kids"
                width={460}
                height={460}
                className="relative w-full md:w-[460px] md:ml-auto rounded-2xl"
              />
            </div>
            <div className="absolute -top-6 -right-4 w-12 h-12 bg-gold rounded-full shadow-lg hidden md:block" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-pink rounded-full shadow-lg hidden md:block" />
            <div className="absolute top-1/2 -right-8 w-6 h-6 bg-teal rounded-full shadow-lg hidden md:block" />
          </div>
        </div>

        {/* Art Lessons Block */}
        <div id="lessons" className="mt-16 relative animate-on-scroll delay-200">
          <div className="bg-teal rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-xl">
            <div className="blob bg-white/10 w-[200px] h-[200px] -top-10 -right-10" />
            <div className="relative z-10">
              <h3 className="font-display text-white text-4xl uppercase tracking-wide">
                Art Lessons
              </h3>
              <p className="text-white/90 text-lg leading-relaxed mt-4 max-w-3xl">
                I also offer options for <Link href="/art-lessons" className="text-pink font-bold fun-underline" style={{ backgroundImage: "linear-gradient(120deg, #fff, #fff)" }}>art lessons</Link> in small groups for ages 4 and up. Provide your
                kids with a creative outlet through one-on-one instruction and encouragement. Art
                provides many developmental benefits and may even improve academic performance.
              </p>
            </div>
          </div>
        </div>

        {/* Service Area */}
        <div className="mt-8 bg-white rounded-2xl px-6 py-5 shadow-md border-l-4 border-gold animate-on-scroll delay-300">
          <p className="text-muted text-sm leading-relaxed">
            <span className="font-bold text-dark">Service Area:</span> Charlotte, NC and surrounding
            zip codes — 28207, 28209, 28211, 28210, 28226, 28270, 28105, 28277, 28104, 28173,
            29715, 28273, 28278, 28079, 29708, 28078*, 28031*, 28036*
          </p>
        </div>
      </div>
    </section>
  );
}
