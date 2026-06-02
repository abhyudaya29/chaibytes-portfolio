"use client";
import React from "react";
import { motion } from "framer-motion";
import { Globe, MapPin, CheckCircle, Flame, Layers, AppWindow, Cpu } from "lucide-react";
import { ABOUT_CONTENT, PERSONAL_INFO } from "@/lib/constants";

export default function BentoGrid() {
  const { focus, quote, availability } = ABOUT_CONTENT.bento;

  // Generate mock GitHub heatmap columns
  const heatmapCols = Array.from({ length: 22 }, (_, colIdx) =>
    Array.from({ length: 7 }, (_, rowIdx) => {
      // Procedurally assign activity levels (0 to 4)
      const activity = (colIdx * 3 + rowIdx * 5) % 5;
      return activity;
    })
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
      {/* Card 1: Core Stack Overview */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="p-6 rounded-2xl bg-bg-card/40 border border-border-custom backdrop-blur-md flex flex-col justify-between min-h-[220px]"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[10px] tracking-wider text-text-secondary/40 uppercase">
            01 / Engine Stack
          </span>
          <Layers className="w-4 h-4 text-accent-primary" />
        </div>
        <div>
          <h3 className="text-[17px] font-heading font-semibold text-text-primary mb-2">
            Multi-Layer Core
          </h3>
          <div className="flex flex-wrap gap-1.5 pt-2">
            {["TypeScript", "FastAPI", "PostgreSQL", "Next.js", "Redis", "Docker", "RAG Pipelines"].map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-bg-base border border-border-custom/50 text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Card 2: Current Focus */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="p-6 rounded-2xl bg-bg-card/40 border border-border-custom backdrop-blur-md flex flex-col justify-between md:col-span-2 min-h-[220px]"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[10px] tracking-wider text-text-secondary/40 uppercase">
            02 / Active Build
          </span>
          <AppWindow className="w-4 h-4 text-accent-primary" />
        </div>
        <div>
          <h3 className="text-[17px] font-heading font-semibold text-text-primary mb-2">
            {focus.title}
          </h3>
          <p className="text-[13px] text-text-secondary/80 leading-relaxed font-body">
            {focus.description}
          </p>
        </div>
      </motion.div>

      {/* Card 3: Philosophy Quote */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="p-6 rounded-2xl bg-bg-card/40 border border-border-custom backdrop-blur-md flex flex-col justify-between md:col-span-2 min-h-[200px]"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[10px] tracking-wider text-text-secondary/40 uppercase">
            03 / Architecture Principle
          </span>
          <Cpu className="w-4 h-4 text-accent-primary" />
        </div>
        <div className="py-2">
          <p className="font-editorial italic text-xl sm:text-2xl text-text-primary tracking-wide leading-relaxed">
            "{quote.text}"
          </p>
        </div>
        <div className="text-[11px] font-mono text-text-secondary/60">
          — {quote.author}
        </div>
      </motion.div>

      {/* Card 4: Delhi Location */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="p-6 rounded-2xl bg-bg-card/40 border border-border-custom backdrop-blur-md flex flex-col justify-between min-h-[200px]"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[10px] tracking-wider text-text-secondary/40 uppercase">
            04 / Base Coords
          </span>
          <MapPin className="w-4 h-4 text-accent-primary" />
        </div>
        <div>
          <h3 className="text-[17px] font-heading font-semibold text-text-primary mb-1">
            {PERSONAL_INFO.location}
          </h3>
          <span className="font-mono text-[11px] text-text-secondary/60">
            {PERSONAL_INFO.coordinates}
          </span>
        </div>
      </motion.div>

      {/* Card 5: GitHub Heatmap Mockup */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="p-6 rounded-2xl bg-bg-card/40 border border-border-custom backdrop-blur-md flex flex-col justify-between md:col-span-2 min-h-[200px]"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[10px] tracking-wider text-text-secondary/40 uppercase">
            05 / Commit Stream (Production Activity)
          </span>
          <Flame className="w-4 h-4 text-accent-primary" />
        </div>
        
        {/* Heatmap Grid Wrapper */}
        <div className="w-full overflow-x-auto py-1 scrollbar-none">
          <div className="flex gap-[3px] min-w-[320px]">
            {heatmapCols.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-[3px]">
                {col.map((activity, rowIdx) => {
                  // Determine grid colors based on activity level (representing commit intensity)
                  let colorClass = "bg-bg-base border border-border-custom/20";
                  if (activity === 1) colorClass = "bg-accent-deep/20 border border-accent-deep/40";
                  if (activity === 2) colorClass = "bg-accent-deep/50 border border-accent-deep/70";
                  if (activity === 3) colorClass = "bg-accent-primary/60 border border-accent-primary/80";
                  if (activity === 4) colorClass = "bg-accent-hover border border-accent-hover";

                  return (
                    <motion.div
                      key={rowIdx}
                      initial={{ opacity: 0.3, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (colIdx * 7 + rowIdx) * 0.005, duration: 0.3 }}
                      className={`w-[9px] h-[9px] rounded-[1.5px] ${colorClass}`}
                      whileHover={{ scale: 1.3, transition: { duration: 0.1 } }}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] font-mono text-text-secondary/40 pt-2 select-none">
          <span>Last 150 commits</span>
          <div className="flex items-center gap-1">
            <span>Less</span>
            <span className="w-2.5 h-2.5 rounded-[1px] bg-bg-base border border-border-custom/20" />
            <span className="w-2.5 h-2.5 rounded-[1px] bg-accent-deep/30" />
            <span className="w-2.5 h-2.5 rounded-[1px] bg-accent-deep/70" />
            <span className="w-2.5 h-2.5 rounded-[1px] bg-accent-primary/80" />
            <span className="w-2.5 h-2.5 rounded-[1px] bg-accent-hover" />
            <span>More</span>
          </div>
        </div>
      </motion.div>

      {/* Card 6: Availability Status */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="p-6 rounded-2xl bg-bg-card/40 border border-border-custom backdrop-blur-md flex flex-col justify-between min-h-[200px]"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[10px] tracking-wider text-text-secondary/40 uppercase">
            06 / Availability Status
          </span>
          <CheckCircle className="w-4 h-4 text-accent-primary" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <h3 className="text-[17px] font-heading font-semibold text-text-primary">
              {availability.status}
            </h3>
          </div>
          <p className="text-[12px] text-text-secondary/80 leading-normal font-body">
            {availability.details}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
