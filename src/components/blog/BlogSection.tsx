"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowUpRight, AlertCircle, RefreshCw, BookOpen } from "lucide-react";
import SectionLabel from "../shared/SectionLabel";
import Link from "next/link";
import BlogReader from "./BlogReader";

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  content: string;
  thumbnail: string;
  categories: string[];
}

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const CACHE_KEY = "medium_blog_posts_v1";
  const CACHE_TIME_KEY = "medium_blog_posts_timestamp_v1";
  const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

  // Fetch articles from Next API route with localstorage caching
  const fetchArticles = async (forceRefresh = false) => {
    try {
      setLoading(true);
      setError(null);

      if (!forceRefresh) {
        const cachedData = localStorage.getItem(CACHE_KEY);
        const cachedTime = localStorage.getItem(CACHE_TIME_KEY);

        if (cachedData && cachedTime) {
          const isExpired = Date.now() - parseInt(cachedTime) > CACHE_DURATION;
          if (!isExpired) {
            const parsedPosts = JSON.parse(cachedData);
            setPosts(parsedPosts);
            setLoading(false);
            return;
          }
        }
      }

      if (forceRefresh) setIsRefreshing(true);

      const res = await fetch("/api/blog");
      const data = await res.json();

      if (data.success && data.posts) {
        setPosts(data.posts);
        localStorage.setItem(CACHE_KEY, JSON.stringify(data.posts));
        localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());
      } else {
        throw new Error(data.error || "Failed to fetch blog posts");
      }
    } catch (err: any) {
      console.error("Error fetching blog articles:", err);
      setError(err.message || "Could not resolve feed. Showing cached records.");
      
      const cachedData = localStorage.getItem(CACHE_KEY);
      if (cachedData) {
        setPosts(JSON.parse(cachedData));
      }
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // Display only top 3 articles for landing page section
  const displayPosts = posts.slice(0, 3);

  const getReadingTime = (desc: string) => {
    const words = desc.split(/\s+/).length;
    const minutes = Math.max(3, Math.ceil(words / 200) + 1);
    return `${minutes} min read`;
  };

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

  const handlePostClick = (e: React.MouseEvent, post: BlogPost) => {
    e.preventDefault();
    setActivePost(post);
  };

  return (
    <section id="blog" className="py-24 sm:py-32 border-t border-border-custom relative overflow-hidden bg-bg-base/30">
      {/* Ambient background lights */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-accent-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col items-start gap-4 max-w-2xl">
            <SectionLabel label="07 / Intellect Feed" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-primary uppercase">
              ChaiBytes Blog
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-body">
              Latest thoughts and engineering articles on full stack architecture, performance marketing, and AI workflows.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            {/* Force refresh button */}
            <button
              onClick={() => fetchArticles(true)}
              disabled={loading}
              className="p-2.5 rounded-full bg-bg-card/40 border border-border-custom hover:border-accent-primary/40 text-text-secondary hover:text-text-primary transition-all duration-300 cursor-pointer disabled:opacity-40"
              title="Force refresh Medium feed"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} />
            </button>

            {/* Link to actual blog route */}
            <Link
              href="/blog"
              className="px-5 py-2.5 rounded-full bg-bg-elevated hover:bg-bg-card border border-border-custom hover:border-accent-primary/40 text-xs font-semibold font-mono tracking-wider uppercase text-text-primary flex items-center gap-2 transition-all duration-300"
            >
              <BookOpen className="w-4 h-4 text-accent-primary" />
              <span>Full Blog Page</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Error message */}
        {error && !loading && (
          <div className="p-4 rounded-xl bg-accent-primary/5 border border-accent-primary/30 text-accent-hover flex items-start gap-3 mb-8 max-w-xl">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div className="text-xs font-mono">
              <p className="font-semibold uppercase tracking-wider mb-1">Feed Status</p>
              <p>{error}</p>
            </div>
          </div>
        )}

        {/* Loading Skeletons */}
        {loading && displayPosts.length === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-bg-card/20 border border-border-custom/50 space-y-4 animate-pulse min-h-[360px] flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="h-[180px] bg-bg-card rounded-xl" />
                  <div className="h-4 bg-bg-card w-1/3 rounded" />
                  <div className="h-6 bg-bg-card w-3/4 rounded" />
                  <div className="h-4 bg-bg-card w-full rounded" />
                </div>
                <div className="h-8 bg-bg-card w-full rounded mt-4" />
              </div>
            ))}
          </div>
        )}

        {/* Posts Grid */}
        {!loading && displayPosts.length === 0 && (
          <div className="py-20 text-center text-text-secondary/50 font-mono text-sm border border-dashed border-border-custom/30 rounded-2xl">
            No articles loaded from Medium feed.
          </div>
        )}

        {displayPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayPosts.map((post, idx) => (
              <motion.div
                key={post.link}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-5 rounded-2xl bg-bg-card/45 border border-border-custom/50 backdrop-blur-md hover:border-accent-primary/35 hover:shadow-[0_0_30px_rgba(200,67,10,0.06)] transition-all duration-300 flex flex-col justify-between min-h-[380px]"
              >
                <div className="space-y-4">
                  {/* Thumbnail Image */}
                  <div className="relative w-full h-[180px] rounded-xl overflow-hidden bg-bg-base/80 border border-border-custom/30 group-hover:border-accent-primary/20 transition-all duration-500 cursor-pointer" onClick={(e) => handlePostClick(e, post)}>
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 pointer-events-none"
                      loading="lazy"
                    />
                  </div>

                  {/* Metadata Row */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-text-secondary/40">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-accent-primary/80" />
                      {getReadingTime(post.description)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.pubDate)}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-[17px] font-heading font-bold text-text-primary uppercase tracking-tight group-hover:text-accent-primary transition-colors duration-300 leading-snug">
                    <a href={post.link} onClick={(e) => handlePostClick(e, post)}>
                      {post.title}
                    </a>
                  </h4>

                  {/* Snippet */}
                  <p className="text-[12px] text-text-secondary/80 leading-relaxed font-body line-clamp-3">
                    {post.description}
                  </p>
                </div>

                {/* Footer and link */}
                <div className="space-y-4 pt-4 border-t border-border-custom/20 mt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 overflow-hidden">
                      {post.categories.slice(0, 2).map((cat) => (
                        <span
                          key={cat}
                          className="px-2 py-0.5 rounded text-[9px] font-mono bg-bg-base border border-border-custom/40 text-text-secondary/80"
                        >
                          #{cat}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={(e) => handlePostClick(e, post)}
                      className="flex items-center gap-1 text-[11px] font-mono font-semibold text-accent-primary hover:text-accent-hover transition-colors uppercase cursor-pointer"
                    >
                      Read post
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>

      {/* Embedded Slide-over Reader */}
      <AnimatePresence>
        {activePost && (
          <BlogReader post={activePost} onClose={() => setActivePost(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
