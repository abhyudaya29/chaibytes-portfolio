"use client";
import React from "react";
import { motion } from "framer-motion";
import { Globe, MapPin, CheckCircle, Flame, Layers, AppWindow, Cpu, ShieldCheck, Zap } from "lucide-react";
import { ABOUT_CONTENT, PERSONAL_INFO } from "@/lib/constants";

export default function BentoGrid() {
  const { focus, quote, availability } = ABOUT_CONTENT.bento;

  const heatmapCols = Array.from({ length: 22 }, (_, colIdx) =>
    Array.from({ length: 7 }, (_, rowIdx) => {
      return (colIdx * 3 + rowIdx * 5) % 5;
    })
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
      {/* Card 1: Core Stack Overview */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="p-6 rounded-3xl bg-bg-card border border-border-custom hover:border-accent-primary/40 shadow-sm flex flex-col justify-between min-h-[220px]"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[10px] tracking-wider text-text-secondary uppercase">
            01 / Studio Stack
          </span>
          <Layers className="w-4 h-4 text-accent-primary" />
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-text-primary mb-2">
            Multi-Layer Engine
          </h3>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {["Next.js 15", "FastAPI", "PostgreSQL", "Redis", "Docker", "RAG Pipelines", "Vapi Voice", "Exotel"].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-bg-elevated border border-border-custom text-text-secondary"
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
        transition={{ duration: 0.2 }}
        className="p-6 rounded-3xl bg-bg-card border border-border-custom hover:border-accent-primary/40 shadow-sm flex flex-col justify-between md:col-span-2 min-h-[220px]"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[10px] tracking-wider text-text-secondary uppercase">
            02 / Active Enterprise Build
          </span>
          <AppWindow className="w-4 h-4 text-accent-primary" />
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-text-primary mb-2">
            {focus.title}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed font-body">
            {focus.description}
          </p>
        </div>
        <div className="mt-4 pt-3 border-t border-border-custom/40 flex items-center gap-2 text-xs font-mono text-accent-primary">
          <Zap className="w-3.5 h-3.5" />
          <span>Real-time weather telemetry at nationwide scale</span>
        </div>
      </motion.div>

      {/* Card 3: Philosophy Quote */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="p-6 rounded-3xl bg-bg-card border border-border-custom hover:border-accent-primary/40 shadow-sm flex flex-col justify-between md:col-span-2 min-h-[200px]"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[10px] tracking-wider text-text-secondary uppercase">
            03 / Engineering Manifesto
          </span>
          <Cpu className="w-4 h-4 text-accent-primary" />
        </div>
        <div className="py-2">
          <p className="font-editorial italic text-xl sm:text-2xl text-text-primary tracking-wide leading-relaxed">
            &ldquo;{quote.text}&rdquo;
          </p>
        </div>
        <div className="text-xs font-mono text-accent-primary font-semibold">
          — {quote.author} Studio Principle
        </div>
      </motion.div>

      {/* Card 4: Location & Reach */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="p-6 rounded-3xl bg-bg-card border border-border-custom hover:border-accent-primary/40 shadow-sm flex flex-col justify-between min-h-[200px]"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[10px] tracking-wider text-text-secondary uppercase">
            04 / Global Operations
          </span>
          <Globe className="w-4 h-4 text-accent-primary" />
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-text-primary mb-1">
            Headquartered in India
          </h3>
          <p className="text-xs text-text-secondary font-body mt-1">
            Building software deployed across India, UAE, GCC, UK, and the US with 24/7 uptime monitoring.
          </p>
        </div>
      </motion.div>

      {/* Card 5: Production Activity Heatmap */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="p-6 rounded-3xl bg-bg-card border border-border-custom hover:border-accent-primary/40 shadow-sm flex flex-col justify-between md:col-span-2 min-h-[200px]"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[10px] tracking-wider text-text-secondary uppercase">
            05 / Continuous Delivery Stream
          </span>
          <Flame className="w-4 h-4 text-accent-primary" />
        </div>
        
        <div className="w-full overflow-x-auto py-1 scrollbar-none">
          <div className="flex gap-[3px] min-w-[320px]">
            {heatmapCols.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-[3px]">
                {col.map((activity, rowIdx) => {
                  let colorClass = "bg-bg-base border border-border-custom/20";
                  if (activity === 1) colorClass = "bg-accent-deep/30 border border-accent-deep/50";
                  if (activity === 2) colorClass = "bg-accent-deep/70 border border-accent-deep";
                  if (activity === 3) colorClass = "bg-accent-primary/60 border border-accent-primary/80";
                  if (activity === 4) colorClass = "bg-accent-hover border border-accent-hover";

                  return (
                    <div
                      key={rowIdx}
                      className={`w-[9px] h-[9px] rounded-[2px] ${colorClass}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center text-[11px] font-mono text-text-secondary pt-2 select-none">
          <span>Active CI/CD Deployments</span>
          <div className="flex items-center gap-1.5 text-[10px]">
            <span>Low</span>
            <span className="w-2.5 h-2.5 rounded-[2px] bg-bg-base border border-border-custom/20" />
            <span className="w-2.5 h-2.5 rounded-[2px] bg-accent-deep/30" />
            <span className="w-2.5 h-2.5 rounded-[2px] bg-accent-deep/70" />
            <span className="w-2.5 h-2.5 rounded-[2px] bg-accent-primary/80" />
            <span className="w-2.5 h-2.5 rounded-[2px] bg-accent-hover" />
            <span>High</span>
          </div>
        </div>
      </motion.div>

      {/* Card 6: Availability Status */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="p-6 rounded-3xl bg-bg-card border border-border-custom hover:border-accent-primary/40 shadow-sm flex flex-col justify-between min-h-[200px]"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[10px] tracking-wider text-text-secondary uppercase">
            06 / Client Onboarding
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-heading font-bold text-lg text-text-primary">
              {availability.status}
            </span>
          </div>
          <p className="text-xs text-text-secondary leading-relaxed font-body">
            {availability.details}
          </p>
        </div>
        <div className="mt-4 pt-3 border-t border-border-custom/40">
          <a
            href="#contact"
            className="text-xs font-mono text-accent-primary hover:text-accent-hover font-semibold flex items-center justify-between"
          >
            <span>Inquire for current cohort</span>
            <span>→</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
