"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, GraduationCap, Cpu, Layers } from "lucide-react";
import SectionLabel from "../shared/SectionLabel";

const CLIENTS = [
  {
    name: "Mind Magnificence",
    role: "Mental Wellness & Therapy",
    description: "Engineered a custom, secure mental health platform featuring automated session scheduling, therapist roster directories, and patient progress tracking dashboards.",
    logo: "/mindmagnificence_logo.png",
    glowColor: "rgba(232, 114, 42, 0.25)",
    borderColor: "rgba(232, 114, 42, 0.2)",
    accentText: "text-accent-primary",
    url: "https://www.mindmagnificence.com/",
    logoBg: "bg-slate-950/60 border-white/5"
  },
  {
    name: "BasicGuru Classes",
    role: "Online Classroom Systems",
    description: "Built a scalable educational class portal supporting live stream coordination, student attendance metrics, and parent portal authorization panels.",
    logo: "/basicguru_logo.png",
    glowColor: "rgba(59, 130, 246, 0.25)",
    borderColor: "rgba(59, 130, 246, 0.2)",
    accentText: "text-blue-500",
    url: "https://basicguruclasses.in/",
    logoBg: "bg-white border-white/10"
  },
  {
    name: "FlowNext AI",
    role: "AI Creative Suite",
    description: "Partnered to architect a creative automation tool that converts product images into high-converting visual advertisements and video creatives in seconds.",
    logo: "/flownext_logo.png",
    glowColor: "rgba(34, 197, 94, 0.25)",
    borderColor: "rgba(34, 197, 94, 0.2)",
    accentText: "text-green-500",
    url: "https://flownextai.in/",
    logoBg: "bg-slate-950/60 border-white/5"
  },
  {
    name: "Arahasoft",
    role: "Enterprise ERP Solutions",
    description: "Designed robust API architectures and cloud systems migrating legacy business management pipelines into high-availability microservices.",
    logo: "/arahasoft_logo.png",
    glowColor: "rgba(168, 85, 247, 0.25)",
    borderColor: "rgba(168, 85, 247, 0.2)",
    accentText: "text-purple-500",
    url: "https://arahasoft.in/",
    logoBg: "bg-white border-white/10"
  }
];

export default function TrustedClients() {
  const marqueeItems = [...CLIENTS, ...CLIENTS];

  return (
    <section id="partners" className="py-20 sm:py-24 border-t border-border-custom relative overflow-hidden bg-bg-base/10 select-none">
      {/* Ambient glowing circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-accent-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center gap-4 mb-16">
          <SectionLabel label="01.5 / Partners" />
          <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-text-primary uppercase">
            Trusted Partners
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-xl leading-relaxed font-body">
            Enterprise-grade AI systems and product teams that trust Chaibytes to build secure, performant software.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-border-custom/40 bg-bg-card/70 backdrop-blur-xl p-4">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-primary/10 to-transparent pointer-events-none" />
          <div className="flex gap-6 min-w-full shrink-0 animate-marquee py-4">
            {marqueeItems.map((client, idx) => (
              <a
                key={`${client.name}-${idx}`}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative min-w-[320px] max-w-[320px] p-6 rounded-3xl bg-bg-base/90 border border-border-custom/40 shadow-lg shadow-black/5 transition-transform duration-300 hover:-translate-y-1 hover:border-accent-primary/40"
              >
                <div className="flex items-start gap-3 mb-5">
                  <div className={`w-14 h-14 rounded-2xl overflow-hidden border border-border-custom/30 flex items-center justify-center p-2 ${client.logoBg}`}>
                    <img src={client.logo} alt={client.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-heading font-bold uppercase tracking-tight text-text-primary group-hover:text-accent-primary transition-colors">
                      {client.name}
                    </h3>
                    <p className="text-[10px] text-accent-primary font-mono tracking-wider uppercase mt-1">
                      {client.role}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-[13px] text-text-secondary leading-relaxed font-body">
                  {client.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
