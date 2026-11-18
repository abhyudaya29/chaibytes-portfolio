"use client";
import React from "react";
import { Layout, Bot, Rocket, PhoneCall, Cpu, Database, Search } from "lucide-react";
import SectionLabel from "../shared/SectionLabel";
import { HoverEffect } from "../ui/card-hover-effect";

const SERVICES_DATA = [
  {
    title: "AI Voice Agents & Telephony",
    description: "Ultra-low-latency conversational voice bots for inbound reception, appointment booking, patient triage, and customer support with sub-second response times.",
    tags: ["Twilio", "Vapi", "WebSockets", "Streaming STT/TTS"],
    icon: PhoneCall,
  },
  {
    title: "Full-Stack SaaS & MVP Build",
    description: "Taking your product vision from 0 to 1 in record time. We architect complete platforms with authentication, subscriptions, databases, and high-converting portals.",
    tags: ["Next.js 15", "FastAPI", "PostgreSQL", "Supabase"],
    icon: Layout,
  },
  {
    title: "Agentic Workflows & Automation",
    description: "Custom autonomous multi-step agents that execute business logic across CRMs, email, Slack, databases, and third-party APIs without manual human intervention.",
    tags: ["LangChain", "n8n", "Vector DBs", "RAG Systems"],
    icon: Bot,
  },
  {
    title: "Agentic Search (AEO / GEO / SEO)",
    description: "Architecting your website and digital properties to be ingested, indexed, and cited directly by AI search engines like ChatGPT Search, Perplexity, and Google AI Overviews.",
    tags: ["AEO Engine", "GEO Citation", "Structured Schema", "LLM Discovery"],
    icon: Search,
  },
  {
    title: "Enterprise Clinic Portals & Dashboards",
    description: "Specialized healthcare and clinical workflow platforms (like TrueSkin and Vaidya) with real-time patient queueing, EHR data management, and doctor diagnostics.",
    tags: ["HIPAA-grade Auth", "EHR Sync", "Role-based Access", "Analytics"],
    icon: Database,
  },
  {
    title: "High-Throughput Backend & APIs",
    description: "Microservice clusters, real-time WebSocket pipelines, caching layers, and cloud infrastructure engineered for massive concurrency and fault-tolerant uptime.",
    tags: ["Docker", "Redis", "Kafka", "Cloudflare Workers"],
    icon: Cpu,
  },
];

export default function FreelanceSection() {
  return (
    <section id="services" className="py-24 sm:py-32 border-t border-border-custom relative overflow-hidden bg-bg-base">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-primary/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 max-w-2xl mb-12">
          <SectionLabel label="01 / What We Brew" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-primary uppercase leading-tight">
            Our Core <span className="font-editorial italic text-accent-primary font-normal lowercase">Services.</span>
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-body">
            From conversational AI voice bots to full-scale SaaS platforms and Agentic Search Discoverability (AEO/GEO), ChaiBytes delivers battle-tested software designed for real business revenue.
          </p>

          {/* Availability bar */}
          <div className="flex flex-wrap items-center gap-3 px-4 py-2 mt-2 rounded-full bg-bg-elevated border border-border-custom text-xs font-mono text-text-secondary select-none shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-text-primary font-semibold">Accepting New Client Projects</span>
            <span className="text-border-custom">|</span>
            <span>24-Hour Turnaround Consultation</span>
            <span className="text-border-custom">|</span>
            <span>IST / Global Timezones</span>
          </div>
        </div>

        {/* Aceternity Card Hover Effect Grid */}
        <HoverEffect items={SERVICES_DATA} />

      </div>
    </section>
  );
}
