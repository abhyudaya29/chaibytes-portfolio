"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { METRICS_DATA } from "@/lib/constants";
import SectionLabel from "../shared/SectionLabel";

interface MetricCardProps {
  value: string;
  label: string;
  index: number;
}

function MetricCard({ value, label, index }: MetricCardProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Parse numeric part and suffix
  const match = value.match(/^([\d.]+)(.*)$/);
  const numericValue = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const isDecimal = match ? match[1].includes(".") : false;

  useEffect(() => {
    if (!isInView) return;

    // Stagger animation onset slightly based on index
    const delayTimer = setTimeout(() => {
      const controls = animate(0, numericValue, {
        duration: 2.2,
        ease: [0.16, 1, 0.3, 1], // premium out-expo easing
        onUpdate(latest) {
          setDisplayValue(latest);
        },
      });
      return () => controls.stop();
    }, index * 100);

    return () => clearTimeout(delayTimer);
  }, [isInView, numericValue, index]);

  const formattedNumber = isDecimal
    ? displayValue.toFixed(1)
    : Math.floor(displayValue).toLocaleString();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col items-center justify-center p-6 text-center relative group ${
        index === 4 ? "col-span-2 md:col-span-1" : "col-span-1"
      }`}
    >
      {/* Decorative vertical divider line for medium screens */}
      {index > 0 && (
        <div className="hidden md:block absolute left-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-border-custom to-transparent" />
      )}

      {/* Metric Number (72px) with glow */}
      <div className="relative mb-3 select-none">
        {/* Glow Layer */}
        <span className="absolute inset-0 text-6xl sm:text-7xl font-bold font-heading text-accent-primary/20 blur-xl scale-110 pointer-events-none select-none">
          {formattedNumber}
          {suffix}
        </span>
        {/* Crisp Text Layer */}
        <span className="relative text-6xl sm:text-7xl font-bold font-heading text-text-primary tracking-tight bg-clip-text bg-gradient-to-b from-text-primary to-text-secondary/70 group-hover:text-accent-primary transition-colors duration-500">
          {formattedNumber}
          <span className="text-accent-primary">{suffix}</span>
        </span>
      </div>

      {/* Metric Label (13px) */}
      <span className="text-[13px] text-text-secondary font-mono tracking-wider uppercase max-w-[180px] leading-relaxed group-hover:text-text-primary transition-colors duration-300">
        {label}
      </span>
    </motion.div>
  );
}

export default function MetricsSection() {
  return (
    <section className="py-24 sm:py-32 border-t border-border-custom relative overflow-hidden bg-bg-base/20">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-accent-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Label Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <SectionLabel label="METRICS" className="mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-text-primary tracking-tight max-w-xl">
            Proven infrastructure metrics. Built for high performance.
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-4 md:gap-x-2">
          {METRICS_DATA.map((metric, index) => (
            <MetricCard
              key={index}
              value={metric.value}
              label={metric.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
