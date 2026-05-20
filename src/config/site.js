/** Site URL for SEO, Open Graph, and sitemap. Override with NEXT_PUBLIC_SITE_URL in .env */
const PRODUCTION_SITE_URL = "https://trajpal2.github.io/portfolio";

export const siteUrl =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL) ||
  (typeof process !== "undefined" && process.env.NODE_ENV === "production"
    ? PRODUCTION_SITE_URL
    : "http://localhost:3000");

export const siteName = "Tushant Rajpal";
export const siteTitle = `${siteName} | Senior Software Engineer`;
export const siteDescription =
  "Portfolio of Tushant Rajpal — Senior Software Engineer specializing in full-stack development, cloud architecture, .NET, Node.js, React, Next.js, and AI-powered enterprise solutions.";

export const linkedInUrl = "https://www.linkedin.com/in/trajpal";

export const keywords = [
  "Tushant Rajpal",
  "Senior Software Engineer",
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
