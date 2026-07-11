"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Code, Terminal, Mail, Search, BookOpen, Layers, Users } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface FloatingNavProps {
  onSearchClick: () => void;
}

const NAV_ITEMS = [
  { label: "Home", href: "#hero", icon: Home },
  { label: "Freelance", href: "#freelance", icon: Layers },
  { label: "Products", href: "#projects", icon: Code },
  { label: "Team", href: "#team", icon: Users },
  { label: "About", href: "#about", icon: User },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Skills", href: "#skills", icon: Terminal },
  { label: "Blog", href: "/blog", icon: BookOpen },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function FloatingNav({ onSearchClick }: FloatingNavProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Monitor scroll to highlight active section and show/hide navbar dynamically
  useEffect(() => {

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Auto show/hide navbar on scroll direction
      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY) {
          setVisible(false); // scrolling down
        } else {
          setVisible(true); // scrolling up
        }
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Section spy
      const scrollPosition = currentScrollY + 200;
      for (const item of NAV_ITEMS) {
        if (item.href.startsWith("/")) continue;
        const id = item.href.slice(1);
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/")) {
      // Let standard browser click routing take place for paths
      return;
    }
    
    e.preventDefault();
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
      setActiveSection(targetId);
    } else {
      // Redirect to home page section
      window.location.href = "/" + href;
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: 50, opacity: 0, x: "-50%" }}
          animate={{ y: 0, opacity: 1, x: "-50%" }}
          exit={{ y: 50, opacity: 0, x: "-50%" }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-1/2 z-[999] flex items-center gap-1.5 p-2 rounded-full glass-panel border border-border-custom bg-bg-card/70 shadow-[0_10px_30px_rgba(0,0,0,0.5)] select-none shrink-0 max-w-[95vw] md:max-w-none"
        >
          {/* Logo container */}
          <div className="flex items-center justify-center pl-2.5 pr-0.5 shrink-0 select-none">
            <Image
              src="/logo.jpg"
              alt="ChaiBytes Logo"
              width={20}
              height={20}
              className="rounded-full border border-border-custom/50 object-cover w-[20px] h-[20px]"
            />
          </div>
          <div className="w-[1px] h-6 bg-border-custom self-center mx-1 shrink-0" />

          {/* Horizontally scrollable container on mobile */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar min-w-0 flex-1 md:flex-initial">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === (item.href.startsWith("/") ? item.href.slice(1) : item.href.slice(1));

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative flex items-center justify-center p-2.5 sm:px-4 sm:py-2 rounded-full text-xs font-mono font-medium tracking-wide uppercase transition-all duration-300 group shrink-0"
                >
                  {/* Background active highlight tag */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavTab"
                      className="absolute inset-0 rounded-full bg-accent-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  <span className={`relative z-10 flex items-center gap-2 ${
                    isActive ? "text-text-primary" : "text-text-secondary/80 group-hover:text-text-primary"
                  }`}>
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="hidden lg:inline">{item.label}</span>
                  </span>
                </a>
              );
            })}
          </div>

          {/* Divider line */}
          <div className="w-[1px] h-6 bg-border-custom self-center mx-1 shrink-0" />

          {/* Theme switcher */}
          <ThemeToggle />

          {/* Divider line */}
          <div className="w-[1px] h-6 bg-border-custom self-center mx-1 shrink-0" />

          {/* Search Trigger Button (Command Palette) */}
          <button
            onClick={onSearchClick}
            className="flex items-center gap-1.5 p-2.5 sm:px-4 sm:py-2 rounded-full bg-bg-base/60 hover:bg-accent-primary/10 border border-border-custom hover:border-accent-primary/40 text-text-secondary hover:text-accent-primary transition-all duration-300 font-mono text-xs cursor-pointer group shrink-0"
            title="Open Console (⌘K)"
          >
            <Search className="w-4 h-4 text-text-secondary group-hover:text-accent-primary shrink-0" />
            <kbd className="hidden sm:inline-block font-mono text-[9px] opacity-60 bg-bg-card px-1 py-0.2 rounded border border-border-custom shrink-0">
              ⌘K
            </kbd>
          </button>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
