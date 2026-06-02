"use client";
import React from "react";
import { Cpu, Database, Server, Layers, Codepen, Terminal } from "lucide-react";

interface Badge {
  name: string;
  icon: React.ReactNode;
  angle: number;
}

export default function HeroOrbit() {
  const badges: Badge[] = [
    { name: "React", icon: <Layers className="w-3 h-3 text-accent-primary" />, angle: 0 },
    { name: "FastAPI", icon: <Server className="w-3 h-3 text-accent-primary" />, angle: 60 },
    { name: "PostgreSQL", icon: <Database className="w-3 h-3 text-accent-primary" />, angle: 120 },
    { name: "OpenAI", icon: <Cpu className="w-3 h-3 text-accent-primary" />, angle: 180 },
    { name: "Docker", icon: <Terminal className="w-3 h-3 text-accent-primary" />, angle: 240 },
    { name: "TypeScript", icon: <Codepen className="w-3 h-3 text-accent-primary" />, angle: 300 },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      {/* Outer Orbit Ring */}
      <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full border border-border-custom/20 flex items-center justify-center animate-orbit-1 [--orbit-radius:150px] sm:[--orbit-radius:190px]">
        {badges.map((badge, idx) => {
          return (
            <div
              key={badge.name}
              className="absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg-card/90 border border-border-custom shadow-lg backdrop-blur-md"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) rotate(${badge.angle}deg) translate(var(--orbit-radius)) rotate(-${badge.angle}deg)`,
                animation: "orbit-2 30s linear infinite",
              }}
            >
              {badge.icon}
              <span className="font-mono text-[9px] text-text-secondary font-medium tracking-wide">
                {badge.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Inner helper ring */}
      <div className="absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] rounded-full border border-border-custom/10 border-dashed" />
    </div>
  );
}
