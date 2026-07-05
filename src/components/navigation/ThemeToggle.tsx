"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full bg-bg-base/60 border border-border-custom opacity-20 shrink-0" />
    );
  }

  const isLight = resolvedTheme === "light";

  return (
    <button
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="flex items-center justify-center p-2.5 rounded-full bg-bg-base/60 hover:bg-accent-primary/10 border border-border-custom hover:border-accent-primary/40 text-text-secondary hover:text-accent-primary transition-all duration-300 cursor-pointer shrink-0"
      title={`Switch to ${isLight ? "Dark" : "Light"} Mode`}
    >
      {isLight ? (
        <Moon className="w-4 h-4 text-text-secondary hover:text-accent-primary shrink-0" />
      ) : (
        <Sun className="w-4 h-4 text-text-secondary hover:text-accent-primary shrink-0" />
      )}
    </button>
  );
}
