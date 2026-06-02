"use client";
import React from "react";
import { motion } from "framer-motion";

interface ShimmerButtonProps extends React.ComponentPropsWithoutRef<typeof motion.button> {
  children: React.ReactNode;
  className?: string;
}

export default function ShimmerButton({ children, className = "", ...props }: ShimmerButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`relative overflow-hidden rounded-full bg-accent-primary px-7 py-3 text-sm font-medium text-text-primary border border-accent-hover/30 transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_20px_var(--color-glow-custom)] ${className}`}
      {...props}
    >
      {/* Moving Shimmer Overlay */}
      <span className="absolute inset-0 block rounded-full bg-[linear-gradient(110deg,transparent,35%,rgba(255,255,255,0.25),45%,transparent,75%)] bg-[length:200%_100%] animate-shimmer pointer-events-none" />
      {children}
    </motion.button>
  );
}
