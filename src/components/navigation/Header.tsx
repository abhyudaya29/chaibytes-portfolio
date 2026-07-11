"use client";
import React, { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  onSearchClick: () => void;
}

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "Partners", href: "#partners" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Services", href: "#freelance" },
  { label: "Products", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export default function Header({ onSearchClick }: HeaderProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor page scroll to highlight active sections and apply header shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active hash section based on page position
      const scrollPosition = window.scrollY + 100;
      for (const item of NAV_ITEMS) {
        if (item.href.startsWith("#")) {
          const el = document.getElementById(item.href.slice(1));
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(item.href.slice(1));
              break;
            }
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
        className={`max-w-6xl mx-auto px-6 py-2.5 sm:py-3 rounded-full border flex items-center justify-between transition-all duration-300 pointer-events-auto ${
          scrolled
            ? "bg-bg-base/85 backdrop-blur-md border-border-custom/50 shadow-lg"
            : "bg-bg-base/55 backdrop-blur-sm border-border-custom/20"
        }`}
      >
        {/* Left: Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group select-none">
          <img
            src="/logo.jpg"
            alt="ChaiBytes Logo"
            className="w-10 h-10 rounded-2xl object-cover border border-border-custom/30 shadow-sm"
          />
          <span className="font-heading font-extrabold tracking-tight text-base text-text-primary group-hover:text-accent-primary transition-all duration-300">
            Chai<span className="text-accent-primary font-mono font-medium">Bytes</span>
          </span>
        </a>

        {/* Center: Desktop Navigation links */}
        <nav className="hidden xl:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isLinkActive = item.href.startsWith("#")
              ? activeSection === item.href.slice(1)
              : false;

            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors duration-300 ${
                  isLinkActive
                    ? "text-accent-primary"
                    : "text-text-secondary/75 hover:text-text-primary"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Controls (Theme Toggle + Search Console + Mobile Menu Trigger) */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Search Trigger */}
          <button
            onClick={onSearchClick}
            className="flex items-center gap-1.5 p-2 rounded-full xl:px-3.5 xl:py-1.5 bg-bg-elevated/45 hover:bg-accent-primary/10 border border-border-custom hover:border-accent-primary/45 text-text-secondary hover:text-accent-primary transition-all duration-300 font-mono text-xs cursor-pointer group shrink-0"
            title="Open Console (⌘K)"
          >
            <Search className="w-4 h-4 text-text-secondary group-hover:text-accent-primary shrink-0" />
            <kbd className="hidden xl:inline-block font-mono text-[9px] opacity-60 bg-bg-card px-1 py-0.2 rounded border border-border-custom shrink-0">
              ⌘K
            </kbd>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 rounded-full bg-bg-elevated/45 border border-border-custom hover:border-accent-primary/40 text-text-secondary hover:text-accent-primary transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4 shrink-0" />
            ) : (
              <Menu className="w-4 h-4 shrink-0" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden max-w-6xl mx-auto mt-2 rounded-2xl border border-border-custom/40 bg-bg-base/90 backdrop-blur-lg shadow-lg overflow-hidden pointer-events-auto"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-bold font-heading tracking-widest uppercase text-text-secondary hover:text-accent-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
