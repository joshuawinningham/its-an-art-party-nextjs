import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips and ideas for kids art projects, paint parties, and creative activities from It's an Art Party in Charlotte, NC.",
  openGraph: {
    title: "Blog | It's an Art Party",
    description:
      "Tips and ideas for kids art projects, paint parties, and creative activities from It's an Art Party in Charlotte, NC.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main>
      <PageHero title="Blog" />

      <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
        <div className="blob blob-animate bg-pink/5 w-[300px] h-[300px] top-10 -right-10" />
        <div
          className="blob blob-animate bg-teal/5 w-[250px] h-[250px] bottom-20 -left-10"
          style={{ animationDelay: "-3s" }}
        />

        <div className="max-w-wide mx-auto px-4 relative z-10">
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  {post.image && (
                    <div className="md:w-[320px] h-[220px] md:h-auto overflow-hidden shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={320}
                        height={220}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <time className="text-muted text-xs font-bold uppercase tracking-wider">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <span className="bg-pink/10 text-pink text-xs font-bold px-3 py-1 rounded-full uppercase">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="font-display text-dark text-2xl md:text-3xl uppercase hover:text-pink transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-muted mt-3 leading-relaxed">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-teal font-bold text-sm mt-4 hover:text-teal-dark transition-colors inline-block"
                    >
                      Read More &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
