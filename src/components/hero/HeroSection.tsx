"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { HERO_TITLES, PERSONAL_INFO } from "@/lib/constants";
import SectionLabel from "../shared/SectionLabel";
import AmbientOrb from "../shared/AmbientOrb";
import ShimmerButton from "../ui/ShimmerButton";
import GlowBorder from "../shared/GlowBorder";
import HeroTerminal from "./HeroTerminal";
import HeroOrbit from "./HeroOrbit";
import FloatingPills from "./FloatingPills";
import { SparklesText } from "../ui/sparkles-text";

export default function HeroSection() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Rotate title index
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIdx((prev) => (prev + 1) % HERO_TITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Track cursor position inside section for spotlight overlay
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-[110px] pb-20 px-6 sm:px-12 md:px-24 overflow-hidden bg-bg-base"
    >
      {/* Background Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(232,114,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(232,114,42,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none select-none z-0" />

      {/* Mouse Spotlight Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300 opacity-60 mix-blend-screen"
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(200, 67, 10, 0.12), transparent 80%)`,
        }}
      />

      {/* Background Orbs */}
      <AmbientOrb className="-top-20 -left-20 bg-accent-primary/20" duration={15} />
      <AmbientOrb className="-bottom-20 -right-20 bg-accent-deep/15" duration={18} delay={2} />

      {/* Two-column layout grid */}
      <div className="relative w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-20">
        
        {/* Left Column (55% width approx) */}
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
          {/* Subtitle label */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } },
            }}
          >
            <SectionLabel label="AI Product Engineer · Building in India" />
          </motion.div>

          {/* Name Header */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 180 } },
            }}
            className="relative"
          >
            <SparklesText className="text-5xl sm:text-6xl md:text-7xl font-bold font-heading tracking-tight text-text-primary uppercase">
              ChaiBytes
            </SparklesText>
          </motion.div>

          {/* Rebrand subtitle */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-xs sm:text-sm font-mono text-text-secondary tracking-widest uppercase -mt-2"
          >
            Software Lab
          </motion.div>

          {/* Rotating Title Carousel */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            className="h-10 sm:h-12 overflow-hidden flex items-center"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={titleIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="text-lg sm:text-2xl font-mono text-accent-primary font-medium tracking-wide uppercase"
              >
                → {HERO_TITLES[titleIdx]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Description Paragraph */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-[15px] sm:text-base text-text-secondary max-w-lg leading-relaxed font-body"
          >
            Building intelligent interfaces, highly concurrent backend pipelines, and real-time infrastructure models where systems meet seamless visual design.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <ShimmerButton onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              Explore Products
            </ShimmerButton>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-2.5 rounded-full border border-accent-primary/40 hover:border-accent-primary text-sm font-medium hover:bg-accent-primary/5 transition-all duration-300 active:scale-95 text-text-primary"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Floating pills indicator list */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className="pt-4"
          >
            <FloatingPills />
          </motion.div>
        </motion.div>

        {/* Right Column (45% width approx) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:col-span-5 flex items-center justify-center min-h-[350px] lg:min-h-[450px]"
        >
          {/* Orbit rings behind terminal */}
          <HeroOrbit />

          {/* Glass Card containing Terminal */}
          <div className="relative w-full max-w-md mx-auto z-10">
            {/* Ambient Backlight Orb */}
            <div className="absolute inset-4 rounded-full bg-accent-primary/20 blur-[80px] -z-10 pointer-events-none" />

            <GlowBorder duration={10}>
              <HeroTerminal />
            </GlowBorder>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
