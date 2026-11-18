"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Cpu, Code2, Globe2, Sparkles, Building2, Flame } from "lucide-react";
import { ABOUT_CONTENT, PERSONAL_INFO } from "@/lib/constants";
import SectionLabel from "../shared/SectionLabel";
import StatCard from "./StatCard";
import BentoGrid from "./BentoGrid";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-24 px-6 sm:px-12 md:px-24 bg-bg-base border-t border-border-custom overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-primary/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-accent-deep/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10 flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 max-w-3xl">
          <SectionLabel label="04 / About ChaiBytes" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-primary uppercase leading-tight">
            Engineering Products <br />
            That <span className="font-editorial italic text-accent-primary font-normal lowercase">Think &amp; Deliver.</span>
          </h2>
          <p className="text-base sm:text-lg text-text-primary/95 leading-relaxed font-body">
            {ABOUT_CONTENT.opening}
          </p>
          {ABOUT_CONTENT.paragraphs.map((para, idx) => (
            <p key={idx} className="text-sm sm:text-base text-text-secondary leading-relaxed font-body">
              {para}
            </p>
          ))}
        </div>

        {/* Agency Pillars & Technical Obsessions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="p-7 rounded-3xl bg-bg-card border border-border-custom shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-accent-primary font-mono text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Studio Capabilities &amp; Obsessions</span>
            </div>
            <ul className="space-y-3.5">
              {ABOUT_CONTENT.interests.map((interest, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-sm text-text-secondary font-body"
                >
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent-primary/15 border border-accent-primary/30 shrink-0">
                    <Check className="w-3 h-3 text-accent-primary" />
                  </span>
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metric Statistics */}
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
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-mono text-xs tracking-widest text-text-secondary uppercase">
              ChaiBytes Product Engineering Matrix
            </h3>
            <span className="text-xs font-mono text-accent-primary">
              Global Standards · India Built
            </span>
          </div>
          <BentoGrid />
        </div>

      </div>
    </section>
  );
}
