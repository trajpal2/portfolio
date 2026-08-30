import { SITE } from "@/lib/site";
import { getSiteUrl } from "@/lib/routes";

export function absoluteUrl(path = "/") {
  const base = getSiteUrl().replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    jobTitle: SITE.title,
    description: SITE.lead,
    url: absoluteUrl("/"),
    email: SITE.email,
    telephone: SITE.phone,
    sameAs: [SITE.linkedin, SITE.github],
    image: absoluteUrl("/images/architecture-hero.png"),
    knowsAbout: [
      "Full Stack Engineering",
      "Software Architecture",
      "AI Systems",
      "Cloud Platforms",
      "Business Automation",
      "React",
      "Next.js",
      "Node.js",
    ],
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${SITE.name} — Portfolio`,
    alternateName: SITE.shortName,
    url: absoluteUrl("/"),
    description: SITE.lead,
    inLanguage: "en-US",
    publisher: {
      "@type": "Person",
      name: SITE.name,
      url: absoluteUrl("/"),
    },
  };
}

export function buildProfessionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${SITE.name} — ${SITE.title}`,
    description: SITE.lead,
    url: absoluteUrl("/"),
    image: absoluteUrl("/images/architecture-hero.png"),
    telephone: SITE.phone,
    email: SITE.email,
    areaServed: "Worldwide",
    sameAs: [SITE.linkedin, SITE.github],
    founder: {
      "@type": "Person",
      name: SITE.name,
    },
  };
}

/**
 * @param {{ name: string, path: string }[]} crumbs
 */
export function buildBreadcrumbJsonLd(crumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function buildCaseStudyJsonLd({ title, description, path, dateModified }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    dateModified: dateModified || new Date().toISOString(),
    author: {
      "@type": "Person",
      name: SITE.name,
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Person",
      name: SITE.name,
      url: absoluteUrl("/"),
    },
    image: absoluteUrl("/images/architecture-hero.png"),
  };
}

/** Default Next.js metadata extras for Google indexing. */
export function getDefaultRobots() {
  return {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  };
}

/**
 * Build Next.js Metadata for a page — title, description, keywords,
 * canonical, Open Graph and Twitter tags optimized for Google Search.
 *
 * @param {{
 *   title: string,
 *   description: string,
 *   path: string,
 *   keywords?: string[],
 *   ogType?: string,
 * }} config
 */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogType = "website",
}) {
  const url = absoluteUrl(path);
  // absolute avoids layout title.template doubling ("… | Name | Name")
  const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;

  return {
    title: {
      absolute: fullTitle,
    },
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    robots: getDefaultRobots(),
    openGraph: {
      type: ogType,
      locale: "en_US",
      url,
      siteName: SITE.name,
      title: fullTitle,
      description,
      images: [
        {
          url: "/images/architecture-hero.png",
          width: 1600,
          height: 900,
          alt: `${SITE.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/images/architecture-hero.png"],
    },
  };
}
