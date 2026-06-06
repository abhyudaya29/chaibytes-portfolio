import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { getAllPosts } from "@/lib/blog";
import NoiseBg from "@/components/shared/NoiseBg";
import CustomCursor from "@/components/shared/CustomCursor";
import { ArrowLeft, Calendar, Clock, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — ChaiBytes by Abhyudaya",
  description: "Read the latest engineering articles on full stack architecture, performance marketing automation, real-time WebSockets, and AI workflows by ChaiBytes by Abhyudaya.",
  openGraph: {
    title: "Blog — ChaiBytes by Abhyudaya",
    description: "Read the latest engineering articles on full stack architecture, performance marketing automation, real-time WebSockets, and AI workflows by ChaiBytes by Abhyudaya.",
    type: "website",
    url: "https://www.chaibytes.in/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — ChaiBytes by Abhyudaya",
    description: "Read the latest engineering articles on full stack architecture, performance marketing automation, real-time WebSockets, and AI workflows.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "ChaiBytes Blog",
    "url": "https://www.chaibytes.in/blog",
    "description": "Read the latest engineering articles on full stack architecture, performance marketing automation, real-time WebSockets, and AI workflows by ChaiBytes by Abhyudaya.",
    "publisher": {
      "@type": "Person",
      "name": "ChaiBytes by Abhyudaya",
      "url": "https://www.chaibytes.in"
    },
    "author": {
      "@type": "Person",
      "name": "ChaiBytes by Abhyudaya"
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

        <div className="max-w-4xl mx-auto relative z-10 pt-8 pb-24">
          {/* Back to Home Link */}
          <div className="flex justify-between items-center mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest text-text-secondary hover:text-accent-primary transition-colors group uppercase"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Terminal</span>
            </Link>
          </div>

          {/* Header section */}
          <div className="flex flex-col gap-4 max-w-2xl mb-12">
            <span className="font-mono text-[11px] tracking-[0.15em] text-accent-primary uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
              Intellect Feed
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold font-heading tracking-tight text-text-primary uppercase">
              ChaiBytes Blog
            </h1>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-body">
              Writing about full stack infrastructure, real-time message routing, prompt workflows, and engineering craftsmanship.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="py-20 text-center text-text-secondary/50 font-mono text-sm border border-dashed border-border-custom/30 rounded-2xl">
              No articles found. Check back later!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <div
                  key={post.slug}
                  className="group p-6 rounded-2xl bg-bg-card/45 border border-border-custom/50 backdrop-blur-md hover:border-accent-primary/30 hover:shadow-[0_0_30px_rgba(200,67,10,0.05)] transition-all duration-300 flex flex-col justify-between min-h-[260px]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-[10px] font-mono text-text-secondary/40">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-accent-primary/80" />
                        {post.readingTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(post.date)}
                      </span>
                    </div>

                    <h2 className="text-xl font-heading font-bold text-text-primary uppercase tracking-tight group-hover:text-accent-primary transition-colors duration-300 leading-snug">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-[13px] text-text-secondary/80 leading-relaxed font-body line-clamp-3">
                      {post.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-border-custom/20 mt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1 overflow-hidden">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[9px] font-mono bg-bg-base border border-border-custom/40 text-text-secondary/80"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-1 text-[11px] font-mono font-semibold text-accent-primary hover:text-accent-hover transition-colors uppercase"
                      >
                        Read More
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
  );
}
