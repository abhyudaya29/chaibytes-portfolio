"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Navigation, ExternalLink, Mail, FileText, CornerDownLeft } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

interface CommandPaletteProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function CommandPalette({ isOpen, setIsOpen }: CommandPaletteProps) {
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Lock scroll and focus search when palette opens
  useEffect(() => {
    if (isOpen) {
      setSearch("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const items = [
    {
      id: "nav-home",
      title: "Go to Home",
      category: "Navigation",
      icon: <Navigation className="w-3.5 h-3.5 text-accent-primary" />,
      action: () => scrollToSection("hero"),
    },
    {
      id: "nav-about",
      title: "Go to About",
      category: "Navigation",
      icon: <Navigation className="w-3.5 h-3.5 text-accent-primary" />,
      action: () => scrollToSection("about"),
    },
    {
      id: "nav-experience",
      title: "Go to Experience",
      category: "Navigation",
      icon: <Navigation className="w-3.5 h-3.5 text-accent-primary" />,
      action: () => scrollToSection("experience"),
    },
    {
      id: "nav-projects",
      title: "Go to Projects",
      category: "Navigation",
      icon: <Navigation className="w-3.5 h-3.5 text-accent-primary" />,
      action: () => scrollToSection("projects"),
    },
    {
      id: "nav-skills",
      title: "Go to Skills",
      category: "Navigation",
      icon: <Navigation className="w-3.5 h-3.5 text-accent-primary" />,
      action: () => scrollToSection("skills"),
    },
    {
      id: "nav-terminal",
      title: "Go to AI Showcase",
      category: "Navigation",
      icon: <Navigation className="w-3.5 h-3.5 text-accent-primary" />,
      action: () => scrollToSection("terminal"),
    },
    {
      id: "nav-blog",
      title: "Go to Blog",
      category: "Navigation",
      icon: <Navigation className="w-3.5 h-3.5 text-accent-primary" />,
      action: () => { window.location.href = "/blog"; },
    },
    {
      id: "nav-freelance",
      title: "Go to Freelance",
      category: "Navigation",
      icon: <Navigation className="w-3.5 h-3.5 text-accent-primary" />,
      action: () => scrollToSection("freelance"),
    },
    {
      id: "nav-contact",
      title: "Go to Contact",
      category: "Navigation",
      icon: <Navigation className="w-3.5 h-3.5 text-accent-primary" />,
      action: () => scrollToSection("contact"),
    },
    {
      id: "social-github",
      title: "GitHub Profile ↗",
      category: "Socials",
      icon: <ExternalLink className="w-3.5 h-3.5 text-text-secondary" />,
      action: () => window.open(PERSONAL_INFO.github, "_blank"),
    },
    {
      id: "social-linkedin",
      title: "LinkedIn Profile ↗",
      category: "Socials",
      icon: <ExternalLink className="w-3.5 h-3.5 text-text-secondary" />,
      action: () => window.open(PERSONAL_INFO.linkedin, "_blank"),
    },
    {
      id: "social-twitter",
      title: "Twitter / X Profile ↗",
      category: "Socials",
      icon: <ExternalLink className="w-3.5 h-3.5 text-text-secondary" />,
      action: () => window.open(PERSONAL_INFO.twitter, "_blank"),
    },
    {
      id: "action-email",
      title: `Send Email (${PERSONAL_INFO.email})`,
      category: "Actions",
      icon: <Mail className="w-3.5 h-3.5 text-text-secondary" />,
      action: () => window.open(`mailto:${PERSONAL_INFO.email}`, "_self"),
    },
    {
      id: "action-resume",
      title: "Download Resume",
      category: "Actions",
      icon: <FileText className="w-3.5 h-3.5 text-text-secondary" />,
      action: () => window.open(PERSONAL_INFO.resumeUrl, "_blank"),
    },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Small offset for fixed navbar
      const navbarOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Filter items based on search query
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (selectedIndex >= filteredItems.length && filteredItems.length > 0) {
      setSelectedIndex(filteredItems.length - 1);
    }
  }, [filteredItems, selectedIndex]);

  // Handle keyboard arrow navigation and selection
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (filteredItems.length > 0 ? (prev + 1) % filteredItems.length : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filteredItems.length > 0 ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex]);

  // Scroll matching element into visible viewport scroll view
  useEffect(() => {
    const activeEl = listRef.current?.querySelector(".active-item");
    if (activeEl) {
      activeEl.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-[15vh]">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-[#0c0805]/75 backdrop-blur-[8px]"
          />

          {/* Panel Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg mx-4 overflow-hidden rounded-2xl bg-[#1E150D] border border-border-custom shadow-[0_0_50px_rgba(200,67,10,0.25)] flex flex-col z-10"
          >
            {/* Top Border Highlight */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-accent-primary to-transparent" />

            {/* Input Header */}
            <div className="flex items-center gap-3 px-4 border-b border-border-custom/40 py-3.5">
              <Search className="w-4 h-4 text-text-secondary/60 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Type a command or search..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedIndex(0);
                }}
                className="w-full bg-transparent border-0 outline-none text-text-primary placeholder-text-secondary/40 text-[13px] py-1 focus:ring-0 font-body"
              />
              <span className="font-mono text-[9px] text-text-secondary/40 bg-bg-base px-2 py-0.5 rounded border border-border-custom/40 shrink-0 select-none">
                ESC
              </span>
            </div>

            {/* Content List */}
            <div
              ref={listRef}
              className="max-h-[300px] overflow-y-auto p-2 flex flex-col gap-1 select-none"
            >
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-[13px] text-text-secondary/50 font-body">
                  No commands found. Try another query.
                </div>
              ) : (
                Object.entries(
                  filteredItems.reduce((acc, item) => {
                    if (!acc[item.category]) acc[item.category] = [];
                    acc[item.category].push(item);
                    return acc;
                  }, {} as Record<string, typeof filteredItems>)
                ).map(([category, catItems]) => (
                  <div key={category} className="flex flex-col">
                    {/* Category Label */}
                    <span className="font-mono text-[9px] tracking-widest text-text-secondary/30 px-3 py-1.5 uppercase select-none">
                      {category}
                    </span>

                    {/* Category Items */}
                    {catItems.map((item) => {
                      const globalIndex = filteredItems.findIndex((fi) => fi.id === item.id);
                      const isActive = globalIndex === selectedIndex;

                      return (
                        <div
                          key={item.id}
                          onMouseEnter={() => setSelectedIndex(globalIndex)}
                          onClick={item.action}
                          className={`active-item flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer transition-all duration-150 ${
                            isActive
                              ? "bg-accent-primary/10 border border-accent-primary/20 text-text-primary"
                              : "border border-transparent text-text-secondary hover:text-text-primary"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p-1.5 rounded-lg transition-colors ${isActive ? "bg-accent-primary/20" : "bg-bg-base/60"}`}>
                              {item.icon}
                            </div>
                            <span className="text-[13px] font-medium font-body">{item.title}</span>
                          </div>
                          {isActive && (
                            <div className="flex items-center gap-1 text-[9px] font-mono text-accent-primary shrink-0 opacity-80">
                              <span>Execute</span>
                              <CornerDownLeft className="w-3 h-3" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))
              )}
            </div>

            {/* Command palette hint footer */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-bg-base/60 border-t border-border-custom/30 text-[9px] font-mono text-text-secondary/40">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="bg-[#24160D] border border-border-custom px-1 py-0.5 rounded">↑↓</span> Move
                </span>
                <span className="flex items-center gap-1">
                  <span className="bg-[#24160D] border border-border-custom px-1.5 py-0.5 rounded">Enter</span> Run
                </span>
              </div>
              <div>Raycast Console</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
