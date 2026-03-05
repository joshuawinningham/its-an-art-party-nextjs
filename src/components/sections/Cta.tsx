import Image from "next/image";
import Link from "next/link";

interface CtaProps {
  heading?: string;
  subtitle?: string;
  phoneLabel?: string;
  phone?: string;
  buttonText?: string;
  buttonUrl?: string;
  backgroundImage?: string;
}

export default function Cta({
  heading = "Ready to Book Your Party?",
  subtitle,
  phoneLabel = "Call or Text:",
  phone = "980-253-4829",
  buttonText = "Book Party Online",
  buttonUrl = "/contact",
  backgroundImage = "/images/book-cta-bg.jpg",
}: CtaProps) {
  const words = heading.split(" ");
  const mid = Math.ceil(words.length / 2);
  const line1 = words.slice(0, mid).join(" ");
  const line2 = words.slice(mid).join(" ");
  const phoneDigits = phone.replace(/[^0-9]/g, "");

  return (
    <section id="book" className="relative py-24 md:py-32 overflow-hidden">
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-pink/80" />

      {/* Paint drips from top */}
      <div
        className="paint-drip-gold"
        style={{ top: "-30px", bottom: "auto", left: "15%", height: "70px", width: "50px" }}
      />
      <div
        className="paint-drip-teal"
        style={{ top: "-30px", bottom: "auto", left: "55%", height: "55px" }}
      />
      <div
        className="paint-drip-gold"
        style={{ top: "-30px", bottom: "auto", right: "20%", height: "80px", width: "45px" }}
      />

      {/* Decorative blobs */}
      <div className="blob blob-animate bg-white/10 w-[300px] h-[300px] -top-20 -left-20 blur-xl" />
      <div
        className="blob blob-animate bg-white/10 w-[250px] h-[250px] -bottom-10 -right-10 blur-xl"
        style={{ animationDelay: "-3s" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center animate-on-scroll">
        <h2
          className="font-display text-white text-5xl md:text-[72px] uppercase leading-tight"
          style={{ textShadow: "3px 3px 0 rgba(0,0,0,0.2)" }}
        >
          {line1}
          <br />
          {line2}
        </h2>
        {subtitle && <p className="text-white/90 text-lg mt-4">{subtitle}</p>}
        <p className="text-white/90 text-xl mt-5 font-bold">
          {phoneLabel}{" "}
          <a href={`tel:${phoneDigits}`} className="fun-underline text-white" style={{ backgroundImage: "linear-gradient(120deg, #f7b731, #f7b731)" }}>
            {phone}
          </a>
        </p>
        <Link
          href={buttonUrl}
          className="btn-chunky bg-white text-pink mt-10 inline-block hover:bg-gold hover:text-dark text-xl"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
