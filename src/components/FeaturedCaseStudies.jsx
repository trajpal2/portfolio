import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { CASE_STUDIES } from "../data/site";

export default function FeaturedCaseStudies() {
  return (
    <section className="section section--alt" id="featured-case-studies">
      <div className="section__inner">
        <p className="eyebrow">Proof</p>
        <h2>Featured Case Studies</h2>
        <p className="section__lead">
          Complex problems, architecture decisions and engineering outcomes — not just technology lists.
        </p>
        <div className="case-grid">
          {CASE_STUDIES.map((study) => (
            <Reveal as="article" className="case-card case-card--featured" key={study.slug}>
              <div className="case-card__header">
                <p className="case-card__status">{study.status}</p>
                <h3>{study.title}</h3>
                <p className="case-card__industry">{study.category}</p>
              </div>
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
                View Case Study →
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
