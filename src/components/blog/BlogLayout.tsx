"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Calendar, Clock, ArrowUpRight, AlertCircle, RefreshCw } from "lucide-react";
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

export default function BlogLayout() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [displayedPosts, setDisplayedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const postsPerPage = 4;
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const CACHE_KEY = "medium_blog_posts_v2";
  const CACHE_TIME_KEY = "medium_blog_posts_timestamp_v2";
  const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

  // Fetch articles from our API with localstorage caching
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
      setError(err.message || "An unexpected error occurred. Please try again.");
      
      // Fallback to expired cache if available during network error
      const cachedData = localStorage.getItem(CACHE_KEY);
      if (cachedData) {
        setPosts(JSON.parse(cachedData));
        setError("Network error. Showing cached content.");
      }
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // Filter posts by selected tag
  const filteredPosts = selectedTag
    ? posts.filter((post) => post.categories.includes(selectedTag))
    : posts;

  // Manage pagination / progressive rendering
  useEffect(() => {
    setDisplayedPosts(filteredPosts.slice(0, page * postsPerPage));
  }, [filteredPosts, page]);

  // Reset page when filter changes
  useEffect(() => {
    setPage(1);
  }, [selectedTag]);

  // Infinite Scroll using IntersectionObserver
  useEffect(() => {
    if (loading || displayedPosts.length >= filteredPosts.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [loading, displayedPosts, filteredPosts]);

  // Extract all unique tags
  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.categories))
  ).slice(0, 12); // Limit to top 12 tags for UI clean flow

  // Estimate reading time based on description
  const getReadingTime = (desc: string) => {
    const words = desc.split(/\s+/).length;
    const minutes = Math.max(3, Math.ceil(words / 220) + 2); // Medium average speed
    return `${minutes} min read`;
  };

  // Format date string cleanly
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

  const featuredPost = filteredPosts[0];
  const remainingPosts = displayedPosts.slice(1);

  const handlePostClick = (e: React.MouseEvent, post: BlogPost) => {
    e.preventDefault();
    setActivePost(post);
  };

  return (
    <div className="w-full">
      {/* Back to Home Link */}
      <div className="flex justify-between items-center mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest text-text-secondary hover:text-accent-primary transition-colors group uppercase"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Terminal</span>
        </Link>

        {/* Cache Refresh button */}
        <button
          onClick={() => fetchArticles(true)}
          disabled={loading}
          className="p-2 rounded-full bg-bg-card/40 border border-border-custom hover:border-accent-primary/40 text-text-secondary hover:text-text-primary transition-all duration-300 cursor-pointer disabled:opacity-40"
          title="Force refresh Medium feed"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin" : ""}`} />
        </button>
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

      {/* Tag Filtering Row */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-border-custom/30 select-none">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer ${
              selectedTag === null
                ? "bg-accent-primary text-text-primary border border-accent-hover/30"
                : "bg-bg-card/40 border border-border-custom text-text-secondary hover:border-accent-primary/30 hover:text-text-primary"
            }`}
          >
            All Articles
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer ${
                tag === selectedTag
                  ? "bg-accent-primary text-text-primary border border-accent-hover/30"
                  : "bg-bg-card/40 border border-border-custom text-text-secondary hover:border-accent-primary/30 hover:text-text-primary"
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      )}

      {/* Error state */}
      {error && !loading && (
        <div className="p-4 rounded-xl bg-accent-primary/5 border border-accent-primary/30 text-accent-hover flex items-start gap-3 mb-8">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="text-xs font-mono">
            <p className="font-semibold uppercase tracking-wider mb-1">System Notice</p>
            <p>{error}</p>
          </div>
        </div>
      )}

      {/* Loading Skeleton */}
      {loading && posts.length === 0 && (
        <div className="space-y-12">
          {/* Featured Post Skeleton */}
          <div className="w-full rounded-2xl bg-bg-card/20 border border-border-custom/50 p-6 sm:p-8 animate-pulse grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-4">
              <div className="h-4 bg-bg-card w-1/4 rounded" />
              <div className="h-8 bg-bg-card w-3/4 rounded" />
              <div className="h-4 bg-bg-card w-full rounded" />
              <div className="h-4 bg-bg-card w-5/6 rounded" />
              <div className="h-10 bg-bg-card w-1/3 rounded-full mt-6" />
            </div>
            <div className="lg:col-span-5 h-[220px] bg-bg-card rounded-xl" />
          </div>

          {/* Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-bg-card/20 border border-border-custom/50 space-y-4 animate-pulse">
                <div className="h-[180px] bg-bg-card rounded-xl" />
                <div className="h-4 bg-bg-card w-1/3 rounded" />
                <div className="h-6 bg-bg-card w-3/4 rounded" />
                <div className="h-4 bg-bg-card w-full rounded" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Blog Content */}
      {!loading && filteredPosts.length === 0 && (
        <div className="py-20 text-center text-text-secondary/50 font-mono text-sm border border-dashed border-border-custom/30 rounded-2xl">
          No articles found matching the current criteria.
        </div>
      )}

      {filteredPosts.length > 0 && (
        <div className="space-y-16">
          {/* Featured Article Section */}
          {page === 1 && !selectedTag && featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group p-6 sm:p-8 rounded-2xl bg-bg-card/40 border border-border-custom backdrop-blur-md relative overflow-hidden hover:border-accent-primary/30 transition-all duration-500 shadow-2xl"
            >
              {/* Card top gradient glow */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Featured details */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-xs font-mono text-accent-primary uppercase">
                      <span>Featured Article</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-border-custom" />
                      <span>{getReadingTime(featuredPost.description)}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary tracking-tight group-hover:text-accent-primary transition-colors duration-300">
                      <a href={featuredPost.link} onClick={(e) => handlePostClick(e, featuredPost)}>
                        {featuredPost.title}
                      </a>
                    </h2>

                    <p className="text-[13px] sm:text-[14px] text-text-secondary leading-relaxed font-body">
                      {featuredPost.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {featuredPost.categories.map((c) => (
                        <span
                          key={c}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-bg-base border border-border-custom/50 text-text-secondary"
                        >
                          #{c}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 shrink-0 sm:ml-auto">
                      <span className="flex items-center gap-1.5 text-xs text-text-secondary/60 font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(featuredPost.pubDate)}
                      </span>

                      <button
                        onClick={(e) => handlePostClick(e, featuredPost)}
                        className="flex items-center gap-1.5 text-xs text-accent-primary hover:text-accent-hover transition-colors font-semibold font-mono uppercase tracking-wider cursor-pointer"
                      >
                        Read Article
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Featured Thumbnail */}
                <div className="lg:col-span-5 relative w-full h-[220px] sm:h-[260px] rounded-xl overflow-hidden bg-bg-base/80 border border-border-custom/50 group-hover:border-accent-primary/20 transition-all duration-500 cursor-pointer" onClick={(e) => handlePostClick(e, featuredPost)}>
                  <img
                    src={featuredPost.thumbnail}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                    loading="eager"
                  />
                  {/* Subtle vignette layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-base/50 to-transparent opacity-80" />
                </div>
              </div>
            </motion.div>
          )}

          {/* Latest Articles Section / Grid */}
          <div className="space-y-6">
            <h3 className="font-mono text-[10px] tracking-widest text-text-secondary/40 uppercase">
              Latest Publications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(page === 1 && !selectedTag ? remainingPosts : displayedPosts).map((post, idx) => (
                <motion.div
                  key={post.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
                  className="group p-5 rounded-2xl bg-bg-card/45 border border-border-custom/50 backdrop-blur-md hover:border-accent-primary/30 hover:shadow-[0_0_30px_rgba(200,67,10,0.05)] transition-all duration-300 flex flex-col justify-between min-h-[360px]"
                >
                  <div className="space-y-4">
                    {/* Thumbnail */}
                    <div className="relative w-full h-[180px] rounded-xl overflow-hidden bg-bg-base/80 border border-border-custom/30 group-hover:border-accent-primary/20 transition-all duration-500 cursor-pointer" onClick={(e) => handlePostClick(e, post)}>
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                        loading="lazy"
                      />
                    </div>

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

                    <h4 className="text-lg font-heading font-bold text-text-primary uppercase tracking-tight group-hover:text-accent-primary transition-colors duration-300 leading-snug">
                      <a href={post.link} onClick={(e) => handlePostClick(e, post)}>
                        {post.title}
                      </a>
                    </h4>

                    <p className="text-[12px] text-text-secondary/80 leading-relaxed font-body line-clamp-3">
                      {post.description}
                    </p>
                  </div>

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
                        Read More
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Infinite Scroll Trigger Indicator */}
      {displayedPosts.length < filteredPosts.length && !loading && (
        <div ref={loadMoreRef} className="py-12 flex justify-center">
          <div className="flex items-center gap-2 text-xs font-mono text-text-secondary/50">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-ping" />
            <span>Fetching more records...</span>
          </div>
        </div>
      )}

      {/* Embedded Slide-over Reader */}
      <AnimatePresence>
        {activePost && (
          <BlogReader post={activePost} onClose={() => setActivePost(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
