import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

import { THEMES } from "@/config/theme";
import { isThemeName } from "@/lib/theme";
import type { ThemeName } from "@/types";

const STORAGE_KEY = "walidur-portfolio-theme";
const DEFAULT_THEME: ThemeName = "obsidian";

type ThemeContextValue = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: DEFAULT_THEME,
  setTheme: () => {},
});

/** Provides app theme state, persistence, and root html dataset updates. */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(DEFAULT_THEME);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isThemeName(stored)) setThemeState(stored);
    } catch {
      /* storage unavailable — keep the default theme */
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset["theme"] = theme;
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* non-fatal */
    }
  }, [theme]);

  const setTheme = useCallback((next: ThemeName) => setThemeState(next), []);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
