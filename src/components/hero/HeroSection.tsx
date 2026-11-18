"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Terminal, Cpu, Flame, Coffee, Bot, Zap } from "lucide-react";
import { HERO_TITLES, PERSONAL_INFO } from "@/lib/constants";
import SectionLabel from "../shared/SectionLabel";
import { Spotlight } from "../ui/spotlight";
import { BackgroundBeams } from "../ui/background-beams";
import { ButtonMovingBorder } from "../ui/moving-border";

export default function HeroSection() {
  const [titleIdx, setTitleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIdx((prev) => (prev + 1) % HERO_TITLES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-32 pb-20 px-6 sm:px-12 md:px-16 overflow-hidden bg-bg-base"
    >
      {/* Aceternity Spotlight: Warm Chai Glow radiating from top-center */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="var(--accent-primary)"
      />

      {/* Subtle procedural background beams with warm grid */}
      <BackgroundBeams />

      {/* Two-column layout grid */}
      <div className="relative w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center z-10">
        
        {/* Left Column: Hero Typography & Value Prop */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12, delayChildren: 0.1 },
            },
          }}
          className="lg:col-span-7 flex flex-col items-start space-y-6"
        >
          {/* Eyebrow Label with Tea/Byte Badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } },
            }}
            className="flex items-center gap-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-elevated border border-border-custom text-xs font-mono text-text-secondary shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-accent-primary font-semibold">ChaiBytes</span>
              <span className="text-border-custom">•</span>
              <span>Brewing AI Products for Real Business</span>
            </div>
          </motion.div>

          {/* Main H1 Heading */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 180 } },
            }}
            className="relative"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold font-heading tracking-tight text-text-primary uppercase leading-[1.08]">
              AI Products Built <br />
              for <span className="font-editorial italic text-accent-primary font-normal lowercase">Real Business.</span>
            </h1>
          </motion.div>

          {/* Rotating Dynamic Title Carousel */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            className="h-9 sm:h-11 overflow-hidden flex items-center"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={titleIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="text-base sm:text-xl font-mono text-accent-primary font-medium tracking-wide uppercase flex items-center gap-2"
              >
                <span className="text-accent-primary/60 font-mono text-sm">brew:</span>
                <span>{HERO_TITLES[titleIdx]}</span>
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Full Positioning Copy */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed font-body"
          >
            ChaiBytes is an AI SaaS product studio building practical AI agents, voice systems, automation platforms, and scalable SaaS products engineered to solve real business problems.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto"
          >
            {/* Primary Moving Border CTA */}
            <a href="#contact" className="w-full sm:w-auto">
              <ButtonMovingBorder
                duration={3500}
                borderRadius="9999px"
                className="px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider gap-2 font-medium"
              >
                <span>Brew Your Product With Us</span>
                <ArrowUpRight className="w-4 h-4 text-accent-primary" />
              </ButtonMovingBorder>
            </a>

            {/* Secondary Link */}
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-bg-card border border-border-custom hover:border-accent-primary text-text-secondary hover:text-text-primary text-xs font-mono tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Explore Products</span>
              <span className="text-accent-primary">↓</span>
            </a>
          </motion.div>

          {/* Quick Metrics Pills */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            className="grid grid-cols-3 gap-3 pt-4 border-t border-border-custom/50 w-full max-w-md"
          >
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-text-primary">100k+</div>
              <div className="text-[11px] font-mono text-text-secondary">AI Calls Handled</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-accent-primary">0 to 1</div>
              <div className="text-[11px] font-mono text-text-secondary">SaaS Engineering</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-text-primary">24/7</div>
              <div className="text-[11px] font-mono text-text-secondary">Autonomous Systems</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Visual Showcase (New Logo Cup + Interactive Code Terminal Card) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-accent-primary/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Floating Chai Cup Badge & Live System Card */}
          <div className="relative w-full max-w-md rounded-3xl bg-bg-card border border-border-custom p-6 sm:p-7 shadow-2xl backdrop-blur-md overflow-hidden">
            
            {/* Top Bar with Brand Badge */}
            <div className="flex items-center justify-between pb-5 border-b border-border-custom/60">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-2xl bg-bg-elevated border border-border-custom p-1.5 shadow-sm">
                  <Image
                    src="/brand/logo-icon.png"
                    alt="ChaiBytes Tea Cup Icon"
                    width={44}
                    height={44}
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
                <div>
                  <div className="font-heading font-bold text-sm text-text-primary">
                    Chai<span className="text-accent-primary">Bytes</span> Engine
                  </div>
                  <div className="text-[10px] font-mono text-text-secondary">
                    status: ready · model: chaibytes-v2
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Live
              </div>
            </div>

            {/* Simulated Agent Execution Terminal */}
            <div className="mt-5 space-y-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-bg-elevated/70 border border-border-custom/60 text-text-secondary space-y-1.5">
                <div className="text-[10px] uppercase tracking-wider text-accent-primary font-bold flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5" />
                  <span>Pipeline Active</span>
                </div>
                <p className="text-text-primary font-medium text-xs">
                  &gt; Ingesting real-time business voice call &amp; clinic diagnostic queries...
                </p>
                <div className="text-[11px] text-text-secondary/80">
                  Latency: <span className="text-emerald-500 font-semibold">240ms</span> · Accuracy: <span className="text-accent-primary font-semibold">99.4%</span>
                </div>
              </div>

              {/* Live Feature Badges */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-bg-elevated/40 border border-border-custom/50 flex items-center gap-2.5">
                  <Flame className="w-4 h-4 text-accent-primary" />
                  <div>
                    <div className="text-[11px] font-bold text-text-primary">Voice Agents</div>
                    <div className="text-[9px] text-text-secondary">Telecom-grade latency</div>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-bg-elevated/40 border border-border-custom/50 flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-accent-primary" />
                  <div>
                    <div className="text-[11px] font-bold text-text-primary">AEO / GEO</div>
                    <div className="text-[9px] text-text-secondary">LLM engine visibility</div>
                  </div>
                </div>
              </div>

              {/* Bottom Brand Mark Display */}
              <div className="mt-4 pt-4 border-t border-border-custom/60 flex items-center justify-between text-[11px] text-text-secondary">
                <span className="font-editorial italic text-accent-primary text-sm">
                  Brewing real software
                </span>
                <span className="font-mono text-[10px] bg-bg-elevated px-2 py-0.5 rounded border border-border-custom">
                  v2.4 production
                </span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
