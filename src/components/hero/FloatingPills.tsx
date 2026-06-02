"use client";
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Server, Layout, MessageSquare, ShieldCheck } from "lucide-react";

const PILLS = [
  { text: "Next.js 15", icon: Layout, delay: 0, floatDuration: 5 },
  { text: "FastAPI", icon: Server, delay: 0.5, floatDuration: 5.5 },
  { text: "WebSockets", icon: MessageSquare, delay: 1, floatDuration: 6 },
  { text: "PostgreSQL", icon: ShieldCheck, delay: 1.5, floatDuration: 4.8 },
  { text: "Framer Motion", icon: Cpu, delay: 2, floatDuration: 5.2 },
];

export default function FloatingPills() {
  return (
    <div className="flex flex-wrap gap-3 max-w-lg mt-6">
      {PILLS.map((pill, idx) => {
        const Icon = pill.icon;
        return (
          <motion.div
            key={idx}
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: pill.floatDuration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: pill.delay,
            }}
            whileHover={{ scale: 1.05, y: -8 }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bg-card/50 border border-border-custom text-xs font-mono text-text-secondary select-none cursor-default hover:border-accent-primary/40 hover:text-text-primary hover:shadow-[0_0_15px_rgba(200,67,10,0.08)] transition-all duration-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
            <Icon className="w-3.5 h-3.5 text-text-secondary/70 group-hover:text-accent-primary" />
            <span>{pill.text}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
