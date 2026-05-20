import "./globals.css";
import Footer from "@/components/Footer";
import VisitTracker from "@/components/VisitTracker";
import {
  keywords,
  personJsonLd,
  siteDescription,
  siteName,
  siteTitle,
  siteUrl,
} from "@/config/site";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/herobg.png",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/herobg.png"],
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c1117",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <VisitTracker />
        {children}
        <Footer />
      </body>
    </html>
  );
}
