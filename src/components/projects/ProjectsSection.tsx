"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight, AppWindow, ArrowUpRight } from "lucide-react";
import { PROJECTS_DATA } from "@/lib/constants";
import SectionLabel from "../shared/SectionLabel";
import ProjectCard3D from "./ProjectCard3D";
import Image from "next/image";
import GlowBorder from "../shared/GlowBorder";
import { SparklesText } from "../ui/sparkles-text";

export default function ProjectsSection() {
  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);
  const gridProjects = PROJECTS_DATA.filter((p) => !p.featured);

  // Marquee projects list (doubled for seamless infinite scroll loop)
  const marqueeItems = [...PROJECTS_DATA, ...PROJECTS_DATA];

  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 px-6 sm:px-12 md:px-24 bg-bg-elevated/40 border-y border-border-custom/30 overflow-hidden"
    >
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-accent-deep/5 blur-[160px] pointer-events-none" />

      {/* Main Section Content Wrapper */}
      <div className="relative max-w-7xl mx-auto z-10 flex flex-col gap-16">
        
        {/* Header copy */}
        <div className="flex flex-col items-start gap-4 max-w-2xl">
          <SectionLabel label="02 / Products Built" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-primary uppercase">
            Intelligent Products
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-body">
            A curated showcase of real-time voice receptionists, conversational desks, marketing tools, and telecoms platform architectures we have built.
          </p>
        </div>

        {/* Large Featured Project Cards */}
        <div className="flex flex-col gap-8 w-full">
          {featuredProjects.map((project) => {
            const isVaidya = project.id === "vaidya";
            const graphicSrc = isVaidya ? "/vaidya_graphic.jpg" : "/trueskin_graphic.jpg";
            const graphicAlt = isVaidya ? "Vaidya AI Receptionist Dashboard" : "TrueSkin Clinical AI Dashboard";
            const graphicFit = isVaidya ? "object-contain" : "object-cover";
            const exploreUrl = isVaidya ? "/products/vaidya" : "/products/trueskin";

            return (
              <a
                key={project.id}
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="block w-full cursor-pointer group/card"
              >
                <GlowBorder
                  glowColor="#C8430A"
                  duration={6}
                  containerClassName="rounded-[32px] w-full"
                  className="!p-8 sm:!p-10 !bg-bg-card/25 border border-border-custom/30 group-hover/card:border-accent-primary/40 transition-all duration-500"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
                    
                    {/* Info Area (cols 7) */}
                    <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
                      <div className="space-y-4">
                        <span className="font-mono text-[10px] tracking-widest text-accent-primary uppercase font-semibold">
                          Featured Product · {project.category}
                        </span>
                        <SparklesText
                          className="text-2xl sm:text-4xl font-heading font-bold text-text-primary uppercase tracking-tight block"
                          sparklesCount={5}
                          colors={{ first: "#C8430A", second: "#FFA07A" }}
                        >
                          {project.name}
                        </SparklesText>
                        <p className="text-[13px] sm:text-[14px] text-text-secondary leading-relaxed font-body">
                          {project.description}
                        </p>
                        <div className="p-4 rounded-xl bg-bg-base/70 border border-border-custom/40 font-mono text-[11px] text-accent-hover">
                          <span className="text-text-secondary/50 uppercase tracking-wider block text-[9px] mb-1 font-bold">
                            Technical Milestone
                          </span>
                          → {project.highlight}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                        <div className="flex items-center gap-4 shrink-0 sm:ml-auto">
                          {project.githubUrl && project.githubUrl !== "#" && (
                            <span
                              className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent-primary transition-colors font-medium"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                window.open(project.githubUrl, "_blank");
                              }}
                            >
                              <Github className="w-4 h-4" /> Code
                            </span>
                          )}
                          <span
                            className="flex items-center gap-1.5 text-xs text-accent-primary hover:text-accent-hover transition-colors font-semibold"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.open(project.liveUrl, "_blank");
                            }}
                          >
                            Try {project.name} <ArrowUpRight className="w-4 h-4" />
                          </span>
                          <span
                            className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent-primary transition-colors font-medium ml-2"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.open(exploreUrl, "_self");
                            }}
                          >
                            Explore {project.name} ↗
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Graphic Dashboard (cols 5) */}
                    <div className="lg:col-span-5 relative w-full h-[220px] sm:h-[260px] rounded-2xl overflow-hidden border border-border-custom/40 shadow-2xl group-hover/card:scale-[1.02] transition-transform duration-500">
                      <Image
                        src={graphicSrc}
                        alt={graphicAlt}
                        fill
                        className={`${graphicFit} bg-bg-card`}
                        sizes="(max-w-768px) 100vw, 33vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-base/80 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 flex items-end p-4">
                        <span className="text-[10px] font-mono text-text-primary uppercase tracking-widest bg-bg-card/90 px-3 py-1.5 rounded-lg border border-border-custom/50">
                          View Live Demo
                        </span>
                      </div>
                    </div>

                  </div>
                </GlowBorder>
              </a>
            );
          })}
        </div>

        {/* Bento Supporting Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gridProjects.map((project) => (
            <ProjectCard3D key={project.id} className="min-h-[260px]">
              <div className="flex flex-col justify-between h-full space-y-6">
                <div className="space-y-3.5">
                  <span className="font-mono text-[9px] tracking-widest text-text-secondary/40 uppercase font-semibold">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-text-primary uppercase tracking-tight select-none">
                    {project.name}
                  </h3>
                  <p className="text-[13px] text-text-secondary/80 leading-relaxed font-body">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="text-[10px] font-mono text-accent-primary leading-snug">
                    <span className="text-text-secondary/30 text-[9px] font-bold block uppercase tracking-wider mb-0.5">
                      Key Architecture
                    </span>
                    → {project.highlight}
                  </div>

                  <div className="flex items-center justify-between border-t border-border-custom/20 pt-3">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[9px] font-mono bg-bg-base border border-border-custom/40 text-text-secondary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <a href={project.githubUrl} className="text-text-secondary hover:text-accent-primary transition-colors" title="View Source Code">
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      <a 
                        href={project.liveUrl} 
                        className="flex items-center gap-1 text-xs text-accent-primary hover:text-accent-hover font-semibold transition-colors"
                      >
                        Explore <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ProjectCard3D>
          ))}
        </div>

        {/* Supplementary Carousel Marquee */}
        <div className="flex flex-col gap-6 pt-4">
          <h3 className="font-mono text-[10px] tracking-widest text-text-secondary/40 uppercase text-center">
            Extended Project Catalog
          </h3>
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] select-none">
            <div className="flex gap-4 min-w-full shrink-0 animate-marquee py-2">
              {marqueeItems.map((item, idx) => (
                <div
                  key={idx}
                  className="px-5 py-3 rounded-2xl bg-bg-card/40 border border-border-custom backdrop-blur-md flex items-center gap-4 shrink-0 hover:border-accent-primary/40 transition-colors duration-300"
                >
                  <AppWindow className="w-4 h-4 text-accent-primary shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-heading font-semibold text-text-primary text-[13px] uppercase">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-mono text-text-secondary/50">
                      {item.category}
                    </span>
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
