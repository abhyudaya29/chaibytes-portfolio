"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { EXPERIENCE_TIMELINE } from "@/lib/constants";
import SectionLabel from "../shared/SectionLabel";
import TimelineCard from "./TimelineCard";

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for this section's internal line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative min-h-screen py-24 px-6 sm:px-12 md:px-24 bg-bg-base overflow-hidden"
    >
      {/* Dynamic scrolling timeline trace beam */}
      <div className="absolute left-4 sm:left-8 md:left-12 top-0 bottom-0 w-[1px] bg-border-custom/25 z-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-accent-primary via-accent-hover to-transparent origin-top"
          style={{
            height: "100%",
            scaleY: scaleY,
          }}
        />
        <motion.div
          className="absolute top-0 -left-[3px] w-2.5 h-2.5 rounded-full bg-accent-hover shadow-[0_0_12px_var(--color-accent-hover)]"
          style={{
            top: useTransform(scaleY, (v) => `${v * 100}%`),
          }}
        />
      </div>

      {/* Main Layout Container */}
      <div className="relative max-w-5xl mx-auto pl-8 sm:pl-16 md:pl-20 z-10 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 max-w-xl">
          <SectionLabel label="05 / Work History" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-primary uppercase">
            Engineering Journey
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-body">
            Progressing from client-side component architectures to full-stack microservices, real-time message backbones, and intelligent AI product routing.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative flex flex-col gap-12 pt-4">
          {EXPERIENCE_TIMELINE.map((item, idx) => (
            <div key={idx} className="relative grid grid-cols-1 gap-4 items-start">
              
              {/* Stylized custom timeline node */}
              <div className="absolute -left-[45px] sm:-left-[77px] md:-left-[93px] top-6 z-20 flex items-center justify-center">
                <div className="relative flex h-7 w-7 items-center justify-center rounded-md bg-[#24160D] border border-accent-primary/40 shadow-lg group-hover:border-accent-primary transition-all duration-300">
                  <span className="font-mono text-[9px] font-bold text-accent-primary/80 select-none">
                    $
                  </span>
                  {/* Subtle pulsing background ring */}
                  <span className="absolute inset-0 rounded-md bg-accent-primary/5 animate-ping opacity-30 -z-10" />
                </div>
              </div>

              {/* Timeline Card Entry */}
              <TimelineCard
                years={item.years}
                company={item.company}
                role={item.role}
                description={item.description}
                bullets={item.bullets}
                tech={item.tech}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
