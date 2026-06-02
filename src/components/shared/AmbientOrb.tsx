"use client";
import React from "react";
import { motion } from "framer-motion";

interface AmbientOrbProps {
  className?: string;
  delay?: number;
  duration?: number;
}

export default function AmbientOrb({ className = "", delay = 0, duration = 12 }: AmbientOrbProps) {
  return (
    <motion.div
      initial={{ opacity: 0.2, scale: 0.8 }}
      animate={{
        opacity: [0.2, 0.35, 0.2],
        scale: [0.8, 1.1, 0.8],
        x: [0, 20, 0],
        y: [0, -15, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full bg-gradient-to-tr from-accent-primary to-accent-deep blur-[130px] mix-blend-screen pointer-events-none ${className}`}
      style={{
        width: "45vw",
        height: "45vw",
        maxWidth: "500px",
        maxHeight: "500px",
      }}
    />
  );
}
