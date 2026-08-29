import { Check, Palette } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { THEMES, useTheme } from "./theme-provider";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const active = THEMES.find((t) => t.id === theme);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={`Change theme. Current theme: ${active?.label ?? "Obsidian"}`}
        className="inline-flex min-h-11 items-center gap-2 border border-border px-3 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
      >
        <Palette className="size-4 shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline">{active?.label}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-60 rounded-none">
        <DropdownMenuLabel className="label-eyebrow text-muted-foreground">
          Theme
        </DropdownMenuLabel>
        {THEMES.map((item) => (
          <DropdownMenuItem
            key={item.id}
            onSelect={() => setTheme(item.id)}
            className="flex items-start gap-2 rounded-none"
          >
            <Check
              className={`mt-0.5 size-4 shrink-0 ${theme === item.id ? "opacity-100" : "opacity-0"}`}
              aria-hidden="true"
            />
            <span className="min-w-0">
              <span className="block text-sm">{item.label}</span>
              <span className="block text-xs text-muted-foreground">{item.hint}</span>
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
