"use client";
import React from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/constants";
import { Mail, Github, Linkedin, Twitter, FileText, Calendar, ArrowUpRight, MapPin, Clock } from "lucide-react";
import SectionLabel from "../shared/SectionLabel";
import ShimmerButton from "../ui/ShimmerButton";

export default function ContactSection() {
  const emailAddress = "abhyudaya.dubey@gmail.com"; // User's actual email as indicated in constants

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-border-custom relative overflow-hidden bg-bg-base">
      {/* Ambient glowing circles */}
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-accent-primary/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-12 right-12 w-80 h-80 bg-accent-deep/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Core Pitch & Contact Call-to-action */}
          <div className="lg:col-span-7 space-y-8">
            <SectionLabel label="CONTACT & INQUIRIES" />
            
            <div className="text-xs font-mono text-text-secondary/60 tracking-widest uppercase -mt-4">
              ChaiBytes by Abhyudaya
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold font-heading text-text-primary tracking-tight leading-tight max-w-xl">
              Let&apos;s build the <span className="font-editorial italic text-accent-primary font-normal">next generation</span> of intelligent systems.
            </h2>
            
            <p className="text-text-secondary text-base sm:text-lg max-w-lg leading-relaxed font-body">
              Whether you want to collaborate on high-performance systems architecture, talk about AI-native workflows, or recruit for an ambitious role, let&apos;s connect.
            </p>
            
            {/* Quick Metadata: Location and Time */}
            <div className="flex flex-wrap gap-6 pt-4 text-xs text-text-secondary font-mono border-t border-border-custom max-w-md">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent-primary" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent-primary animate-pulse" />
                <span>Timezone: IST (GMT+5:30)</span>
              </div>
            </div>

            {/* Call to Actions (Mail Only) */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href={`mailto:${emailAddress}`}>
                <ShimmerButton className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Send an Email</span>
                </ShimmerButton>
              </a>
            </div>
          </div>

          {/* Right Column: Calendar Booking Card (Linear/Vercel inspired detail) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-2xl bg-bg-card/40 border border-border-custom backdrop-blur-md relative overflow-hidden group hover:border-accent-primary/30 transition-all duration-500 shadow-2xl"
            >
              {/* Card top gradient glow */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" />
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent-primary/10 border border-accent-primary/20">
                    <Calendar className="w-5 h-5 text-accent-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-heading text-text-primary">Schedule a Sync</h3>
                    <p className="text-[11px] font-mono text-text-secondary uppercase tracking-wider">15-30 Min Meeting</p>
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" title="Available for calls" />
              </div>

              {/* Simple Mock Calendar Grid to evoke design precision */}
              <div className="grid grid-cols-7 gap-1.5 p-3 rounded-lg bg-bg-base/60 border border-border-custom/50 mb-6 text-center select-none">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, idx) => (
                  <span key={idx} className="text-[10px] font-mono text-text-secondary font-semibold">
                    {day}
                  </span>
                ))}
                {Array.from({ length: 14 }).map((_, idx) => {
                  const dayNum = 12 + idx;
                  const isAvailable = idx === 1 || idx === 3 || idx === 7 || idx === 8;
                  return (
                    <div
                      key={idx}
                      className={`h-7 flex items-center justify-center rounded text-xs font-mono transition-all ${
                        isAvailable
                          ? "bg-accent-primary/10 border border-accent-primary/30 text-accent-primary font-semibold hover:bg-accent-primary/25 cursor-pointer"
                          : "text-text-secondary/40"
                      }`}
                    >
                      {dayNum}
                    </div>
                  );
                })}
              </div>

              <a 
                href="https://calendly.com/abhyudayadev29/30min"
                target="_blank"
                rel="noreferrer"
                className="block w-full"
              >
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-2.5 rounded-lg bg-bg-elevated hover:bg-bg-card border border-border-custom hover:border-accent-primary/40 text-xs font-semibold font-mono tracking-wider uppercase text-text-primary flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
                >
                  <span>Initialize Booking Protocol</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent-primary" />
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Footer/Links Row */}
        <div className="mt-20 pt-8 border-t border-border-custom/50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs font-mono text-text-secondary">
            © {new Date().getFullYear()} ChaiBytes by Abhyudaya Dubey. Built with Next.js 15, Tailwind v4 & Framer Motion.
          </p>

          <div className="flex gap-4">
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
                  className="p-2.5 rounded-full bg-bg-elevated border border-border-custom/80 hover:border-accent-primary/30 text-text-secondary hover:text-accent-primary transition-all duration-300"
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
