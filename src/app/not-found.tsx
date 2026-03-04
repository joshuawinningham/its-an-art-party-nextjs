import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="bg-cream min-h-[70vh] flex items-center relative overflow-hidden">
        <div className="blob blob-animate bg-pink/5 w-[300px] h-[300px] -top-20 -left-20" />
        <div
          className="blob blob-animate bg-teal/5 w-[250px] h-[250px] bottom-10 -right-20"
          style={{ animationDelay: "-3s" }}
        />
        <div
          className="blob blob-animate bg-gold/5 w-[200px] h-[200px] top-1/3 right-[10%]"
          style={{ animationDelay: "-5s" }}
        />

        <div className="container mx-auto px-6 max-w-[800px] text-center relative z-10 py-24">
          <h1
            className="font-display text-teal text-[120px] md:text-[180px] leading-none"
            style={{ textShadow: "3px 3px 0 rgba(0,0,0,0.05)" }}
          >
            404
          </h1>
          <h2 className="font-display text-dark text-3xl md:text-4xl uppercase mt-2 mb-4">
            <span className="relative inline-block">
              Page Not Found
              <span className="absolute -bottom-1 left-0 w-full h-3 bg-gold/30 -skew-x-3 rounded" />
            </span>
          </h2>
          <p className="text-gray-500 mb-10 text-lg max-w-md mx-auto">
            Oops! Looks like this page wandered off to find more paint supplies. Let&apos;s get you
            back on track.
          </p>
          <Link href="/" className="btn-chunky bg-pink text-white hover:bg-pink-dark">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
