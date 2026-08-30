import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { CASE_STUDIES } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata = PAGE_SEO["caseStudies"];

const caseStudyListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Portfolio Case Studies",
  itemListElement: CASE_STUDIES.map((study, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: study.title,
    url: absoluteUrl(`/case-studies/${study.slug}`),
    description: study.summary,
  })),
};

function CaseStudies() {
  return (
    <>
      <JsonLd data={caseStudyListJsonLd} />
      <PageHero
        eyebrow="Case Studies"
        title="Complex problems. Clear architecture. Real engineering."
        lead="Each case study focuses on business problem, architecture decisions, implementation and outcomes."
      />
      <section className="section">
        <div className="section__inner">
          <div className="case-grid">
            {CASE_STUDIES.map((study) => (
              <Reveal as="article" className="case-card case-card--featured" key={study.slug}>
                <div className="case-card__header">
                  <p className="case-card__status">{study.status}</p>
                  <h2>{study.title}</h2>
                  <p className="case-card__industry">{study.category}</p>
                </div>
                <p>{study.summary}</p>
                <div className="case-card__body">
                  <p>
                    <strong>Problem</strong>
                    <span>{study.problem}</span>
                  </p>
                  <p>
                    <strong>Solution</strong>
                    <span>{study.solution}</span>
                  </p>
                  <p>
                    <strong>Architecture</strong>
                    <span>{study.architecture}</span>
                  </p>
                  <p>
                    <strong>Technology</strong>
                    <span>{study.technology}</span>
                  </p>
                  <p>
                    <strong>Outcome</strong>
                    <span>{study.outcome}</span>
                  </p>
                </div>
                <Link className="case-card__link" href={`/case-studies/${study.slug}`}>
                  Open Case Study →
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CaseStudies;
