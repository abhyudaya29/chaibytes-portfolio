"use client";
import React, { useState, useEffect } from "react";
import NoiseBg from "@/components/shared/NoiseBg";
import CustomCursor from "@/components/shared/CustomCursor";
import CommandPalette from "@/components/command/CommandPalette";
import FloatingNav from "@/components/navigation/FloatingNav";
import HeroSection from "@/components/hero/HeroSection";
import TrustedClients from "@/components/clients/TrustedClients";
import AboutSection from "@/components/about/AboutSection";
import TeamSection from "@/components/team/TeamSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import SkillsSection from "@/components/skills/SkillsSection";
import AITerminalSection from "@/components/terminal/AITerminalSection";
import MetricsSection from "@/components/metrics/MetricsSection";
import BlogSection from "@/components/blog/BlogSection";
import FreelanceSection from "@/components/freelance/FreelanceSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  // Monitor keyboard Cmd+K or Ctrl+K shortcut to open command palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-bg-base text-text-primary selection:bg-accent-primary selection:text-text-primary overflow-x-hidden font-body">
      
      {/* Procedural background noise overlay */}
      <NoiseBg />

      {/* Hardware accelerated physics-based custom cursor */}
      <CustomCursor />

      {/* Raycast-style command menu */}
      <CommandPalette isOpen={isCommandOpen} setIsOpen={setIsCommandOpen} />

      {/* Floating pill navigation dock */}
      <FloatingNav onSearchClick={() => setIsCommandOpen(true)} />

      {/* Portfolio main sections */}
      <HeroSection />

      <TrustedClients />

      <FreelanceSection />
      
      <ProjectsSection />

      <TeamSection />
      
      <AboutSection />
      
      <ExperienceSection />
      
      <SkillsSection />
      
      <AITerminalSection />
      
      <MetricsSection />

      <BlogSection />
      
      <ContactSection />

    </div>
  );
}
