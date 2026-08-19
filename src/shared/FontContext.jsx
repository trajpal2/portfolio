import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const FONT_OPTIONS = [
  {
    id: "times",
    label: "Times New Roman",
    family: '"Times New Roman", Times, serif',
  },
  {
    id: "georgia",
    label: "Georgia",
    family: "Georgia, serif",
  },
  {
    id: "garamond",
    label: "Garamond",
    family: 'Garamond, "Palatino Linotype", Palatino, serif',
  },
  {
    id: "arial",
    label: "Arial",
    family: "Arial, Helvetica, sans-serif",
  },
  {
    id: "verdana",
    label: "Verdana",
    family: "Verdana, Geneva, sans-serif",
  },
  {
    id: "courier",
    label: "Courier New",
    family: '"Courier New", Courier, monospace',
  },
  {
    id: "modern",
    label: "Syne + Figtree",
    family: '"Figtree", sans-serif',
    display: '"Syne", sans-serif',
  },
];

const STORAGE_KEY = "portfolio-font";
const DEFAULT_FONT = "times";
const FontContext = createContext(null);

function isValidFont(id) {
  return FONT_OPTIONS.some((font) => font.id === id);
}

function readStoredFont() {
  if (typeof window === "undefined") return DEFAULT_FONT;
  const stored = localStorage.getItem(STORAGE_KEY);
  return isValidFont(stored) ? stored : DEFAULT_FONT;
}

function applyFont(fontId) {
  const option = FONT_OPTIONS.find((font) => font.id === fontId) || FONT_OPTIONS[0];
  const root = document.documentElement;
  root.setAttribute("data-font", option.id);
  root.style.setProperty("--font-body", option.family);
  root.style.setProperty("--font-display", option.display || option.family);
}

export function FontProvider({ children }) {
  const [fontId, setFontId] = useState(readStoredFont);

  useEffect(() => {
    applyFont(fontId);
    localStorage.setItem(STORAGE_KEY, fontId);
  }, [fontId]);

  const value = useMemo(
    () => ({
      fontId,
      setFontId,
      fonts: FONT_OPTIONS,
      currentFont: FONT_OPTIONS.find((font) => font.id === fontId) || FONT_OPTIONS[0],
    }),
    [fontId]
  );

  return <FontContext.Provider value={value}>{children}</FontContext.Provider>;
}

export function useFont() {
  const ctx = useContext(FontContext);
  if (!ctx) throw new Error("useFont must be used within FontProvider");
  return ctx;
}
