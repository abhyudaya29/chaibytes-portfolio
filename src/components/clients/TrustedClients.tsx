"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Handshake, CheckCircle2, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import SectionLabel from "../shared/SectionLabel";

// Strategic Partners List
const PARTNERS = [
  {
    name: "SaptTech Labs",
    fullName: "SaptTech Labs LLP",
    role: "Strategic Technology Partner",
    badge: "Enterprise & Cloud AI",
    tagline: "Custom software, SaaS, CRM & Cloud infrastructure across UAE, GCC, UK, US & India.",
    url: "https://sapttechlabs.com",
    hasCustomBadge: true,
  },
  {
    name: "Arahasoft",
    fullName: "Arahasoft Technologies",
    role: "Strategic Engineering Partner",
    badge: "Enterprise Systems",
    tagline: "High-scale enterprise software modernization, cloud migration & core backend systems.",
    url: "https://arahasoft.com",
    initials: "AS",
  },
];

// Trusted Clients List
const CLIENTS = [
  {
    name: "FlowNext AI",
    category: "AI Marketing Automation",
    impact: "Omnichannel real-time leads & WhatsApp autonomous flows",
    initials: "FN",
  },
  {
    name: "Mind Magnificence",
    category: "EdTech & Performance Coaching",
    impact: "Interactive diagnostic workflows & student evaluation engines",
    initials: "MM",
  },
  {
    name: "BasicGuru Classes",
    category: "Digital Education Platform",
    impact: "High-concurrency test evaluation & live analytics portal",
    initials: "BG",
  },
];

export default function TrustedClients() {
  return (
    <section id="partners" className="py-20 border-y border-border-custom relative overflow-hidden bg-bg-base/40">
      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* ================= PART 1: STRATEGIC PARTNERS ================= */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-xs font-mono text-accent-primary">
                <Handshake className="w-3.5 h-3.5" />
                <span>Strategic Alliances</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading uppercase text-text-primary tracking-tight">
                Strategic <span className="font-editorial italic text-accent-primary font-normal lowercase">Partners.</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary max-w-md font-body">
              Co-developing enterprise software, cloud automation pipelines, and scalable AI infrastructure alongside industry leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PARTNERS.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 sm:p-7 rounded-3xl bg-bg-card border border-border-custom hover:border-accent-primary/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      {partner.hasCustomBadge ? (
                        <div className="w-12 h-12 rounded-2xl bg-bg-elevated border border-border-custom p-1.5 flex items-center justify-center shadow-sm">
                          <Image
                            src="/partners/sapttech-logo.png"
                            alt="SaptTech Labs"
                            width={42}
                            height={42}
                            className="object-contain w-full h-full"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-2xl bg-bg-elevated border border-border-custom flex items-center justify-center font-heading font-black text-accent-primary text-base shadow-sm">
                          {partner.initials}
                        </div>
                      )}
                      <div>
                        <div className="font-heading font-bold text-lg text-text-primary flex items-center gap-2">
                          <span>{partner.name}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary">
                            {partner.badge}
                          </span>
                        </div>
                        <div className="text-xs font-mono text-text-secondary">
                          {partner.role}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-text-secondary font-body leading-relaxed">
                    {partner.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border-custom/50 flex items-center justify-between text-xs font-mono">
                  <span className="text-accent-primary font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    Verified Partnership
                  </span>
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-secondary hover:text-accent-primary transition-colors flex items-center gap-1"
                  >
                    <span>Visit Website</span>
                    <span>↗</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= PART 2: TRUSTED CLIENTS ================= */}
        <div className="space-y-6 pt-4 border-t border-border-custom/40">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-text-secondary tracking-widest uppercase">
              Trusted by Ambitious Startups &amp; Organizations
            </span>
            <span className="text-xs font-mono text-accent-primary">
              100% On-Time Delivery
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {CLIENTS.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="p-5 rounded-2xl bg-bg-card/70 border border-border-custom hover:border-accent-primary/30 transition-all duration-200 shadow-sm space-y-2"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-bg-elevated border border-border-custom flex items-center justify-center font-mono font-bold text-xs text-accent-primary">
                    {client.initials}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-text-primary">
                      {client.name}
                    </h4>
                    <p className="text-[10px] font-mono text-text-secondary">
                      {client.category}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-text-secondary font-body pt-1 leading-relaxed">
                  {client.impact}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
