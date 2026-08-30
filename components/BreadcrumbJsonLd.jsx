"use client";

import { usePathname } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { CASE_STUDIES } from "@/lib/site";
import { STATIC_ROUTES } from "@/lib/routes";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

function labelForPath(pathname) {
  if (pathname === "/") return "Home";

  const staticMatch = STATIC_ROUTES.find((route) => route.path === pathname);
  if (staticMatch) return staticMatch.label;

  if (pathname.startsWith("/case-studies/")) {
    const slug = pathname.replace("/case-studies/", "");
    const study = CASE_STUDIES.find((item) => item.slug === slug);
    return study?.title || "Case Study";
  }

  return pathname
    .split("/")
    .filter(Boolean)
    .map((part) => part.replace(/-/g, " "))
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" / ");
}

export default function BreadcrumbJsonLd() {
  const pathname = usePathname() || "/";

  if (pathname === "/" || pathname.startsWith("/api")) return null;

  const crumbs = [{ name: "Home", path: "/" }];

  if (pathname.startsWith("/case-studies")) {
    crumbs.push({ name: "Case Studies", path: "/case-studies" });
    if (pathname !== "/case-studies") {
      crumbs.push({ name: labelForPath(pathname), path: pathname });
    }
  } else {
    crumbs.push({ name: labelForPath(pathname), path: pathname });
  }

  return <JsonLd data={buildBreadcrumbJsonLd(crumbs)} />;
}
