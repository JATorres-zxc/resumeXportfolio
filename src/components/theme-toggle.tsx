import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative inline-flex h-8 w-16 items-center rounded-full border transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
        isDark ? "border-border bg-muted" : "border-divider bg-surface-subtle"
      }`}
    >
      <span
        className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-background shadow-sm transition-transform duration-300 ${
          isDark ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {isDark ? <Moon className="w-3.5 h-3.5 text-foreground" /> : <Sun className="w-3.5 h-3.5 text-foreground" />}
      </span>
    </button>
  );
};
