"use client";
import React, { useState, useEffect } from "react";
import NoiseBg from "@/components/shared/NoiseBg";
import CustomCursor from "@/components/shared/CustomCursor";
import CommandPalette from "@/components/command/CommandPalette";
import Header from "@/components/navigation/Header";
import FloatingNav from "@/components/navigation/FloatingNav";
import HeroSection from "@/components/hero/HeroSection";
import TrustedClients from "@/components/clients/TrustedClients";
import AboutSection from "@/components/about/AboutSection";
import TeamSection from "@/components/team/TeamSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import SkillsSection from "@/components/skills/SkillsSection";
import AITerminalSection from "@/components/terminal/AITerminalSection";
import MetricsSection from "@/components/metrics/MetricsSection";
import BlogSection from "@/components/blog/BlogSection";
import FreelanceSection from "@/components/freelance/FreelanceSection";
import ContactSection from "@/components/contact/ContactSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";

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
    <div className="relative min-h-screen bg-bg-base text-text-primary selection:bg-accent-primary selection:text-white overflow-x-hidden font-body">
      
      {/* Procedural background noise overlay */}
      <NoiseBg />

      {/* Physics-based custom cursor */}
      <CustomCursor />

      {/* Playbook-style command palette (Cmd+K) */}
      <CommandPalette isOpen={isCommandOpen} setIsOpen={setIsCommandOpen} />

      {/* Sticky Top Header Navigation */}
      <Header onSearchClick={() => setIsCommandOpen(true)} />

      {/* Dynamic Floating Quick Navigation Dock */}
      <FloatingNav onSearchClick={() => setIsCommandOpen(true)} />

      {/* 1. Hero Section with Aceternity Spotlight & New Logo Showcase */}
      <HeroSection />

      {/* 2. Strategic Partners (SaptTech Labs, Arahasoft) & Trusted Clients */}
      <TrustedClients />

      {/* 3. Core Services with Aceternity Card Hover Effect */}
      <FreelanceSection />
      
      {/* 4. Products Portfolio (TrueSkin, Vaidya, RayTalk, etc.) */}
      <ProjectsSection />

      {/* 5. Drag-and-drop Visual Workflow Pipeline Canvas */}
      <AITerminalSection />

      {/* 6. Testimonial Marquees */}
      <TestimonialsSection />

      {/* 7. Team & Leadership */}
      <TeamSection />
      
      {/* 8. Studio Story & Philosophy */}
      <AboutSection />
      
      {/* 9. Technology Stack Vector */}
      <SkillsSection />
      
      {/* 10. Performance Metrics & Benchmarks */}
      <MetricsSection />

      {/* 11. Engineering Blog & Case Studies */}
      <BlogSection />
      
      {/* 12. Contact & Callout with Aceternity Lamp Container */}
      <ContactSection />

    </div>
  );
}
