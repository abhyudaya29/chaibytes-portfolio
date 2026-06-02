"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ProjectCard3DProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function ProjectCard3D({ children, className = "", onClick }: ProjectCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Motion values mapping tilt angles
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Elastic physics configurations
  const springConfig = { damping: 20, stiffness: 220, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    // Compute mouse percentage relative to card boundaries
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(normalizedX);
    y.set(normalizedY);

    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-[1000px] w-full h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative w-full h-full rounded-2xl bg-bg-card/30 border border-border-custom/50 p-6 backdrop-blur-md transition-all duration-300 hover:border-accent-primary/45 overflow-hidden group cursor-pointer ${className}`}
      >
        {/* Spotlight Follow Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-screen"
          style={{
            background: `radial-gradient(200px circle at ${coords.x}px ${coords.y}px, rgba(200, 67, 10, 0.1), transparent 80%)`,
          }}
        />

        {/* Contents Wrapper with 3D Depth translation */}
        <div
          style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
          className="relative h-full flex flex-col justify-between z-10"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
