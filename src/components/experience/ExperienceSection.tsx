"use client";
import React from "react";
import { Timeline } from "../ui/timeline";
import SectionLabel from "../shared/SectionLabel";
import { EXPERIENCE_TIMELINE } from "@/lib/constants";
import { Briefcase, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  const timelineData = EXPERIENCE_TIMELINE.map((item) => ({
    title: item.years,
    subtitle: item.company,
    tag: item.role,
    content: (
      <div className="p-6 sm:p-7 rounded-3xl bg-bg-card border border-border-custom hover:border-accent-primary/40 transition-all duration-300 shadow-sm space-y-4">
        <div>
          <span className="text-xs font-mono text-accent-primary font-semibold uppercase tracking-wider">
            {item.role}
          </span>
          <h4 className="text-lg font-heading font-bold text-text-primary mt-1">
            {item.company}
          </h4>
          <p className="text-sm text-text-secondary mt-2 leading-relaxed font-body">
            {item.description}
          </p>
        </div>

        {/* Bullets */}
        <div className="space-y-2 pt-2 border-t border-border-custom/50">
          {item.bullets.map((bullet, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-text-secondary leading-relaxed font-body">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent-primary mt-0.5 shrink-0" />
              <span>{bullet}</span>
            </div>
          ))}
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {item.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-bg-elevated border border-border-custom text-text-secondary"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <section id="experience" className="py-24 border-t border-border-custom relative overflow-hidden bg-bg-base">
      <div className="max-w-7xl mx-auto px-6 mb-8 relative z-10">
        <SectionLabel label="05 / Delivery Track Record" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-primary uppercase mt-3">
          Proven <span className="font-editorial italic text-accent-primary font-normal lowercase">Track Record.</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-text-secondary max-w-xl font-body">
          A documented history of building enterprise-scale SaaS products, real-time marketing suites, and energy systems with industry partners.
        </p>
      </div>

      <Timeline data={timelineData} />
    </section>
  );
}
