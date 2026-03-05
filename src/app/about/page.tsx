import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Cta from "@/components/sections/Cta";

export const metadata: Metadata = {
  title: "About It's an Art Party | Charlotte NC Kids Art",
  description:
    "Meet Robin, the artist behind It's an Art Party. Bringing creative paint parties and art lessons to kids in Charlotte, NC since 2016.",
  openGraph: {
    title: "About It's an Art Party | Charlotte NC Kids Art",
    description:
      "Meet Robin, the artist behind It's an Art Party. Bringing creative paint parties and art lessons to kids in Charlotte, NC since 2016.",
  },
};

const whyFeatures = [
  "Professional Planning",
  "Unlimited Party Themes",
  "Hassle Free Options",
  "Affordable Prices",
];

const policies = [
  {
    title: "Age Limitation",
    description: "Art parties are best suited for ages 4 and up.",
    colorBg: "bg-teal/10",
    colorText: "text-teal",
  },
  {
    title: "Food & Drink",
    description: "I do not supply food or drinks.",
    colorBg: "bg-gold/10",
    colorText: "text-gold-dark",
  },
  {
    title: "Decorations",
    description:
      "Decorations are up to you, but I can use your theme to design custom canvases.",
    colorBg: "bg-pink/10",
    colorText: "text-pink",
  },
  {
    title: "Deposit",
    description:
      "I require a $75 deposit at the time of booking to secure your party date and time.",
    colorBg: "bg-teal/10",
    colorText: "text-teal",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        title="About"
        quote={`"You can't use up creativity. The more you use, the more you have." Maya Angelou`}
      />

      {/* Intro */}
      <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
        <div className="blob blob-animate bg-teal/5 w-[300px] h-[300px] -top-20 -right-20" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative animate-on-scroll animate-scale-in">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-pink via-teal to-gold rounded-3xl rotate-3 opacity-20" />
                <Image
                  src="/images/robin-profile.jpeg"
                  alt="Robin Winningham"
                  width={460}
                  height={460}
                  className="relative w-full rounded-2xl shadow-xl"
                />
              </div>
              <div className="absolute -top-6 -right-4 w-12 h-12 bg-gold rounded-full shadow-lg hidden md:block" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-pink rounded-full shadow-lg hidden md:block" />
            </div>
            <div className="animate-on-scroll delay-200">
              <h2 className="font-display text-teal text-4xl md:text-[56px] uppercase leading-tight">
                Meet{" "}
                <span className="relative inline-block">
                  Robin
                  <span className="absolute -bottom-1 left-0 w-full h-3 bg-gold/30 -skew-x-3 rounded" />
                </span>
              </h2>
              <p className="text-body text-lg leading-relaxed mt-6">
                There&apos;s no greater feeling than watching a child light up when given the
                encouragement and opportunity to create something all their own.
              </p>
              <p className="mt-4 font-bold text-pink text-sm uppercase tracking-wider">
                Robin Winningham &mdash; Artist and Owner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="bg-white py-16 md:py-20 relative overflow-hidden">
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
        <div className="max-w-3xl mx-auto px-6 relative z-10 animate-on-scroll">
          <h2 className="font-display text-teal text-3xl md:text-[44px] uppercase text-center mb-10">
            My Story
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Hi! My name is Robin and I am the creator of It&apos;s an Art Party!
            </p>
            <p>
              I believe that everyone has the ability to be creative and express themselves through
              one art form or another. The possibilities are endless! I hope to help the next
              generation express themselves freely through art. It&apos;s an Art Party takes that
              goal and combines it with the celebration of a special event such as a birthday.
            </p>
            <p>
              My fondest childhood birthday memories are the art parties I had with friends. Not
              only did I love working on my special birthday art project, but I loved seeing what my
              friends created as well. It was a special time for making memories and doing something
              fun as a group.
            </p>
            <p>
              I can&apos;t remember a time when I wasn&apos;t pursuing a love of art. I started
              taking art classes in elementary school and put my first portfolio together at the age
              of 10. I was accepted into a magnet school for performing and visual arts from grades
              6-8. What I learned about art in those 3 years became the foundation for my dream of
              becoming a full-time artist.
            </p>
            <p>
              I sampled a lot of different mediums and tried many new techniques in those years. I
              continued to take art classes throughout high school and into college. I love working
              with my hands and today I am continuing to experiment with different mediums and
              challenge myself creatively. My abstract paintings can be found on my{" "}
              <a href="https://www.robinwinninghamart.com/" target="_blank" rel="noopener noreferrer">
                artist website
              </a>
              . You can also read more about me there.
            </p>
            <p>
              I have also spent many years teaching Sunday school and working with children at my
              church. I love watching children discover all the fun that art has to offer!
            </p>
            <p>
              Through It&apos;s an Art Party, I want to help celebrate your special occasions by
              bringing art to you! Visit the{" "}
              <Link href="/kids-birthdays/" className="text-pink font-bold fun-underline">
                kids painting parties page
              </Link>{" "}
              for project examples and pricing.
            </p>
            <p>
              I also offer art lessons for individuals or small groups. Find out more about{" "}
              <Link href="/art-lessons/" className="text-pink font-bold fun-underline">
                art lessons here
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
        <div
          className="blob blob-animate bg-gold/5 w-[300px] h-[300px] -top-10 -right-10"
          style={{ animationDelay: "-2s" }}
        />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center animate-on-scroll">
            <h2 className="font-display text-teal text-4xl md:text-[56px] uppercase leading-tight">
              Why Choose It&apos;s an Art Party?
            </h2>
            <p className="text-body text-lg mt-4 max-w-2xl mx-auto">
              I will work behind the scenes to create a custom design for a canvas painting that
              kids can take home as a party favor.
            </p>
          </div>
          <div className="mt-12 space-y-4 animate-on-scroll delay-200">
            {whyFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-8 h-8 bg-teal/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-teal"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-body font-bold">{feature}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-14 animate-on-scroll delay-400">
            {[
              { src: "/images/about-collage-1.jpeg", alt: "Kids art paint party" },
              { src: "/images/about-collage-2.jpeg", alt: "Unicorn kids canvas painting" },
              { src: "/images/about-collage-3.jpeg", alt: "Mermaid paint party" },
              { src: "/images/about-collage-4.jpeg", alt: "Dinosaur kids paint party" },
              { src: "/images/about-collage-5.jpeg", alt: "Butterfly kids paint party" },
              { src: "/images/about-collage-6.jpeg", alt: "Ice cream paint party" },
            ].map((img) => (
              <div key={img.src} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={768}
                  height={512}
                  className="w-full h-[200px] md:h-[240px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="bg-bg-light py-16 md:py-24 relative overflow-hidden speckle-bg">
        <div
          className="blob blob-animate bg-pink/5 w-[250px] h-[250px] -top-10 -left-10"
          style={{ animationDelay: "-3s" }}
        />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center animate-on-scroll">
            <h2 className="font-display text-teal text-4xl md:text-[56px] uppercase leading-tight">
              Other Policies
            </h2>
            <p className="text-body text-lg mt-4 max-w-2xl mx-auto">
              Read more about what to expect and contact me with any questions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 animate-on-scroll delay-200">
            {policies.map((policy) => (
              <div
                key={policy.title}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 ${policy.colorBg} rounded-full flex items-center justify-center shrink-0 mt-0.5`}
                  >
                    <svg
                      className={`w-5 h-5 ${policy.colorText}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-dark text-lg uppercase">{policy.title}</h3>
                    <p className="text-muted text-sm mt-1 leading-relaxed">{policy.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </main>
  );
}
