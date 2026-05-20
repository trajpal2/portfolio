/**
 * Prefix public asset paths for GitHub Pages project sites (/portfolio).
 * Set NEXT_PUBLIC_BASE_PATH=/portfolio in production, or leave empty for local dev.
 */
export function assetPath(path) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
