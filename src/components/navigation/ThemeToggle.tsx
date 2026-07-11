"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full bg-bg-base/30 border border-border-custom/50 shrink-0" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2.5 rounded-full bg-bg-base/60 hover:bg-accent-primary/10 border border-border-custom hover:border-accent-primary/45 text-text-secondary hover:text-accent-primary transition-all duration-300 cursor-pointer flex items-center justify-center shrink-0"
      aria-label="Toggle Theme"
      title={isDark ? "Activate Light Mode" : "Activate Dark Mode"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-text-secondary hover:text-accent-primary shrink-0" />
      ) : (
        <Moon className="w-4 h-4 text-text-secondary hover:text-accent-primary shrink-0" />
      )}
    </button>
  );
}
