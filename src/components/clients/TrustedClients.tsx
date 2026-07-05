"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, GraduationCap, Cpu, Layers } from "lucide-react";
import SectionLabel from "../shared/SectionLabel";

const CLIENTS = [
  {
    name: "MindMagnificence",
    role: "Mental Wellness & Life Coaching Solutions",
    icon: Sparkles,
    glowColor: "rgba(232, 114, 42, 0.25)",
    borderColor: "rgba(232, 114, 42, 0.2)",
    accentText: "text-accent-primary"
  },
  {
    name: "Baisguruclasses",
    role: "Premium Academic & Competitive Learning platform",
    icon: GraduationCap,
    glowColor: "rgba(59, 130, 246, 0.25)",
    borderColor: "rgba(59, 130, 246, 0.2)",
    accentText: "text-blue-500"
  },
  {
    name: "Arasoft",
    role: "Enterprise Software & Cloud Systems Architecture",
    icon: Cpu,
    glowColor: "rgba(168, 85, 247, 0.25)",
    borderColor: "rgba(168, 85, 247, 0.2)",
    accentText: "text-purple-500"
  }
];

export default function TrustedClients() {
  return (
    <section className="py-20 sm:py-24 border-t border-border-custom relative overflow-hidden bg-bg-base/20 select-none">
      {/* Ambient glowing circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-accent-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center gap-4 mb-16">
          <SectionLabel label="02 / Trusted Clients" />
          <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-text-primary uppercase">
            Trusted Partners
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-xl leading-relaxed font-body">
            Collaborating with leading innovators, educational systems, and enterprises to craft high-performance products.
          </p>
        </div>

        {/* Logo cloud grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {CLIENTS.map((client, idx) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: `0 15px 30px ${client.glowColor}`,
                  borderColor: client.borderColor
                }}
                className="group relative p-8 rounded-2xl bg-bg-card/40 border border-border-custom/50 backdrop-blur-md transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[180px] overflow-hidden"
              >
                {/* Micro-interaction glow behind card */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${client.glowColor} 0%, transparent 70%)`
                  }}
                />

                <div className="flex flex-col items-center gap-4 relative z-10">
                  <div className={`p-3 rounded-xl bg-bg-base border border-border-custom/40 transition-colors duration-300 group-hover:border-current ${client.accentText}`}>
                    <Icon className="w-6 h-6 shrink-0" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-bold font-heading tracking-wider uppercase text-text-primary group-hover:text-accent-primary transition-colors duration-300">
                      {client.name}
                    </h3>
                    <p className="text-xs text-text-secondary/70 font-mono max-w-[200px] leading-relaxed">
                      {client.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
