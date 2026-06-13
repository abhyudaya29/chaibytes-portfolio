"use client";

import React from "react";
import { motion } from "framer-motion";

interface HighlighterProps {
  children: React.ReactNode;
  color?: string;
  isView?: boolean;
  action?: string;
  strokeWidth?: number;
  animationDuration?: number;
  iterations?: number;
  padding?: number;
  multiline?: boolean;
}

export function Highlighter({
  children,
  color = "rgba(200, 67, 10, 0.25)",
  isView = true,
}: HighlighterProps) {
  return (
    <span className="relative inline px-1 font-semibold text-text-primary z-10">
      {/* Animated highlighter background overlay */}
      <motion.span
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
        className="absolute bottom-0.5 left-0 h-[85%] -z-10 rounded-sm origin-left"
        style={{ backgroundColor: color }}
      />
      {children}
    </span>
  );
}
