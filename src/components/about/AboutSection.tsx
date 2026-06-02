"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { ABOUT_CONTENT } from "@/lib/constants";
import SectionLabel from "../shared/SectionLabel";
import StatCard from "./StatCard";
import BentoGrid from "./BentoGrid";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Hook scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Fade and slide effects for headers on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen py-24 px-6 sm:px-12 md:px-24 bg-bg-elevated/40 border-y border-border-custom/30 overflow-hidden"
    >
      {/* Decorative vertical tracing beam container */}
      <div className="absolute left-4 sm:left-8 md:left-12 top-0 bottom-0 w-[1px] bg-border-custom/25 z-0 pointer-events-none">
        {/* Glow progress line */}
        <motion.div
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-accent-primary via-accent-hover to-transparent origin-top"
          style={{
            height: "100%",
            scaleY: scaleY,
          }}
        />
        {/* Floating glowing tracer point */}
        <motion.div
          className="absolute top-0 -left-[3px] w-2.5 h-2.5 rounded-full bg-accent-hover shadow-[0_0_12px_var(--color-accent-hover)]"
          style={{
            top: useTransform(scaleY, (v) => `${v * 100}%`),
          }}
        />
      </div>

      {/* Content wrapper - padded to avoid tracing line overlay */}
      <div className="relative max-w-7xl mx-auto pl-8 sm:pl-16 md:pl-20 z-10 flex flex-col gap-16">
        
        {/* Header copy */}
        <motion.div style={{ opacity }} className="flex flex-col items-start gap-4 max-w-2xl">
          <SectionLabel label="02 / Executive Summary" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-primary uppercase">
            {ABOUT_CONTENT.title}
          </h2>
          <p className="text-base sm:text-lg font-medium text-text-primary/95 leading-relaxed pt-2 font-body">
            {ABOUT_CONTENT.opening}
          </p>
          {ABOUT_CONTENT.paragraphs.map((para, idx) => (
            <p key={idx} className="text-[14px] sm:text-[15px] text-text-secondary leading-relaxed font-body">
              {para}
            </p>
          ))}
        </motion.div>

        {/* Interests & Skill vectors checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-[10px] tracking-widest text-text-secondary/40 uppercase">
              Core Technical Obsessions
            </h3>
            <ul className="flex flex-col gap-3.5">
              {ABOUT_CONTENT.interests.map((interest, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 text-[14px] text-text-secondary font-body"
                >
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent-primary/10 border border-accent-primary/20 shrink-0">
                    <Check className="w-3 h-3 text-accent-primary" />
                  </span>
                  {interest}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Metrics count cards */}
          <div className="grid grid-cols-2 gap-4">
            {ABOUT_CONTENT.stats.map((stat, idx) => (
              <StatCard
                key={idx}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
              />
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="flex flex-col gap-6">
          <h3 className="font-mono text-[10px] tracking-widest text-text-secondary/40 uppercase">
            Product Engineering Profile
          </h3>
          <BentoGrid />
        </div>
      </div>
    </section>
  );
}
