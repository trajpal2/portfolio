import { CASE_STUDIES, NAV_LINKS } from "@/lib/site";
import STATIC_ROUTES from "@/lib/static-routes.json";

export { STATIC_ROUTES };

export function getCaseStudyRoutes() {
  return CASE_STUDIES.map((study) => ({
    path: `/case-studies/${study.slug}`,
    label: study.title,
    priority: 0.8,
  }));
}

/** All indexable public routes (static pages + case studies). */
export function getSitemapRoutes() {
  return [...STATIC_ROUTES, ...getCaseStudyRoutes()];
}

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://tushant.rajpal.dev";
}

/** Nav paths for cross-checks (skills is redirect-only and not in sitemap). */
export function getNavPaths() {
  return NAV_LINKS.map((link) => link.to);
}
