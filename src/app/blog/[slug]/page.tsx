import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);

  return (
    <main>
      {/* Hero */}
      <section className="bg-teal text-white pt-28 pb-20 md:pt-32 md:pb-24 px-6 relative overflow-hidden">
        <div className="blob blob-animate bg-pink/10 w-[250px] h-[250px] -top-16 -left-16" />
        <div
          className="blob blob-animate bg-gold/10 w-[200px] h-[200px] top-10 -right-10"
          style={{ animationDelay: "-3s" }}
        />
        <div className="container mx-auto max-w-wide relative z-10">
          <Link
            href="/blog"
            className="text-white/70 text-sm font-bold hover:text-white transition-colors mb-4 inline-block"
          >
            &larr; Back to Blog
          </Link>
          <h1
            className="font-display text-4xl md:text-[56px] uppercase leading-tight max-w-4xl"
            style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.15)" }}
          >
            {post.title}
          </h1>
          <div className="flex items-center gap-4 mt-4 text-white/70 text-sm">
            <time>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>by {post.author}</span>
          </div>
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

      {/* Content */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6">
          {post.image && (
            <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={450}
                className="w-full object-cover"
              />
            </div>
          )}

          <div
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-teal prose-headings:uppercase prose-a:text-pink prose-a:font-bold prose-img:rounded-2xl prose-img:shadow-lg prose-figure:my-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 flex items-center gap-3">
            <span className="bg-pink/10 text-pink text-xs font-bold px-3 py-1 rounded-full uppercase">
              {post.category}
            </span>
          </div>

          <div className="mt-10">
            <Link
              href="/blog"
              className="btn-chunky bg-teal text-white hover:bg-teal-dark text-base inline-block"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="bg-warm-white py-16 md:py-24">
          <div className="max-w-wide mx-auto px-4">
            <h2 className="font-display text-teal text-3xl md:text-[44px] uppercase text-center mb-12">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((relPost) => (
                <article
                  key={relPost.slug}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {relPost.image && (
                    <div className="h-[200px] overflow-hidden">
                      <Image
                        src={relPost.image}
                        alt={relPost.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <time className="text-muted text-xs font-bold uppercase tracking-wider">
                      {new Date(relPost.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <h3 className="font-display text-dark text-xl uppercase mt-2 hover:text-pink transition-colors">
                      <Link href={`/blog/${relPost.slug}`}>{relPost.title}</Link>
                    </h3>
                    <p className="text-muted text-sm mt-2 leading-relaxed">{relPost.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
