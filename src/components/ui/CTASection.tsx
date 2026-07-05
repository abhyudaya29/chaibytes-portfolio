"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function CTASection({
  heading = "Ready to build intentional systems?",
  subheading = "Let's align your product vision, automate workflows, and build highly concurrent web applications that scale.",
  primaryCtaText = "Start a Project",
  secondaryCtaText = "Schedule Call",
  onPrimaryClick,
  onSecondaryClick
}: CTASectionProps) {
  
  const handlePrimaryClick = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSecondaryClick = () => {
    if (onSecondaryClick) {
      onSecondaryClick();
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-6 sm:px-12 md:px-24 relative overflow-hidden bg-bg-base select-none">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-primary/10 blur-[130px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-accent-primary to-accent-hover p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-[0_20px_50px_rgba(200,67,10,0.2)] border border-accent-primary/20"
      >
        {/* Animated ambient particle wave over card */}
        <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-[radial-gradient(ellipse_at_center,var(--color-bg-base)_0%,transparent_100%)] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
          <div className="flex flex-col items-start gap-4 max-w-2xl text-left">
            <span className="font-mono text-[10px] tracking-[0.2em] text-text-primary/80 uppercase flex items-center gap-1.5 bg-text-primary/10 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-text-primary" />
              Collaboration Scope
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-primary uppercase leading-tight">
              {heading}
            </h2>
            <p className="text-sm sm:text-base text-text-primary/85 leading-relaxed font-body">
              {subheading}
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 shrink-0 w-full lg:w-auto">
            <button
              onClick={handlePrimaryClick}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-text-primary text-bg-base hover:bg-text-primary/95 text-sm font-semibold tracking-wider uppercase transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] cursor-pointer"
            >
              <span>{primaryCtaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleSecondaryClick}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent text-text-primary hover:bg-text-primary/10 border border-text-primary/30 hover:border-text-primary text-sm font-semibold tracking-wider uppercase transition-all duration-300 active:scale-95 flex items-center justify-center cursor-pointer"
            >
              {secondaryCtaText}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
