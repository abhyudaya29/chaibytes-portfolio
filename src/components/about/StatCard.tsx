"use client";
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
}

export default function StatCard({ value, label, suffix = "" }: StatCardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800; // 1.8 seconds
    const end = value;
    const range = end - start;
    let current = start;

    // Determine smart step sizes based on target range
    const increment = end > 1000 ? Math.ceil(end / 40) : 1;
    const stepTime = Math.max(Math.floor(duration / (range / increment)), 18);

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num;
  };

  return (
    <div
      ref={ref}
      className="p-6 rounded-2xl bg-bg-card/40 border border-border-custom flex flex-col items-center justify-center text-center backdrop-blur-md relative overflow-hidden group hover:border-accent-primary/40 hover:shadow-[0_0_20px_rgba(200,67,10,0.05)] transition-all duration-500"
    >
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="text-4xl sm:text-5xl font-heading font-bold text-accent-primary mb-2 select-none tracking-tight">
        {formatNumber(count)}
        {suffix}
      </div>
      <div className="text-[11px] sm:text-[12px] text-text-secondary font-mono tracking-wider uppercase font-medium max-w-[140px] leading-tight">
        {label}
      </div>
    </div>
  );
}
