"use client";
import React from "react";
import { motion } from "framer-motion";
import { Layout, Bot, Rocket, Mail, Linkedin, ArrowUpRight } from "lucide-react";
import SectionLabel from "../shared/SectionLabel";
import ShimmerButton from "../ui/ShimmerButton";
import { PERSONAL_INFO } from "@/lib/constants";

const SERVICES = [
  {
    title: "Web development",
    description: "Full-stack web apps, landing pages, dashboards, and internal tools. Fast delivery, clean code, production-ready.",
    tags: ["Next.js", "React", "FastAPI", "PostgreSQL"],
    icon: Layout,
  },
  {
    title: "AI automation",
    description: "Custom AI workflows, chatbots, RAG pipelines, and agent integrations that actually ship and work in production.",
    tags: ["LangChain", "OpenAI", "Claude", "Agents"],
    icon: Bot,
  },
  {
    title: "Ship MVPs & SaaS",
    description: "Got an idea? I'll take it from zero to a working product. Full-stack, AI-ready, deployed and in users' hands fast.",
    tags: ["MVP", "SaaS", "0→1", "Full Stack"],
    icon: Rocket,
  },
];

export default function FreelanceSection() {
  return (
    <section id="freelance" className="py-24 sm:py-32 border-t border-border-custom relative overflow-hidden bg-bg-base/20">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-accent-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 max-w-2xl mb-12">
          <SectionLabel label="07 / Freelance" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-primary uppercase">
            Work with me.
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-body">
            Available for contract and freelance projects. I work with founders and startups who need to move fast — web apps, AI tools, or a full SaaS shipped from scratch.
          </p>

          {/* Availability bar */}
          <div className="flex items-center gap-3 px-4 py-2 mt-4 rounded-full bg-bg-card/50 border border-border-custom text-xs font-mono text-text-secondary select-none">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Open to freelance work</span>
            <span className="text-border-custom">|</span>
            <span>Typically respond within 24 hours</span>
            <span className="text-border-custom">|</span>
            <span>IST timezone</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-bg-card/45 border border-border-custom/50 backdrop-blur-md hover:border-accent-primary/35 hover:shadow-[0_0_30px_rgba(200,67,10,0.06)] transition-all duration-300 flex flex-col justify-between min-h-[260px]"
              >
                <div className="space-y-4">
                  {/* Service Icon */}
                  <div className="w-10 h-10 rounded-xl bg-bg-base border border-border-custom/40 flex items-center justify-center text-accent-primary group-hover:bg-accent-primary group-hover:text-text-primary transition-all duration-300">
                    <IconComponent className="w-5 h-5 animate-pulse-slow" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-heading font-bold text-text-primary uppercase tracking-tight group-hover:text-accent-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] text-text-secondary/80 leading-relaxed font-body">
                    {service.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border-custom/10 mt-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-bg-base/80 border border-border-custom text-text-secondary select-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a href={`mailto:${PERSONAL_INFO.email}`}>
            <ShimmerButton className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>Send a project brief</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </ShimmerButton>
          </a>

          <motion.a
            href="https://wa.me/918377939976"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#128C7E]/10 hover:bg-[#128C7E]/20 border border-[#128C7E]/30 hover:border-[#128C7E]/60 text-sm font-medium text-text-primary transition-all duration-300 cursor-pointer"
          >
            <svg className="w-4 h-4 text-[#25D366] fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.498 1.452 5.418 1.453l.014-.004c5.544 0 10.059-4.515 10.063-10.062.002-2.687-1.043-5.212-2.943-7.115C17.243 1.528 14.717.485 12.01.485c-5.547 0-10.063 4.515-10.068 10.066-.001 1.884.5 3.722 1.45 5.32l-.27 1.01L1.08 22.92l6.007-1.577-.44-.289zm10.74-5.228c-.28-.14-1.65-.81-1.91-.91-.26-.09-.45-.14-.64.14-.19.28-.74.91-.91 1.1-.17.19-.34.21-.62.07-1.66-.818-2.73-1.454-3.805-3.3-0.284-.488.284-.453.812-1.508.09-.18.04-.33-.02-.47-.06-.14-.64-1.53-.87-2.1-.23-.55-.47-.48-.64-.49-.17-.01-.36-.01-.56-.01-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.19 5.06 4.48.71.3 1.26.49 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.11-.26-.21-.54-.35z"/>
            </svg>
            <span>Chat on WhatsApp</span>
          </motion.a>

          <motion.a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-bg-elevated border border-border-custom text-sm font-medium text-text-primary hover:border-accent-primary/40 hover:bg-bg-card transition-all duration-300 cursor-pointer"
          >
            <Linkedin className="w-4 h-4 text-text-secondary" />
            <span>Connect on LinkedIn</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
