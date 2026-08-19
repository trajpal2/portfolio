import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { CASE_STUDIES } from "../data/site";

export default function CaseStudies() {
  return (
    <>
      <Seo
        title="Case Studies | Enterprise & AI Architecture | Tushant Rajpal"
        description="Featured case studies spanning insurance platforms, Google ADK agent orchestration and AI + n8n automation."
        path="/case-studies"
      />
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
                <Link className="case-card__link" to={`/case-studies/${study.slug}`}>
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
