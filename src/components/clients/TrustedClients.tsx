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
  return (
    <section className="py-20 sm:py-24 border-t border-border-custom relative overflow-hidden bg-bg-base/20 select-none">
      {/* Ambient glowing circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-accent-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center gap-4 mb-16">
          <SectionLabel label="01.5 / Partners" />
          <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-text-primary uppercase">
            Trusted Partners
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-xl leading-relaxed font-body">
            Collaborating with leading innovators, educational systems, and enterprises to craft high-performance products.
          </p>
        </div>

        {/* Logo cloud grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {CLIENTS.map((client, idx) => {
            return (
              <motion.a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ 
                  y: -5,
                  scale: 1.03,
                  boxShadow: `0 15px 30px ${client.glowColor}`,
                  borderColor: client.borderColor
                }}
                className="group relative p-7 sm:p-8 rounded-2xl bg-bg-card/45 border border-border-custom/50 backdrop-blur-md transition-all duration-300 flex flex-col justify-between min-h-[250px] overflow-hidden cursor-pointer"
              >
                {/* Micro-interaction glow behind card */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${client.glowColor} 0%, transparent 70%)`
                  }}
                />

                <div className="flex flex-col items-start text-left gap-5 relative z-10 w-full h-full justify-between">
                  <div className="space-y-4 w-full">
                    {/* Top line with Logo and Client details */}
                    <div className="flex items-center gap-3.5 w-full">
                      <div className={`w-14 h-14 rounded-xl border transition-colors duration-300 group-hover:border-accent-primary/50 overflow-hidden flex items-center justify-center p-2 shadow-inner shrink-0 ${client.logoBg}`}>
                        <img 
                          src={client.logo} 
                          alt={client.name} 
                          className="w-full h-full object-contain rounded-lg select-none"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-base font-bold font-heading tracking-wide uppercase text-text-primary group-hover:text-accent-primary transition-colors duration-300 leading-tight">
                          {client.name}
                        </h3>
                        <p className="text-[10px] text-accent-primary font-mono tracking-wider uppercase mt-1">
                          {client.role}
                        </p>
                      </div>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-[12px] text-text-secondary/85 leading-relaxed font-body">
                      {client.description}
                    </p>
                  </div>

                  {/* External redirect Indicator */}
                  <span className="text-[10px] font-mono text-text-secondary/40 group-hover:text-accent-primary transition-colors mt-4 flex items-center gap-1 self-start select-none">
                    Visit Project ↗
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
