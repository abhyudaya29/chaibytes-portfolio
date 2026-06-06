"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { X, Calendar, Clock, ExternalLink } from "lucide-react";

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  content: string;
  thumbnail: string;
  categories: string[];
}

interface BlogReaderProps {
  post: BlogPost | null;
  onClose: () => void;
}

export default function BlogReader({ post, onClose }: BlogReaderProps) {
  // Lock body scroll when reader is active
  useEffect(() => {
    if (post) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [post, onClose]);

  if (!post) return null;

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

  const getReadingTime = (desc: string) => {
    const words = desc.split(/\s+/).length;
    const minutes = Math.max(3, Math.ceil(words / 200) + 1);
    return `${minutes} min read`;
  };

  return (
    <div className="fixed inset-0 z-[1000] flex justify-end">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-[10px]"
      />

      {/* Reader Slide Over Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 28, stiffness: 220 }}
        className="relative w-full max-w-3xl h-full bg-[#1A1208]/95 border-l border-border-custom shadow-2xl flex flex-col z-10 overflow-y-auto"
        data-lenis-prevent
      >
        {/* Floating Header */}
        <div className="sticky top-0 inset-x-0 py-4 px-6 sm:px-10 bg-[#1A1208]/90 backdrop-blur-md border-b border-border-custom/30 flex items-center justify-between z-20 select-none">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-mono tracking-widest text-text-secondary hover:text-accent-primary transition-colors group cursor-pointer"
          >
            <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
            <span>CLOSE READER</span>
          </button>

          <a
            href={post.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono font-semibold text-accent-primary hover:text-accent-hover transition-colors uppercase"
          >
            <span>Read on Medium</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Content Body */}
        <div className="flex-1 py-10 px-6 sm:px-10 md:px-12 max-w-2xl mx-auto space-y-8">
          {/* Metadata */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-accent-primary uppercase">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {getReadingTime(post.description)}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-border-custom" />
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(post.pubDate)}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-heading text-text-primary tracking-tight leading-tight uppercase">
              {post.title}
            </h1>

            {/* Tags row */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {post.categories.map((c) => (
                <span
                  key={c}
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-bg-card border border-border-custom/50 text-text-secondary"
                >
                  #{c}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Banner Image */}
          <div className="relative w-full h-[240px] sm:h-[320px] rounded-xl overflow-hidden bg-bg-base border border-border-custom/40">
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-full object-cover pointer-events-none"
            />
          </div>

          {/* Rich Text Body Content */}
          <article
            className="blog-content-rich font-body text-[14px] sm:text-[15px] leading-relaxed text-text-secondary/90 space-y-6 pb-20 select-text"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </motion.div>

      {/* Embedded CSS overrides for styling raw Medium HTML elements */}
      <style jsx global>{`
        .blog-content-rich h2,
        .blog-content-rich h3,
        .blog-content-rich h4 {
          font-family: var(--font-heading), sans-serif;
          font-weight: 700;
          color: var(--color-text-primary) !important;
          margin-top: 1.8rem;
          margin-bottom: 0.8rem;
          letter-spacing: -0.025em;
          text-transform: uppercase;
        }
        .blog-content-rich h2 {
          font-size: 1.4rem;
        }
        .blog-content-rich h3 {
          font-size: 1.25rem;
        }
        .blog-content-rich p {
          margin-bottom: 1.25rem;
          color: var(--color-text-secondary);
        }
        .blog-content-rich blockquote {
          border-left: 3px solid var(--color-accent-primary);
          padding-left: 1.25rem;
          font-style: italic;
          color: var(--color-text-primary);
          background: rgba(200, 67, 10, 0.03);
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          margin: 1.5rem 0;
          border-radius: 0 8px 8px 0;
        }
        .blog-content-rich pre {
          font-family: var(--font-mono), monospace;
          font-size: 12px;
          background: var(--color-bg-base) !important;
          border: 1px solid var(--color-border-custom) !important;
          padding: 1.25rem;
          border-radius: 12px;
          overflow-x: auto;
          margin: 1.5rem 0;
          line-height: 1.6;
        }
        .blog-content-rich code {
          font-family: var(--font-mono), monospace;
          font-size: 12px;
          background: var(--color-bg-base);
          padding: 2px 6px;
          border-radius: 4px;
          color: var(--color-accent-hover);
        }
        .blog-content-rich pre code {
          padding: 0;
          background: transparent;
          color: inherit;
        }
        .blog-content-rich a {
          color: var(--color-accent-hover);
          text-decoration: underline;
          text-decoration-color: rgba(232, 114, 42, 0.3);
          transition: color 0.2s ease;
        }
        .blog-content-rich a:hover {
          color: var(--color-accent-primary);
        }
        .blog-content-rich ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1.25rem;
        }
        .blog-content-rich ol {
          list-style-type: decimal;
          padding-left: 1.5rem;
          margin-bottom: 1.25rem;
        }
        .blog-content-rich li {
          margin-bottom: 0.4rem;
        }
        .blog-content-rich figure {
          margin: 1.5rem 0;
          text-align: center;
        }
        .blog-content-rich figure img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          border: 1px solid var(--color-border-custom);
        }
        .blog-content-rich figcaption {
          font-size: 11px;
          color: rgba(216, 199, 181, 0.5);
          font-family: var(--font-mono), monospace;
          margin-top: 0.5rem;
        }
      `}</style>
    </div>
  );
}
