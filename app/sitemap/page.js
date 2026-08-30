import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { getCaseStudyRoutes, STATIC_ROUTES } from "@/lib/routes";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata = PAGE_SEO["sitemap"];

export default function SitemapPage() {
  const caseStudies = getCaseStudyRoutes();

  return (
    <>
      <PageHero
        eyebrow="Sitemap"
        title="All Public Routes"
        lead="A complete map of pages available on this portfolio, including case studies."
      />

      <section className="section">
        <div className="section__inner case-study">
          <Reveal as="article" className="case-block">
            <h2>Main Pages</h2>
            <ul>
              {STATIC_ROUTES.map((route) => (
                <li key={route.path}>
                  <Link href={route.path}>
                    {route.label} <span aria-hidden="true">—</span> <code>{route.path}</code>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Case Studies</h2>
            <ul>
              {caseStudies.map((route) => (
                <li key={route.path}>
                  <Link href={route.path}>
                    {route.label} <span aria-hidden="true">—</span> <code>{route.path}</code>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Machine-Readable Sitemap</h2>
            <p>
              Search engines can use the XML sitemap at{" "}
              <Link href="/sitemap.xml">
                <code>/sitemap.xml</code>
              </Link>{" "}
              and crawler rules at{" "}
              <Link href="/robots.txt">
                <code>/robots.txt</code>
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
