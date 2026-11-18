"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/constants";
import { Mail, Github, Linkedin, Twitter, ArrowUpRight, MapPin, Clock, Coffee, Sparkles } from "lucide-react";
import SectionLabel from "../shared/SectionLabel";
import { LampContainer } from "../ui/lamp";
import { ButtonMovingBorder } from "../ui/moving-border";

export default function ContactSection() {
  const emailAddress = "abhyudaya.dubey@gmail.com";

  return (
    <section id="contact" className="border-t border-border-custom relative overflow-hidden bg-bg-base">
      
      {/* Aceternity Lamp Section leading into the contact callout */}
      <LampContainer className="pt-28 pb-12">
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center text-center max-w-3xl px-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-bg-elevated border border-border-custom text-xs font-mono text-text-secondary mb-6 shadow-sm">
            <Coffee className="w-3.5 h-3.5 text-accent-primary" />
            <span>Ready for a fresh brew?</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-text-primary tracking-tight leading-tight uppercase">
            Let&apos;s Build Your <br />
            <span className="font-editorial italic text-accent-primary font-normal lowercase">Next AI Product.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed font-body">
            Whether you need a full-stack SaaS launched in weeks, an autonomous voice agent pipeline, or AEO/GEO discovery optimization, let&apos;s talk over a virtual cup of chai.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="https://cal.com/abhyudaya-dubey/30min" target="_blank" rel="noreferrer">
              <ButtonMovingBorder
                borderRadius="9999px"
                duration={3000}
                className="px-8 py-3.5 font-mono text-xs font-bold uppercase tracking-wider gap-2 shadow-lg"
              >
                <span>Schedule a 30-min Strategy Call</span>
                <ArrowUpRight className="w-4 h-4 text-accent-primary" />
              </ButtonMovingBorder>
            </a>
            
            <a
              href={`mailto:${emailAddress}`}
              className="px-6 py-3.5 rounded-full bg-bg-card border border-border-custom hover:border-accent-primary text-text-primary text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-sm"
            >
              <Mail className="w-4 h-4 text-accent-primary" />
              <span>Email Direct</span>
            </a>
          </div>
        </motion.div>
      </LampContainer>

      {/* Main Info Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pb-20 pt-10 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-border-custom/60">
          
          {/* Col 1: Brand Info & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-bg-elevated border border-border-custom p-1.5 shadow-sm">
                <Image
                  src="/brand/logo-icon.png"
                  alt="ChaiBytes Icon"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-text-primary">
                Chai<span className="text-accent-primary font-mono">Bytes</span>
              </span>
            </div>
            
            <p className="text-sm font-mono text-accent-primary font-semibold">
              Brewing AI Products for Real Business
            </p>
            <p className="text-xs text-text-secondary leading-relaxed max-w-sm font-body">
              ChaiBytes is an AI SaaS product studio building practical AI agents, voice systems, automation platforms, and scalable products for real business problems.
            </p>
          </div>

          {/* Col 2: Services / Offerings Quick Links */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <div className="text-[11px] font-bold text-text-primary uppercase tracking-wider">
              Studio Capabilities
            </div>
            <ul className="space-y-2 text-text-secondary">
              <li className="hover:text-accent-primary transition-colors">→ AI Voice Agents (Vaidya / VoxReception)</li>
              <li className="hover:text-accent-primary transition-colors">→ Full-Stack Healthcare SaaS (TrueSkin)</li>
              <li className="hover:text-accent-primary transition-colors">→ Agentic Search Discoverability (AEO/GEO/SEO)</li>
              <li className="hover:text-accent-primary transition-colors">→ Autonomous Business Automation Workflows</li>
            </ul>
          </div>

          {/* Col 3: Direct contact details */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <div className="text-[11px] font-bold text-text-primary uppercase tracking-wider">
              HQ &amp; Direct Connection
            </div>
            <div className="space-y-2 text-text-secondary">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent-primary flex-shrink-0" />
                <span>India · Serving Global Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-accent-primary flex-shrink-0" />
                <span>IST (UTC+5:30) · 24h Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent-primary flex-shrink-0" />
                <a href={`mailto:${emailAddress}`} className="hover:text-accent-primary transition-colors underline">
                  {emailAddress}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs font-mono text-text-secondary">
            © {new Date().getFullYear()} ChaiBytes. All rights reserved. Built with love &amp; strong chai.
          </p>

          <div className="flex gap-3">
            {[
              { icon: Github, href: PERSONAL_INFO.github, label: "GitHub" },
              { icon: Linkedin, href: PERSONAL_INFO.linkedin, label: "LinkedIn" },
              { icon: Twitter, href: PERSONAL_INFO.twitter, label: "Twitter" },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="p-2.5 rounded-full bg-bg-card border border-border-custom hover:border-accent-primary text-text-secondary hover:text-accent-primary transition-all duration-200 shadow-sm"
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
