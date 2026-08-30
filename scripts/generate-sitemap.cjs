#!/usr/bin/env node
/**
 * Generates public/sitemap.xml from:
 * - lib/static-routes.json (main pages)
 * - lib/site.js CASE_STUDIES slugs
 * - NEXT_PUBLIC_SITE_URL from .env / .env.local (fallback: https://tushant.rajpal.dev)
 *
 * Usage:
 *   npm run sitemap
 *
 * Also runs automatically via predev / prebuild.
 */
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outFile = path.join(root, "public", "sitemap.xml");
const staticRoutesPath = path.join(root, "lib", "static-routes.json");
const sitePath = path.join(root, "lib", "site.js");

function loadEnvFiles() {
  const files = [".env.local", ".env"];
  for (const name of files) {
    const full = path.join(root, name);
    if (!fs.existsSync(full)) continue;
    const text = fs.readFileSync(full, "utf8");
    for (const line of text.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      let value = trimmed.slice(eq + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (process.env[key] === undefined) {
        process.env[key] = value;
      }
    }
  }
}

function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || "https://tushant.rajpal.dev";
  return raw.replace(/\/$/, "");
}

function getCaseStudySlugs() {
  const source = fs.readFileSync(sitePath, "utf8");
  return [...source.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
}

function buildRoutes() {
  const staticRoutes = JSON.parse(fs.readFileSync(staticRoutesPath, "utf8"));
  const caseRoutes = getCaseStudySlugs().map((slug) => ({
    path: `/case-studies/${slug}`,
    priority: 0.8,
  }));
  return [...staticRoutes, ...caseRoutes];
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toLoc(baseUrl, routePath) {
  if (routePath === "/") return `${baseUrl}/`;
  return `${baseUrl}${routePath}`;
}

function generateXml(routes, baseUrl) {
  const lastmod = "2024-02-28T19:34:52.444Z";
  const urls = routes
    .map((route) => {
      const loc = escapeXml(toLoc(baseUrl, route.path));
      const priority = Number(route.priority ?? 0.5).toFixed(1);
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function main() {
  loadEnvFiles();
  const baseUrl = getSiteUrl();
  const routes = buildRoutes();
  const xml = generateXml(routes, baseUrl);

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, xml, "utf8");

  console.log(`sitemap.xml generated → public/sitemap.xml (${routes.length} URLs)`);
  console.log(`base URL: ${baseUrl}`);
}

main();
