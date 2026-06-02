"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, Play, RefreshCw } from "lucide-react";
import { TERMINAL_SEQUENCES } from "@/lib/constants";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import SectionLabel from "../shared/SectionLabel";
import AmbientOrb from "../shared/AmbientOrb";

export default function AITerminalSection() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeSequence = TERMINAL_SEQUENCES[activeTabIdx];

  // Typing animation hooks linked to the selected sequence
  const { displayedLines, currentTyped, resetAnimation } = useTypingAnimation(
    activeSequence.commands,
    true
  );

  // Trigger animation reset whenever the user changes the active sequence tab
  useEffect(() => {
    resetAnimation();
  }, [activeTabIdx]);

  return (
    <section
      id="terminal"
      className="relative min-h-screen py-24 px-6 sm:px-12 md:px-24 bg-bg-base overflow-hidden"
    >
      {/* Background orbs */}
      <AmbientOrb className="top-1/4 left-1/4 bg-accent-primary/5" duration={18} />

      <div className="relative max-w-4xl mx-auto z-10 flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-xl mx-auto">
          <SectionLabel label="06 / Code Showcase" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-text-primary uppercase">
            Systems Console
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-body">
            Interact with simulated workflows mapping live client deploys, agentic RAG querying pipelines, real-time WebSockets connections, and production api health checks.
          </p>
        </div>

        {/* Console Container with Tab Switcher */}
        <div className="flex flex-col gap-4">
          
          {/* Tab Switcher Buttons */}
          <div className="flex flex-wrap gap-2 justify-center select-none">
            {TERMINAL_SEQUENCES.map((seq, idx) => {
              const isActive = idx === activeTabIdx;
              return (
                <button
                  key={seq.tab}
                  onClick={() => setActiveTabIdx(idx)}
                  className={`px-4 py-2 rounded-lg font-mono text-[11px] tracking-wider uppercase border transition-all duration-300 ${
                    isActive
                      ? "bg-accent-primary/10 border-accent-primary text-text-primary shadow-[0_0_15px_rgba(200,67,10,0.15)]"
                      : "bg-bg-card/40 border-border-custom/40 text-text-secondary/60 hover:text-text-primary hover:border-border-custom"
                  }`}
                >
                  {seq.tab}
                </button>
              );
            })}
          </div>

          {/* Macbook style terminal panel */}
          <div className="w-full rounded-2xl overflow-hidden bg-bg-card border border-border-custom/50 shadow-2xl flex flex-col font-mono text-[13px] relative max-w-3xl mx-auto">
            {/* Header Chrome */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#1B1109] border-b border-border-custom/40 select-none">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-[10px] sm:text-[11px] text-text-secondary/40 font-semibold tracking-widest flex items-center gap-1.5 uppercase">
                <TerminalIcon className="w-3.5 h-3.5 text-accent-primary" />
                {activeSequence.identity}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={resetAnimation}
                  className="p-1 rounded bg-[#24160D] border border-border-custom/40 text-text-secondary/40 hover:text-accent-primary hover:border-accent-primary/30 transition-colors"
                  title="Rerun sequence"
                >
                  <RefreshCw className="w-3 h-3" />
                </button>
                <div className="flex items-center gap-1.5 pl-1.5 border-l border-border-custom/30">
                  <span className="w-2 h-2 rounded-full bg-[#27c93f] animate-pulse" />
                  <span className="text-[9px] text-[#27c93f] font-bold tracking-wider uppercase">Live</span>
                </div>
              </div>
            </div>

            {/* Terminal Window Output */}
            <div className="h-[280px] p-6 flex flex-col overflow-y-auto scrollbar-thin text-text-secondary/90 leading-relaxed space-y-2 bg-[#140D07]/95">
              <AnimatePresence mode="popLayout">
                {displayedLines.map((line, idx) => {
                  const isCommand = line.startsWith("$");
                  const isSuccess = line.includes("LIVE") || line.includes("✓") || line.includes('"status": "ok"');
                  const isPrompt = line.includes("›");

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className={`${
                        isCommand
                          ? "text-text-primary font-bold"
                          : isSuccess
                          ? "text-[#27c93f] font-medium"
                          : isPrompt
                          ? "text-accent-hover"
                          : "text-text-secondary/60"
                      }`}
                    >
                      {line}
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {/* Cursor Command Prompt Line */}
              <div className="flex items-center text-text-primary">
                <span className="text-accent-primary mr-2 font-extrabold select-none">$</span>
                <span>{currentTyped}</span>
                <span className="w-2 h-4 bg-accent-primary ml-0.5 animate-pulse" />
              </div>
            </div>
            
            {/* Terminal status bar */}
            <div className="flex items-center justify-between px-5 py-2 bg-[#1B1109] border-t border-border-custom/30 text-[10px] text-text-secondary/30 select-none">
              <span>80 Columns Max</span>
              <span>UTF-8 Encoding</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
