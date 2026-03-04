import Image from "next/image";

const images = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.png",
  "/images/gallery-7.jpg",
  "/images/gallery-8.jpg",
  "/images/gallery-9.jpg",
];

const delays = ["", "delay-100", "delay-200", "delay-100", "delay-200", "delay-300", "delay-200", "delay-300", "delay-400"];
const rotates = [
  "hover:-rotate-1",
  "hover:rotate-1",
  "hover:-rotate-1",
  "hover:rotate-1",
  "hover:-rotate-1",
  "hover:rotate-1",
  "hover:-rotate-1",
  "hover:rotate-1",
  "hover:-rotate-1",
];

export default function Gallery() {
  return (
    <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
      <div className="blob blob-animate bg-pink/5 w-[350px] h-[350px] top-20 -left-20" />
      <div
        className="blob blob-animate bg-gold/5 w-[280px] h-[280px] bottom-10 -right-10"
        style={{ animationDelay: "-3s" }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center animate-on-scroll">
          <h2 className="font-display text-teal text-4xl md:text-[64px] uppercase">
            Photo Gallery
          </h2>
          <p className="text-pink text-xl mt-3 italic font-bold">
            Here are a few examples of some great parties!
          </p>
        </div>

        <div className="masonry mt-12">
          {images.map((src, i) => (
            <div key={src} className={`masonry-item animate-on-scroll ${delays[i]}`}>
              <div
                className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group ${rotates[i]}`}
              >
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  width={400}
                  height={400}
                  className="w-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
