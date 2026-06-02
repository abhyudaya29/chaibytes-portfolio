"use client";
import React from "react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { TERMINAL_SEQUENCES } from "@/lib/constants";

export default function HeroTerminal() {
  const sequence = TERMINAL_SEQUENCES[0]; // Deploy Pipeline
  const { displayedLines, currentTyped } = useTypingAnimation(sequence.commands);

  return (
    <div className="w-full rounded-xl overflow-hidden bg-bg-base/70 border border-border-custom/50 shadow-2xl flex flex-col font-mono text-[12px]">
      {/* Window Header Chrome */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#1D130A] border-b border-border-custom/30">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <div className="text-[10px] text-text-secondary/50 font-medium tracking-wide">
          {sequence.identity}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#27c93f] animate-pulse" />
          <span className="text-[9px] text-[#27c93f] font-semibold tracking-wider uppercase">Live</span>
        </div>
      </div>

      {/* Terminal Content Area */}
      <div className="h-[210px] p-4 flex flex-col overflow-y-auto scrollbar-none select-none text-text-secondary/90 leading-relaxed space-y-1.5 bg-[#140D07]/90 backdrop-blur-md">
        {displayedLines.map((line, idx) => {
          const isCommand = line.startsWith("$");
          const isSuccess = line.includes("LIVE") || line.includes("✓");
          const isPrompt = line.includes("›");

          return (
            <div
              key={idx}
              className={`${
                isCommand
                  ? "text-text-primary font-semibold"
                  : isSuccess
                  ? "text-[#27c93f]"
                  : isPrompt
                  ? "text-accent-primary/90"
                  : "text-text-secondary/70"
              }`}
            >
              {line}
            </div>
          );
        })}

        {/* Cursor Prompt line */}
        <div className="flex items-center text-text-primary">
          <span className="text-accent-primary mr-2 font-bold">$</span>
          <span>{currentTyped}</span>
          <span className="w-1.5 h-3.5 bg-accent-primary ml-0.5 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
