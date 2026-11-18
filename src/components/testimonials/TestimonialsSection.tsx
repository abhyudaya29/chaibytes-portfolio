"use client";
import React from "react";
import { Quote, Star, Sparkles, Building2, CheckCircle2 } from "lucide-react";
import SectionLabel from "../shared/SectionLabel";

const ROW1_TESTIMONIALS = [
  {
    name: "Riya Sharma",
    title: "Founder, Mind Magnificence",
    quote: "ChaiBytes turned a complex product vision into a polished, reliable AI diagnostic system with exceptional speed and precision. Their commitment to engineering detail is unmatched.",
    company: "Mind Magnificence",
    rating: 5,
  },
  {
    name: "Aakash Patel",
    title: "CTO, FlowNext AI",
    quote: "From architecture design to deployment, ChaiBytes delivered an AI marketing flow that exceeded our latency benchmarks. Their real-time WebSocket and telephony expertise is world-class.",
    company: "FlowNext AI",
    rating: 5,
  },
  {
    name: "Sneha Gupta",
    title: "Product Head, BasicGuru Classes",
    quote: "Working with ChaiBytes has been transformative — every release feels more refined, scalable, and intuitive for thousands of live test-takers simultaneously.",
    company: "BasicGuru Classes",
    rating: 5,
  },
];

const ROW2_TESTIMONIALS = [
  {
    name: "Amit Verma",
    title: "Founder, Arahasoft",
    quote: "ChaiBytes migrated our legacy enterprise pipeline into a high-availability microservice cluster. Outstanding backend database design and cloud infrastructure execution.",
    company: "Arahasoft",
    rating: 5,
  },
  {
    name: "Sarah Jenkins",
    title: "Lead Developer, TrueSkin",
    quote: "The clinic portal engineered by ChaiBytes transformed our dermatology diagnostic workflows. Seamless UI design, HIPAA-grade security, and instant EHR lookup.",
    company: "TrueSkin",
    rating: 5,
  },
  {
    name: "Divyansh Srivastava",
    title: "Co-Founder, VoxReception",
    quote: "Highly skilled product engineering team. They took complex telephony specs and built a production-ready conversational voice dashboard in record time.",
    company: "VoxReception",
    rating: 5,
  },
];

const row1Items = [...ROW1_TESTIMONIALS, ...ROW1_TESTIMONIALS, ...ROW1_TESTIMONIALS];
const row2Items = [...ROW2_TESTIMONIALS, ...ROW2_TESTIMONIALS, ...ROW2_TESTIMONIALS];

function TestimonialCard({ item }: { item: typeof ROW1_TESTIMONIALS[0] }) {
  return (
    <div className="w-[340px] sm:w-[400px] shrink-0 p-6 rounded-3xl bg-bg-card border border-border-custom hover:border-accent-primary/40 transition-all duration-300 shadow-sm flex flex-col justify-between select-none">
      <div className="space-y-4">
        {/* Rating & Quote Icon */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <Quote className="w-4 h-4 text-accent-primary opacity-60" />
        </div>

        {/* Testimonial Quote */}
        <p className="text-sm font-body text-text-primary/90 leading-relaxed italic">
          &ldquo;{item.quote}&rdquo;
        </p>
      </div>

      {/* Author Footer */}
      <div className="mt-6 pt-4 border-t border-border-custom/50 flex items-center justify-between">
        <div>
          <div className="font-heading font-bold text-sm text-text-primary">
            {item.name}
          </div>
          <div className="text-[11px] font-mono text-text-secondary">
            {item.title}
          </div>
        </div>
        <div className="px-2.5 py-1 rounded-full bg-bg-elevated border border-border-custom text-[10px] font-mono font-semibold text-accent-primary">
          {item.company}
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 border-t border-border-custom relative overflow-hidden bg-bg-base/20">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-primary/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10 flex flex-col items-center text-center">
        <SectionLabel label="02 / Client Stories" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-primary uppercase mt-3">
          Trusted By <span className="font-editorial italic text-accent-primary font-normal lowercase">Industry Builders.</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-text-secondary max-w-xl font-body">
          Hear directly from the founders, CTOs, and product leaders who rely on ChaiBytes to architect and scale their mission-critical software.
        </p>
      </div>

      {/* Infinite Marquee Track 1 (Left to Right) */}
      <div className="relative w-full overflow-hidden mask-fade-edges py-3">
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max">
          {row1Items.map((item, idx) => (
            <TestimonialCard key={`row1-${idx}`} item={item} />
          ))}
        </div>
      </div>

      {/* Infinite Marquee Track 2 (Right to Left) */}
      <div className="relative w-full overflow-hidden mask-fade-edges py-3 mt-4">
        <div
          className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max"
          style={{ animationDirection: "reverse" }}
        >
          {row2Items.map((item, idx) => (
            <TestimonialCard key={`row2-${idx}`} item={item} />
          ))}
        </div>
      </div>

    </section>
  );
}
