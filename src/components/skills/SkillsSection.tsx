"use client";
import React from "react";
import Image from "next/image";
import { Monitor, Server, Brain, Database, Terminal, Cpu, Codepen, Layers, Codepen as TsIcon } from "lucide-react";
import { SKILLS_DATA } from "@/lib/constants";
import SectionLabel from "../shared/SectionLabel";
import AmbientOrb from "../shared/AmbientOrb";

// Map category icons from string key to Lucide Components
const ICON_MAP: Record<string, React.ReactNode> = {
  layout: <Monitor className="w-4 h-4 text-accent-primary" />,
  server: <Server className="w-4 h-4 text-accent-primary" />,
  cpu: <Brain className="w-4 h-4 text-accent-primary" />,
  database: <Database className="w-4 h-4 text-accent-primary" />,
  terminal: <Terminal className="w-4 h-4 text-accent-primary" />,
};

interface OrbitBadge {
  name: string;
  icon: React.ReactNode;
  angle: number;
}

export default function SkillsSection() {
  const { categories, marquee } = SKILLS_DATA;

  // Orbit badges centered around initials "AD"
  const orbitBadges: OrbitBadge[] = [
    { name: "Next.js", icon: <Monitor className="w-3.5 h-3.5 text-accent-primary" />, angle: 0 },
    { name: "FastAPI", icon: <Server className="w-3.5 h-3.5 text-accent-primary" />, angle: 45 },
    { name: "Postgres", icon: <Database className="w-3.5 h-3.5 text-accent-primary" />, angle: 90 },
    { name: "OpenAI", icon: <Brain className="w-3.5 h-3.5 text-accent-primary" />, angle: 135 },
    { name: "Docker", icon: <Terminal className="w-3.5 h-3.5 text-accent-primary" />, angle: 180 },
    { name: "Redis", icon: <Cpu className="w-3.5 h-3.5 text-accent-primary" />, angle: 225 },
    { name: "TypeScript", icon: <Codepen className="w-3.5 h-3.5 text-accent-primary" />, angle: 270 },
    { name: "Framer", icon: <Layers className="w-3.5 h-3.5 text-accent-primary" />, angle: 315 },
  ];

  // Duplicate marquee array for seamless infinite looping
  const marqueeItems = [...marquee, ...marquee];

  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 px-6 sm:px-12 md:px-24 bg-bg-base overflow-hidden"
    >
      {/* Background ambient orbs */}
      <AmbientOrb className="-top-24 -right-24 bg-accent-hover/10" duration={20} />
      <AmbientOrb className="-bottom-24 -left-24 bg-accent-deep/10" duration={22} delay={3} />

      <div className="relative max-w-7xl mx-auto z-10 flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 max-w-2xl">
          <SectionLabel label="05 / Technology Vector" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-primary uppercase">
            Capability Index
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-body">
            Categorized overview of my technical capabilities spanning interface construction, real-time backend pipelines, AI orchestration, and production deployments.
          </p>
        </div>

        {/* Asymmetric Asymmetric Layout Grid (Bento cards left, Orbit right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Bento Skills Grouping (cols 7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {categories.map((cat, idx) => (
              <div
                key={cat.title}
                className={`p-6 rounded-2xl bg-bg-card/40 border border-border-custom/50 backdrop-blur-md hover:border-accent-primary/40 hover:shadow-[0_0_20px_rgba(200,67,10,0.05)] transition-all duration-300 flex flex-col justify-between min-h-[170px] ${
                  idx === 0 || idx === 3 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-heading font-semibold text-text-primary uppercase tracking-wider select-none">
                    {cat.title}
                  </h3>
                  <div className="p-1.5 rounded-lg bg-bg-base/60 border border-border-custom/30 shrink-0">
                    {ICON_MAP[cat.icon] || <Terminal className="w-4 h-4 text-accent-primary" />}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono bg-bg-base/80 border border-border-custom text-text-secondary hover:text-accent-primary hover:border-accent-primary/30 transition-all duration-200 select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Orbit Visual (cols 5) */}
          <div className="lg:col-span-5 flex items-center justify-center min-h-[350px] lg:min-h-[450px] relative">
            
            {/* Ambient Background Radial Glow behind AD logo */}
            <div className="absolute w-44 h-44 rounded-full bg-accent-primary/10 blur-[60px] pointer-events-none" />

            {/* Orbiting ring */}
            <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full border border-border-custom/20 flex items-center justify-center animate-orbit-1 [--orbit-radius:130px] sm:[--orbit-radius:160px]">
              
              {/* Central Logo Badge */}
              <div className="absolute w-20 h-20 rounded-full bg-[#24160D] border border-accent-primary/45 shadow-[0_0_30px_rgba(200,67,10,0.3)] flex items-center justify-center select-none z-20 overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="ChaiBytes Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Orbit Badges Mapping */}
              {orbitBadges.map((badge) => {
                return (
                  <div
                    key={badge.name}
                    className="absolute flex items-center justify-center p-2 rounded-full bg-[#1E150D] border border-border-custom shadow-lg backdrop-blur-md"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translate(-50%, -50%) rotate(${badge.angle}deg) translate(var(--orbit-radius)) rotate(-${badge.angle}deg)`,
                      animation: "orbit-2 30s linear infinite",
                    }}
                    title={badge.name}
                  >
                    {badge.icon}
                  </div>
                );
              })}
            </div>

            {/* Inner dashed ring */}
            <div className="absolute w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-full border border-border-custom/10 border-dashed" />
          </div>

        </div>

        {/* Second Row: Infinite Horizontal Skills Marquee */}
        <div className="flex flex-col gap-4 pt-4 border-t border-border-custom/25">
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] select-none">
            <div className="flex gap-4 min-w-full shrink-0 animate-marquee py-2">
              {marqueeItems.map((item, idx) => (
                <span
                  key={idx}
                  className="px-6 py-2.5 rounded-full text-xs font-mono font-medium tracking-wide bg-bg-card/40 border border-border-custom text-text-secondary hover:text-accent-primary hover:border-accent-primary/40 transition-colors duration-300 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
