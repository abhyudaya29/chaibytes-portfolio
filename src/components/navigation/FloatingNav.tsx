"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Layers, Code, Sparkles, BookOpen, Mail, Workflow } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface FloatingNavProps {
  onSearchClick: () => void;
}

const NAV_ITEMS = [
  { label: "Home", href: "#hero", icon: Home },
  { label: "Services", href: "#services", icon: Layers },
  { label: "Products", href: "#projects", icon: Code },
  { label: "Workflow", href: "#workflow", icon: Workflow },
  { label: "About", href: "#about", icon: Sparkles },
  { label: "Blog", href: "/blog", icon: BookOpen },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function FloatingNav({ onSearchClick }: FloatingNavProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
      const sections = NAV_ITEMS.filter((item) => item.href.startsWith("#")).map(
        (item) => item.href.slice(1)
      );

      const scrollPosition = window.scrollY + 250;
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
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
        >
          <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-bg-card/90 backdrop-blur-xl border border-border-custom shadow-2xl">
            
            {/* Left brand indicator with Cup icon */}
            <a href="#hero" className="flex items-center gap-1.5 pr-2 border-r border-border-custom/60 group">
              <div className="w-6 h-6 rounded-lg bg-bg-elevated border border-border-custom p-0.5 overflow-hidden flex items-center justify-center">
                <Image
                  src="/brand/logo-icon.png"
                  alt="ChaiBytes Icon"
                  width={22}
                  height={22}
                  className="object-contain"
                />
              </div>
            </a>

            {/* Nav items */}
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isLinkActive = item.href.startsWith("#")
                ? activeSection === item.href.slice(1)
                : false;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative p-2 rounded-full transition-colors flex items-center justify-center group ${
                    isLinkActive
                      ? "text-accent-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                  aria-label={item.label}
                >
                  <Icon className="w-4 h-4" />
                  <span className="sr-only">{item.label}</span>

                  {/* Tooltip */}
                  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-bg-elevated border border-border-custom text-[10px] font-mono text-text-primary opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
                    {item.label}
                  </span>

                  {isLinkActive && (
                    <motion.div
                      layoutId="activeFloatingIndicator"
                      className="absolute inset-0 bg-accent-primary/10 rounded-full -z-10 border border-accent-primary/20"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}

            {/* Quick theme toggle */}
            <div className="pl-1 border-l border-border-custom/60">
              <ThemeToggle />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
