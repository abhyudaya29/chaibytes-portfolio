"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const [beams, setBeams] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const generated = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: 10 + i * 11,
      delay: i * 0.7,
      duration: 3 + (i % 3) * 1.5,
    }));
    setBeams(generated);
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]",
        className
      )}
    >
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      {beams.map((beam) => (
        <span
          key={beam.id}
          className="absolute top-0 w-px bg-gradient-to-b from-transparent via-accent-primary/40 to-transparent"
          style={{
            left: `${beam.left}%`,
            height: "100%",
            animation: `float ${beam.duration}s ease-in-out infinite`,
            animationDelay: `${beam.delay}s`,
            opacity: 0.35,
          }}
        />
      ))}
    </div>
  );
};
