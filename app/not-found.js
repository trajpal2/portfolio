import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Page Not Found",
  description: "The page you requested could not be found on this portfolio site.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="section__inner case-study">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="section__lead">
          The page you are looking for does not exist or may have moved. Use the links below to
          continue exploring {SITE.name}&apos;s portfolio.
        </p>
        <div className="hero__actions" style={{ marginTop: "1.5rem" }}>
          <Link className="btn btn--primary" href="/">
            Go to Home
          </Link>
          <Link className="btn btn--ghost" href="/case-studies">
            View Case Studies
          </Link>
          <Link className="btn btn--ghost" href="/sitemap">
            Browse Sitemap
          </Link>
        </div>
      </div>
    </section>
  );
}
