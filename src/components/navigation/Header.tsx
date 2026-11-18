"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Search, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  onSearchClick: () => void;
}

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "Partners", href: "#partners" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#projects" },
  { label: "Workflow", href: "#workflow" },
  { label: "Track Record", href: "#experience" },
  { label: "Reviews", href: "#testimonials" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export default function Header({ onSearchClick }: HeaderProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
      const sections = NAV_ITEMS.filter((item) => item.href.startsWith("#")).map(
        (item) => item.href.slice(1)
      );

      const scrollPosition = window.scrollY + 180;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 w-full px-4 sm:px-6 select-none pointer-events-none">
      <div
        className={`max-w-7xl mx-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border flex items-center justify-between transition-all duration-300 pointer-events-auto ${
          scrolled
            ? "bg-bg-card/90 backdrop-blur-md border-border-custom shadow-lg"
            : "bg-bg-card/60 backdrop-blur-sm border-border-custom/50 shadow-sm"
        }`}
      >
        {/* Left: Brand Logo with new Cup & Code Mark */}
        <a href="#hero" className="flex items-center gap-3 group select-none">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-bg-elevated border border-border-custom flex items-center justify-center p-1 group-hover:border-accent-primary transition-colors duration-300 shadow-sm">
            <Image
              src="/brand/logo-icon.png"
              alt="ChaiBytes Logo Icon"
              width={36}
              height={36}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold tracking-tight text-base text-text-primary leading-none flex items-center gap-1 group-hover:text-accent-primary transition-colors duration-300">
              <span>Chai</span>
              <span className="text-accent-primary font-mono font-medium">Bytes</span>
            </span>
            <span className="text-[10px] font-mono text-text-secondary tracking-widest uppercase">
              AI Studio
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation links */}
        <nav className="hidden xl:flex items-center gap-0.5">
          {NAV_ITEMS.map((item) => {
            const isLinkActive = item.href.startsWith("#")
              ? activeSection === item.href.slice(1)
              : false;

            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide uppercase transition-colors duration-200 ${
                  isLinkActive
                    ? "text-accent-primary font-bold"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {item.label}
                {isLinkActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-accent-primary/10 rounded-full -z-10 border border-accent-primary/20"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Quick actions (Search, Theme, Book Button) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Cmd+K Search Button */}
          <button
            onClick={onSearchClick}
            aria-label="Search or run commands"
            className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-bg-elevated border border-border-custom hover:border-accent-primary text-text-secondary hover:text-text-primary transition-all duration-200 text-xs font-mono shadow-sm"
          >
            <Search className="w-3.5 h-3.5 text-accent-primary" />
            <span className="hidden md:inline">Search</span>
            <kbd className="hidden sm:inline px-1.5 py-0.5 rounded bg-bg-card border border-border-custom text-[10px] text-text-secondary font-sans font-medium">
              ⌘K
            </kbd>
          </button>

          {/* Theme Switcher Toggle */}
          <ThemeToggle />

          {/* CTA Link */}
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-accent-primary hover:bg-accent-hover text-white transition-all duration-200 shadow-sm"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu hamburger toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile navigation menu"
            className="xl:hidden p-2 rounded-full bg-bg-elevated border border-border-custom text-text-secondary hover:text-text-primary focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden mt-3 max-w-sm mx-auto p-4 rounded-3xl bg-bg-card border border-border-custom shadow-2xl backdrop-blur-xl pointer-events-auto"
          >
            <div className="flex flex-col gap-1.5 max-h-[75vh] overflow-y-auto">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider text-text-secondary hover:text-text-primary hover:bg-bg-elevated transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-accent-primary">→</span>
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 w-full py-2.5 rounded-xl bg-accent-primary hover:bg-accent-hover text-white text-center text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                Let&apos;s Build
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
