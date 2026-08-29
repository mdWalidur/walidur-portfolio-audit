import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export const THEMES = [
  { id: "obsidian", label: "Obsidian", hint: "Dark, premium, technical" },
  { id: "spectral", label: "Spectral", hint: "Atmospheric and refined" },
  { id: "cream", label: "Cream", hint: "Warm editorial light" },
  { id: "chocolate", label: "Chocolate", hint: "Rich and warm" },
  { id: "graphite", label: "Graphite", hint: "Neutral and understated" },
] as const;

export type ThemeName = (typeof THEMES)[number]["id"];

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

function isTheme(value: string | null): value is ThemeName {
  return !!value && THEMES.some((t) => t.id === value);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(DEFAULT_THEME);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isTheme(stored)) setThemeState(stored);
    } catch {
      /* storage unavailable — keep the default theme */
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset['theme'] = theme;
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* non-fatal */
    }
  }, [theme]);

  const setTheme = useCallback((next: ThemeName) => setThemeState(next), []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
