"use client";
import React from "react";

interface GlowBorderProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  duration?: number;
  containerClassName?: string;
}

export default function GlowBorder({
  children,
  className = "",
  glowColor = "var(--color-accent-primary)",
  duration = 8,
  containerClassName = "",
}: GlowBorderProps) {
  return (
    <div className={`relative p-[1px] overflow-hidden rounded-2xl bg-border-custom/30 hover:bg-border-custom transition-all duration-500 hover:shadow-[0_0_25px_rgba(200,67,10,0.15)] ${containerClassName}`}>
      {/* Rotating gradient background for running border beam */}
      <div
        className="absolute inset-[-150%] animate-spin pointer-events-none z-0"
        style={{
          background: `conic-gradient(from 0deg, transparent 60%, ${glowColor} 80%, transparent 100%)`,
          animationDuration: `${duration}s`,
        }}
      />
      {/* Content Container */}
      <div className={`relative w-full h-full rounded-[15px] bg-[#1E150D]/90 backdrop-blur-xl overflow-hidden z-10 ${className}`}>
        {children}
      </div>
    </div>
  );
}
