"use client";
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface BentoCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  hoverEffect?: boolean;
}

export default function BentoCard({
  children,
  className = "",
  glowColor = "rgba(200, 67, 10, 0.05)",
  hoverEffect = true,
  ...props
}: BentoCardProps) {
  return (
    <motion.div
      {...props}
      className={`group relative p-6 rounded-2xl bg-bg-card/45 border border-border-custom/50 backdrop-blur-md overflow-hidden transition-all duration-300 ${
        hoverEffect 
          ? "hover:border-accent-primary/35 hover:shadow-[0_0_30px_var(--color-glow-custom)]"
          : ""
      } ${className}`}
    >
      {/* Micro-interactive background spotlight glow on hover */}
      {hoverEffect && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${glowColor} 0%, transparent 80%)`
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
