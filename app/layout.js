import { Inter } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import SiteShell from "@/components/SiteShell";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import {
  absoluteUrl,
  buildPersonJsonLd,
  buildProfessionalServiceJsonLd,
  buildWebSiteJsonLd,
  getDefaultRobots,
} from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tushant.rajpal.dev";
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE.title} | ${SITE.name}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.lead,
  applicationName: `${SITE.name} Portfolio`,
  authors: [{ name: SITE.name, url: absoluteUrl("/") }],
  creator: SITE.name,
  publisher: SITE.name,
  keywords: [
    "Tushant Rajpal",
    "Senior Full Stack Engineer",
    "Full Stack Architect",
    "React",
    "Next.js",
    "Node.js",
    "AI Engineering",
    "Cloud Architecture",
    "Business Automation",
    "n8n",
    "CRM",
    "Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  robots: getDefaultRobots(),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: absoluteUrl("/"),
    siteName: SITE.name,
    title: `${SITE.title} | ${SITE.name}`,
    description: SITE.lead,
    images: [
      {
        url: "/images/architecture-hero.png",
        width: 1600,
        height: 900,
        alt: `${SITE.name} — architecture and engineering portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.title} | ${SITE.name}`,
    description: SITE.lead,
    images: ["/images/architecture-hero.png"],
  },
  category: "technology",
  ...(googleVerification
    ? {
        verification: {
          google: googleVerification,
        },
      }
    : {}),
};

const themeBootstrap = `
(function () {
  try {
    var themeKey = "portfolio-theme-pref";
    var pref = localStorage.getItem(themeKey);
    if (pref !== "light" && pref !== "dark" && pref !== "system") {
      var legacy = localStorage.getItem("portfolio-theme");
      pref = legacy === "light" || legacy === "dark" ? legacy : "system";
    }
    var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = pref === "system" ? (systemDark ? "dark" : "light") : pref;
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-theme-pref", pref);
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
        <JsonLd
          data={[buildPersonJsonLd(), buildWebSiteJsonLd(), buildProfessionalServiceJsonLd()]}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
