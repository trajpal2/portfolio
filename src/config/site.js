/** Site URL for SEO, Open Graph, and sitemap. Override with NEXT_PUBLIC_SITE_URL in .env */
const PRODUCTION_SITE_URL = "https://trajpal2.github.io/portfolio";

export const siteUrl =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL) ||
  (typeof process !== "undefined" && process.env.NODE_ENV === "production"
    ? PRODUCTION_SITE_URL
    : "http://localhost:3000");

export const siteName = "Tushant Rajpal";

export const siteTitle = `${siteName} | Senior AI Engineer & Senior Software Engineer`;

export const siteDescription =
  "Portfolio of Tushant Rajpal — Senior AI Engineer and Senior Software Engineer, AI Architect building RAG systems, Agentic AI, and AI Agents. Full-stack (.NET, Node.js, React, Next.js), cloud-native apps, and enterprise AI solutions.";

export const linkedInUrl = "https://www.linkedin.com/in/trajpal";

export const keywords = [
  "Tushant Rajpal",
  "Senior AI Engineer",
  "Senior Software Engineer",
  "AI Architect",
  "RAG",
  "Retrieval Augmented Generation",
  "Agentic AI",
  "AI Agents",
  "AI-powered solutions",
  "Full Stack Developer",
  "React",
  "Next.js",
  "Node.js",
  ".NET",
  "AWS",
  "Azure",
  "PostgreSQL",
  "Portfolio",
  "Bangalore",
];

/** Homepage-specific metadata (main page `/`) */
export const homeMetadata = {
  title: siteTitle,
  description: siteDescription,
  keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    type: "website",
    locale: "en_IN",
    siteName,
    images: [
      {
        url: "/herobg.png",
        width: 1200,
        height: 630,
        alt: `${siteName} — Senior AI Engineer, AI Architect, RAG & Agentic AI`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/herobg.png"],
  },
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteName,
  jobTitle: ["Senior AI Engineer", "Senior Software Engineer", "AI Architect"],
  url: siteUrl,
  sameAs: [linkedInUrl],
  description: siteDescription,
  knowsAbout: [
    "RAG",
    "Retrieval Augmented Generation",
    "Agentic AI",
    "AI Agents",
    "AI Architecture",
    "Full-Stack Development",
    "Cloud Architecture",
    ".NET",
    "Node.js",
    "React",
    "Next.js",
  ],
};
