"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Cpu, Layers, Bot, Activity, ArrowUpRight } from "lucide-react";
import SectionLabel from "../shared/SectionLabel";

const TEAM_MEMBERS = [
  {
    name: "Abhyudaya Dubey",
    role: "Founder & Lead Architect",
    image: "/abhyudaya.png",
    bio: "Product engineer specializing in complete AI-native software architectures, full-stack SaaS pipelines, and high-concurrency systems that scale reliably.",
    location: "Delhi, India",
    socials: {
      github: "https://github.com/abhyudaya29",
      linkedin: "https://linkedin.com/in/abhyudaya-dubey-8771a7203",
    },
    icon: Cpu,
  },
  {
    name: "Pradeep Yadav",
    role: "Core Systems Engineer & Partner",
    image: "/pradeep.png",
    bio: "Senior software engineer with 4+ years architecting enterprise applications, compliance pipelines, and high-throughput marketing OS portals at RaySuite.",
    location: "Delhi, India",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    icon: Layers,
  },
  {
    name: "Pratham Sharma",
    role: "AI & Voice Agent Engineer",
    image: "/pratham.png",
    bio: "Specializes in autonomous agentic loops, low-latency telephony bots (Vaidya), and real-time business automation systems that eliminate manual overhead.",
    location: "Delhi, India",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    icon: Bot,
  },
  {
    name: "Divyansh Srivastava",
    role: "Healthcare AI & Backend Partner",
    image: "/divyansh.jpg",
    bio: "Specializes in connected medical diagnostics platforms (TrueSkin), HIPAA-grade telemetry architectures, and real-time clinical pre-screening engines.",
    location: "Delhi, India",
    socials: {
      github: "https://github.com/divyaannsh",
      linkedin: "https://www.linkedin.com/in/divyansh-srivastav-a00127221/",
    },
    icon: Activity,
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 sm:py-32 border-t border-border-custom relative overflow-hidden bg-bg-base">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-primary/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 max-w-2xl mb-16">
          <SectionLabel label="03 / Studio Leadership" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-primary uppercase leading-tight">
            The Builders Behind <br />
            <span className="font-editorial italic text-accent-primary font-normal lowercase">ChaiBytes.</span>
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-body">
            A tight-knit engineering team combining systems architecture, AI telephony, full-stack SaaS engineering, and computer vision to deliver tangible client impact.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TEAM_MEMBERS.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-5 rounded-3xl bg-bg-card border border-border-custom hover:border-accent-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div className="flex flex-col w-full">
                  {/* Photo container */}
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-bg-elevated border border-border-custom">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                    />
                  </div>

                  {/* Header info */}
                  <div className="mt-5 flex flex-col">
                    <h3 className="text-lg font-heading font-bold text-text-primary uppercase tracking-tight group-hover:text-accent-primary transition-colors duration-200">
                      {member.name}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1 text-accent-primary">
                      <IconComponent className="w-3.5 h-3.5 shrink-0" />
                      <span className="font-mono text-[10px] tracking-wider uppercase font-semibold">
                        {member.role}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full border-t border-dashed border-border-custom/50 my-4" />

                  {/* Bio */}
                  <p className="text-xs text-text-secondary leading-relaxed font-body flex-1">
                    {member.bio}
                  </p>
                </div>

                {/* Social Footer */}
                <div className="mt-5 pt-3 border-t border-border-custom/40 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-text-secondary">
                    {member.location}
                  </span>
                  <div className="flex items-center gap-2">
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-full bg-bg-elevated hover:bg-accent-primary text-text-secondary hover:text-white transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-full bg-bg-elevated hover:bg-accent-primary text-text-secondary hover:text-white transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                    )}
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
