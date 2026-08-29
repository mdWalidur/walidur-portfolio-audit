import type { ThemeDefinition } from "@/types";

export const THEMES: readonly ThemeDefinition[] = [
  {
    id: "obsidian",
    label: "Obsidian",
    hint: "Dark, premium, technical",
    preview: ["oklch(0.16 0.004 250)", "oklch(0.2 0.005 250)", "oklch(0.84 0.17 118)"],
  },
  {
    id: "spectral",
    label: "Spectral",
    hint: "Atmospheric and refined",
    preview: ["oklch(0.17 0.03 268)", "oklch(0.21 0.035 268)", "oklch(0.74 0.14 268)"],
  },
  {
    id: "cream",
    label: "Cream",
    hint: "Warm editorial light",
    preview: ["oklch(0.96 0.014 88)", "oklch(0.93 0.016 88)", "oklch(0.45 0.11 44)"],
  },
  {
    id: "chocolate",
    label: "Chocolate",
    hint: "Rich and warm",
    preview: ["oklch(0.19 0.022 48)", "oklch(0.23 0.026 48)", "oklch(0.79 0.12 72)"],
  },
  {
    id: "graphite",
    label: "Graphite",
    hint: "Neutral and understated",
    preview: ["oklch(0.24 0 0)", "oklch(0.28 0 0)", "oklch(0.9 0 0)"],
  },
] as const;
