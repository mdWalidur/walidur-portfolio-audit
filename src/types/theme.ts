export type ThemeName = "obsidian" | "spectral" | "cream" | "chocolate" | "graphite";

export interface ThemeDefinition {
  id: ThemeName;
  label: string;
  hint: string;
  preview: readonly [string, string, string];
}
