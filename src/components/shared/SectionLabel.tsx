import React from "react";

interface SectionLabelProps {
  label: string;
  className?: string;
}

export default function SectionLabel({ label, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] text-accent-primary uppercase ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
      {label}
    </div>
  );
}
