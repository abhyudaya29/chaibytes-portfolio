"use client";

import React from "react";
import { Quote } from "lucide-react";
import SectionLabel from "../shared/SectionLabel";

const ROW1_TESTIMONIALS = [
  {
    name: "Riya Sharma",
    title: "Founder, Mind Magnificence",
    quote: "Chaibytes turned a complex product vision into a polished, reliable AI system with exceptional speed and precision. The team’s commitment to detail is unmatched.",
    company: "Mind Magnificence",
  },
  {
    name: "Aakash Patel",
    title: "CTO, FlowNext AI",
    quote: "From architecture design to deployment, Chaibytes delivered a future-ready solution that exceeded our performance goals. Their AI and real-time expertise is a major force multiplier.",
    company: "FlowNext AI",
  },
  {
    name: "Sneha Gupta",
    title: "Product Head, BasicGuru Classes",
    quote: "Working with ChaiBytes has been transformative — every release feels more refined, more scalable, and more delightful for our users. Their engineering rigor is impressive.",
    company: "BasicGuru Classes",
  },
];

const ROW2_TESTIMONIALS = [
  {
    name: "Amit Verma",
    title: "Founder, Arahasoft",
    quote: "ChaiBytes migrated our legacy enterprise pipeline into a scalable, high-availability microservice cluster. Outstanding backend design and database architecture.",
    company: "Arahasoft",
  },
  {
    name: "Sarah Jenkins",
    title: "Lead Developer, TrueSkin",
    quote: "The clinic portal developed by Abhyudaya has transformed our dermatology diagnostics workflows. Seamless UI design and solid database security features.",
    company: "TrueSkin",
  },
  {
    name: "Divyansh Srivastava",
    title: "Co-Founder, VoxReception",
    quote: "Highly skilled product engineer. Took our complex real-time telecom telephony specs and built a production-ready dashboard interface in record time.",
    company: "VoxReception",
  },
];

// Helper to double items for infinite scroll alignment
const row1Items = [...ROW1_TESTIMONIALS, ...ROW1_TESTIMONIALS, ...ROW1_TESTIMONIALS];
const row2Items = [...ROW2_TESTIMONIALS, ...ROW2_TESTIMONIALS, ...ROW2_TESTIMONIALS];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 bg-bg-base border-t border-border-custom/20 overflow-hidden select-none">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-primary/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header matching Dribbble style */}
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <SectionLabel label="01.8 / Feedback" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-primary uppercase max-w-2xl leading-tight">
            Words of praise from others about our presence.
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-lg leading-relaxed font-body">
            Trusted feedback from founders, product leaders, and engineering teams who partnered with us.
          </p>
        </div>

        {/* Dual Marquee Track Wrapper */}
        <div className="flex flex-col gap-6 w-full overflow-hidden">
          
          {/* Row 1: Left to Right Marquee */}
          <div className="flex w-full overflow-hidden relative">
            {/* Fade overlays for soft side boundaries */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg-base to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg-base to-transparent z-20 pointer-events-none" />
            
            <div className="flex gap-6 animate-marquee whitespace-nowrap min-w-full">
              {row1Items.map((item, idx) => (
                <div
                  key={`row1-${idx}`}
                  className="w-[300px] sm:w-[360px] shrink-0 inline-flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-border-custom/40 bg-bg-card/45 backdrop-blur-md hover:border-accent-primary/45 transition-all duration-300 shadow-sm whitespace-normal relative overflow-hidden group"
                >
                  <div className="space-y-4">
                    {/* Quotes Icon */}
                    <Quote className="w-8 h-8 text-accent-primary/20 group-hover:text-accent-primary/40 transition-colors shrink-0" />
                    
                    {/* Quote Text */}
                    <p className="text-[13px] sm:text-[14px] text-text-secondary/85 leading-relaxed font-body">
                      {item.quote}
                    </p>
                  </div>

                  {/* Profile Dock */}
                  <div className="flex items-center gap-3 border-t border-border-custom/10 pt-4 mt-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-primary/10 text-accent-primary font-bold text-xs uppercase tracking-wider select-none">
                      {item.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-text-primary leading-tight truncate">{item.name}</p>
                      <p className="text-[9px] text-accent-primary/80 font-mono tracking-wider truncate mt-0.5">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right to Left Marquee */}
          <div className="flex w-full overflow-hidden relative mt-1">
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg-base to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg-base to-transparent z-20 pointer-events-none" />
            
            <div className="flex gap-6 animate-marquee whitespace-nowrap min-w-full [animation-direction:reverse]">
              {row2Items.map((item, idx) => (
                <div
                  key={`row2-${idx}`}
                  className="w-[300px] sm:w-[360px] shrink-0 inline-flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-border-custom/40 bg-bg-card/45 backdrop-blur-md hover:border-accent-primary/45 transition-all duration-300 shadow-sm whitespace-normal relative overflow-hidden group"
                >
                  <div className="space-y-4">
                    {/* Quotes Icon */}
                    <Quote className="w-8 h-8 text-accent-primary/20 group-hover:text-accent-primary/40 transition-colors shrink-0" />
                    
                    {/* Quote Text */}
                    <p className="text-[13px] sm:text-[14px] text-text-secondary/85 leading-relaxed font-body">
                      {item.quote}
                    </p>
                  </div>

                  {/* Profile Dock */}
                  <div className="flex items-center gap-3 border-t border-border-custom/10 pt-4 mt-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-primary/10 text-accent-primary font-bold text-xs uppercase tracking-wider select-none">
                      {item.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-text-primary leading-tight truncate">{item.name}</p>
                      <p className="text-[9px] text-accent-primary/80 font-mono tracking-wider truncate mt-0.5">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
