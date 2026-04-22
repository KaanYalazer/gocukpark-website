"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Gündüz moduna geç" : "Gece moduna geç"}
      className="relative w-9 h-9 rounded-full flex items-center justify-center
        bg-surface-container-high border border-outline-variant
        text-on-surface-variant
        hover:bg-surface-container-highest hover:text-on-surface hover:border-outline
        active:scale-95 transition-all duration-200 overflow-hidden"
    >
      {mounted && (
        <span
          key={theme}
          className="material-symbols-outlined select-none animate-spin-once"
          style={{ fontSize: 18, fontVariationSettings: "'FILL' 0, 'wght' 300" }}
        >
          {isDark ? "light_mode" : "dark_mode"}
        </span>
      )}
    </button>
  );
}
