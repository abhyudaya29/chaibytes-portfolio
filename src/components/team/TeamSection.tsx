"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Cpu, Layers, Bot } from "lucide-react";
import SectionLabel from "../shared/SectionLabel";

const TEAM_MEMBERS = [
  {
    name: "Abhyudaya Dubey",
    role: "AI Product Engineer",
    image: "/abhyudaya.png",
    bio: "Founder of ChaiBytes. Specializes in building complete, easy-to-use digital systems from scratch that can easily scale to support millions of users.",
    location: "Delhi, India",
    socials: {
      github: "https://github.com/abhyudaya29",
      linkedin: "https://linkedin.com/in/abhyudaya-dubey-8771a7203",
    },
    icon: Cpu,
  },
  {
    name: "Pradeep Yadav",
    role: "Software Engineer & Partner",
    image: "/pradeep.png",
    bio: "Software Engineer with over 4 years of experience building scalable applications, admin portals, and compliance tools at RAYSUITE.AI.",
    location: "Delhi, India",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    icon: Layers,
  },
  {
    name: "Pratham Sharma",
    role: "AI Engineer & Partner",
    image: "/pratham.png",
    bio: "Specializes in autonomous agents, voice assistants, and operations automation pipelines that replace manual repetitive workflows.",
    location: "Delhi, India",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    icon: Bot,
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
          <SectionLabel label="03 / Engineering Team" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-primary uppercase">
            Core Team
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-body">
            The creators, strategists, and makers who move our mission forward, combining design, code, and vision to achieve remarkable results.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TEAM_MEMBERS.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group p-4 rounded-[32px] bg-bg-card/30 border border-border-custom/40 hover:border-accent-primary/20 hover:shadow-[0_0_50px_rgba(200,67,10,0.02)] transition-all duration-300 flex flex-col justify-between h-full"
              >
                {/* Top Part */}
                <div className="flex flex-col w-full">
                  {/* Full-width Profile Photo */}
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-bg-base border border-border-custom/20">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                    />
                  </div>

                  {/* Name and Role */}
                  <div className="mt-5 flex flex-col">
                    <h3 className="text-base sm:text-lg font-heading font-bold text-text-primary uppercase tracking-tight group-hover:text-accent-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1 text-text-secondary/70">
                      <IconComponent className="w-3.5 h-3.5 shrink-0 text-accent-primary/70" />
                      <span className="font-mono text-[9px] tracking-wider uppercase">
                        {member.role}
                      </span>
                    </div>
                  </div>

                  {/* Dashed Divider */}
                  <div className="w-full border-t border-dashed border-border-custom/30 my-4" />

                  {/* Description Bio */}
                  <p className="text-[13px] text-text-secondary/85 leading-relaxed font-body flex-1">
                    {member.bio}
                  </p>
                </div>

                {/* Footer Info */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-border-custom/10 w-full">
                  <span className="text-[10px] font-mono text-text-secondary/40 select-none">
                    {member.location}
                  </span>
                  <div className="flex gap-2">
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-bg-base/60 border border-border-custom/40 text-text-secondary/50 hover:text-accent-primary hover:border-accent-primary/30 transition-all duration-300"
                        aria-label="GitHub Profile"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-bg-base/60 border border-border-custom/40 text-text-secondary/50 hover:text-accent-primary hover:border-accent-primary/30 transition-all duration-300"
                        aria-label="LinkedIn Profile"
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
