import { THEMES } from "@/config/theme";
import { cn } from "@/lib/utils";
import type { ThemeName } from "@/types";

/** Small interactive theme preview row for faster theme selection. */
export function ThemePreview({
  activeTheme,
  onSelect,
}: {
  activeTheme: ThemeName;
  onSelect: (theme: ThemeName) => void;
}) {
  return (
    <ul className="grid grid-cols-5 gap-2">
      {THEMES.map((item) => (
        <li key={item.id}>
          <button
            type="button"
            onClick={() => onSelect(item.id)}
            aria-label={`Use ${item.label} theme`}
            aria-pressed={activeTheme === item.id}
            className={cn(
              "group w-full border border-border p-1.5 text-left transition-colors hover:border-primary",
              activeTheme === item.id && "border-primary",
            )}
          >
            <span className="mb-1 block h-1.5 w-full" style={{ background: item.preview[0] }} />
            <span className="mb-1 block h-1.5 w-full" style={{ background: item.preview[1] }} />
            <span className="block h-1.5 w-full" style={{ background: item.preview[2] }} />
          </button>
        </li>
      ))}
    </ul>
  );
}
