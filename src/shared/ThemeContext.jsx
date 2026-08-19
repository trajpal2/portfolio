import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext(null);
const STORAGE_KEY = "portfolio-theme-pref";

function getSystemTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function readStoredPref() {
  if (typeof window === "undefined") return "system";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark" || stored === "system") return stored;
  // Migrate legacy key
  const legacy = localStorage.getItem("portfolio-theme");
  if (legacy === "light" || legacy === "dark") return legacy;
  return "system";
}

function resolveTheme(pref) {
  return pref === "system" ? getSystemTheme() : pref;
}

function applyTheme(pref, theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  root.setAttribute("data-theme-pref", pref);
  root.style.colorScheme = theme;

  let meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "theme-color");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", theme === "dark" ? "#0b1220" : "#f3f6f8");
}

export function ThemeProvider({ children }) {
  const [preference, setPreference] = useState(readStoredPref);
  const [theme, setTheme] = useState(() => resolveTheme(readStoredPref()));

  useEffect(() => {
    const resolved = resolveTheme(preference);
    setTheme(resolved);
    applyTheme(preference, resolved);
    localStorage.setItem(STORAGE_KEY, preference);
    localStorage.removeItem("portfolio-theme");
  }, [preference]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (preference === "system") {
        const resolved = getSystemTheme();
        setTheme(resolved);
        applyTheme("system", resolved);
      }
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [preference]);

  const cycleTheme = useCallback(() => {
    setPreference((prev) => {
      if (prev === "system") return "light";
      if (prev === "light") return "dark";
      return "system";
    });
  }, []);

  const value = useMemo(
    () => ({
      preference,
      theme,
      isDark: theme === "dark",
      isSystem: preference === "system",
      setPreference,
      cycleTheme,
      toggleTheme: cycleTheme,
    }),
    [preference, theme, cycleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
