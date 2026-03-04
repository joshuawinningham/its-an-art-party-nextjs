import Hero from "@/components/sections/Hero";
import FeatureCards from "@/components/sections/FeatureCards";
import About from "@/components/sections/About";
import AsSeenIn from "@/components/sections/AsSeenIn";
import Gallery from "@/components/sections/Gallery";
import PartyOptions from "@/components/sections/PartyOptions";
import Pricing from "@/components/sections/Pricing";
import Cta from "@/components/sections/Cta";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureCards />
      <About />
      <AsSeenIn />
      <Gallery />
      <PartyOptions />
      <Pricing />
      <Cta />
      <Testimonials />
      <Contact />
    </main>
  );
}
