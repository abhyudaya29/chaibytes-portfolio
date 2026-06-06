import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import NoiseBg from "@/components/shared/NoiseBg";
import CustomCursor from "@/components/shared/CustomCursor";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const options = {
  theme: "one-dark-pro",
  keepBackground: true,
};

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found — ChaiBytes",
    };
  }

  return {
    title: `${post.title} — ChaiBytes by Abhyudaya`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://www.chaibytes.in/blog/${slug}`,
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "url": `https://www.chaibytes.in/blog/${slug}`,
    "author": {
      "@type": "Person",
      "name": "ChaiBytes by Abhyudaya",
      "url": "https://www.chaibytes.in"
    }
  };

  return (
    <div className="relative min-h-screen bg-bg-base text-text-primary selection:bg-accent-primary selection:text-text-primary overflow-x-hidden font-body py-12 px-6 sm:px-12 md:px-24">
        {/* Procedural background noise overlay */}
        <NoiseBg />

        {/* Hardware accelerated physics-based custom cursor */}
        <CustomCursor />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="max-w-3xl mx-auto relative z-10 pt-8 pb-24">
          {/* Back to Blog */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest text-text-secondary hover:text-accent-primary transition-colors group uppercase"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Intellect Feed</span>
            </Link>
          </div>

          {/* Article Header */}
          <header className="space-y-6 mb-12 pb-8 border-b border-border-custom/30">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-text-secondary/60">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-accent-primary" />
                {formatDate(post.date)}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-border-custom" />
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-accent-primary" />
                {post.readingTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-text-primary uppercase tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-text-secondary font-body leading-relaxed max-w-2xl">
              {post.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-bg-card border border-border-custom text-text-secondary"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          {/* Article Body */}
          <article className="prose prose-invert max-w-none prose-orange prose-headings:font-heading prose-headings:uppercase prose-headings:tracking-wide prose-p:text-text-secondary/90 prose-p:leading-relaxed prose-code:text-accent-primary prose-a:text-accent-primary hover:prose-a:text-accent-hover transition-colors font-body">
            <MDXRemote 
              source={post.content} 
              options={{
                mdxOptions: {
                  rehypePlugins: [[rehypePrettyCode as any, options]],
                }
              }}
            />
          </article>
        </div>
      </div>
  );
}
