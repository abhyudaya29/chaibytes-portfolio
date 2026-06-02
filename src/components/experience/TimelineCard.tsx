"use client";
import React from "react";
import { motion } from "framer-motion";

interface TimelineCardProps {
  years: string;
  company: string;
  role: string;
  description: string;
  bullets: string[];
  tech: string[];
}

export default function TimelineCard({
  years,
  company,
  role,
  description,
  bullets,
  tech,
}: TimelineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="p-6 sm:p-8 rounded-2xl bg-bg-card/45 border-l-[3px] border-accent-primary border-y border-r border-border-custom/50 backdrop-blur-md hover:border-accent-primary/40 hover:shadow-[0_0_30px_rgba(200,67,10,0.08)] hover:scale-[1.01] transition-all duration-300 relative group overflow-hidden"
    >
      {/* Dynamic ambient hover bg gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/[0.01] to-transparent pointer-events-none" />

      {/* Entry Metadata */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-4">
        <div>
          <span className="font-mono text-[11px] text-accent-primary tracking-widest font-semibold uppercase">
            {years}
          </span>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-text-primary uppercase tracking-tight mt-1 select-none">
            {company}
          </h3>
          <div className="w-16 h-[2.5px] bg-emerald-500/80 mt-1.5 mb-2.5 rounded-full" />
          <span className="text-[12px] text-text-secondary/60 font-mono tracking-wide font-medium">
            {role}
          </span>
        </div>
      </div>

      {/* Intro Description */}
      <p className="text-[13px] sm:text-[14px] text-text-secondary leading-relaxed font-body mb-4">
        {description}
      </p>

      {/* Impact bullets */}
      <ul className="space-y-2 mb-6">
        {bullets.map((bullet, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2.5 text-[12px] sm:text-[13px] text-text-secondary/80 font-body leading-relaxed"
          >
            <span className="text-accent-primary font-mono select-none pt-0.5">→</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {/* Tech pills row */}
      <div className="flex flex-wrap gap-1.5 pt-2">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium tracking-wide bg-bg-base/70 border border-border-custom/60 text-text-secondary hover:text-accent-primary hover:border-accent-primary/30 transition-all duration-200 select-none"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
