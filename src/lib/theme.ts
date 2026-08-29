import { THEMES } from "@/config/theme";
import type { ThemeDefinition, ThemeName } from "@/types";

const themeMap = new Map<ThemeName, ThemeDefinition>(THEMES.map((theme) => [theme.id, theme]));

export function getTheme(themeName: ThemeName): ThemeDefinition {
  return themeMap.get(themeName) ?? THEMES[0]!;
}

export function isThemeName(value: string | null): value is ThemeName {
  return !!value && themeMap.has(value as ThemeName);
}
