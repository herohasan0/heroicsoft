import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // resolvedTheme gives us the actual theme being used (accounting for system preference)
  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    // Only toggle if resolvedTheme is available
    if (!resolvedTheme) return;
    // Explicitly set to light or dark (not system)
    setTheme(isDark ? "light" : "dark");
  };

  // Don't render button until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <div className="w-9 h-9" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-9 h-9 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center cursor-pointer z-50"
      aria-label="Toggle theme"
      suppressHydrationWarning
    >
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 0 : 1,
          rotate: isDark ? 90 : 0,
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
        className="absolute pointer-events-none"
      >
        <Sun className="h-5 w-5 text-slate-900 dark:text-slate-100" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          rotate: isDark ? 0 : -90,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute pointer-events-none"
      >
        <Moon className="h-5 w-5 text-slate-900 dark:text-slate-100" />
      </motion.div>
    </button>
  );
}
