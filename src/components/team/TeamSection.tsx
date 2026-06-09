"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Globe, Cpu, Layers } from "lucide-react";
import SectionLabel from "../shared/SectionLabel";

const TEAM_MEMBERS = [
  {
    name: "Abhyudaya Dubey",
    role: "AI Product Engineer & Systems Builder",
    image: "/abhyudaya.png",
    bio: "Founder of ChaiBytes and AI Product Engineer. Specializes in building complete, easy-to-use digital systems from scratch that can easily grow to support millions of users. Handled everything from start to finish to build and scale the software platforms behind RAYSUITE.AI and RAYTARGET, turning smart AI technologies and message delivery tools into simple, powerful tools that anyone can use.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "LangChain", "Agentic AI"],
    socials: {
      github: "https://github.com/abhyudaya29",
      linkedin: "https://linkedin.com/in/abhyudaya-dubey-8771a7203",
      twitter: "https://x.com/chaiwalahacoder",
    },
    icon: Cpu,
  },
  {
    name: "Pradeep Yadav",
    role: "Software Engineer & Partner",
    image: "/pradeep.png",
    bio: "Software Engineer and Partner with over 4 years of experience building scalable web and mobile applications. Currently engineering AI platforms, admin portals, and compliance tools at RAYSUITE.AI. Previously developed business-critical full-stack solutions at Dotvik Solutions. Expert in responsive UIs, secure backend systems, and API integrations.",
    tags: ["React.js", "React Native", "Laravel", "Java"],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    icon: Layers,
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
            The minds behind the architectures. We partner with fast-growing startups and founders to design, build, and ship zero-to-one AI products and highly concurrent SaaS platforms.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {TEAM_MEMBERS.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group p-6 sm:p-8 rounded-2xl bg-bg-card/40 border border-border-custom/50 backdrop-blur-md hover:border-accent-primary/30 hover:shadow-[0_0_40px_rgba(200,67,10,0.05)] transition-all duration-300 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start"
              >
                {/* Profile Photo */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-bg-base/80 border border-border-custom/30 group-hover:border-accent-primary/20 transition-all duration-500 shrink-0 self-center sm:self-start">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  />
                  {/* Subtle color highlight ring on photo wrapper */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-base/30 to-transparent opacity-80" />
                </div>

                {/* Profile Details */}
                <div className="flex-1 space-y-4 flex flex-col justify-between h-full">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-accent-primary">
                      <IconComponent className="w-4 h-4 shrink-0" />
                      <span className="font-mono text-[10px] tracking-widest uppercase">
                        {member.role}
                      </span>
                    </div>

                    <h3 className="text-xl font-heading font-bold text-text-primary uppercase tracking-tight group-hover:text-accent-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    
                    <p className="text-xs text-text-secondary/90 leading-relaxed font-body">
                      {member.bio}
                    </p>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[9px] font-mono bg-bg-base border border-border-custom/40 text-text-secondary/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Social links row */}
                  <div className="flex gap-3 pt-3 border-t border-border-custom/10">
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-text-secondary/50 hover:text-accent-primary transition-colors p-1"
                        aria-label="GitHub Profile"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-text-secondary/50 hover:text-accent-primary transition-colors p-1"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="text-text-secondary/50 hover:text-accent-primary transition-colors p-1"
                        aria-label="Twitter Profile"
                      >
                        <Twitter className="w-4 h-4" />
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
