"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link?: string;
    icon?: any;
    tags?: string[];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 gap-6",
        className
      )}
    >
      {items.map((item, idx) => {
        const IconComponent = item.icon;
        return (
          <div
            key={item?.title || idx}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-accent-primary/10 block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="rounded-2xl h-full w-full p-6 overflow-hidden bg-bg-card border border-border-custom relative z-20 transition-all duration-300 group-hover:border-accent-primary/40 shadow-sm">
              <div className="relative z-50">
                {IconComponent && (
                  <div className="w-12 h-12 rounded-xl bg-bg-elevated border border-border-custom flex items-center justify-center text-accent-primary mb-5 group-hover:scale-105 group-hover:bg-accent-primary group-hover:text-white transition-all duration-300 shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>
                )}
                <h4 className="text-text-primary font-heading font-bold tracking-tight text-xl mb-2">
                  {item.title}
                </h4>
                <p className="text-text-secondary tracking-wide leading-relaxed text-sm font-body">
                  {item.description}
                </p>
                {item.tags && (
                  <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-border-custom/50">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-bg-elevated border border-border-custom text-text-secondary group-hover:text-accent-primary transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
