import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { SITE } from "../data/site";
import { Link } from "react-router-dom";

const FLOW = ["Understand", "Architect", "Design", "Build", "Integrate", "Deploy", "Improve"];

export default function About() {
  return (
    <>
      <Seo
        title="About | Tushant Rajpal — Senior Full Stack Engineer"
        description="Senior Full Stack Engineer / Full Stack Architect with 12+ years of experience building enterprise applications and digital platforms."
        path="/about"
      />
      <PageHero
        eyebrow="About"
        title="Who I Am"
        lead="Senior Full Stack Engineer / Full Stack Architect with 12+ years of experience building enterprise applications and digital platforms."
      />
      <section className="section">
        <div className="section__inner about-page">
          <Reveal>
            <h2>What I Do</h2>
            <p>
              I design and build software systems that combine modern full-stack development, cloud
              infrastructure, AI and automation — turning complex business requirements into
              production-ready solutions.
            </p>
          </Reveal>
          <Reveal>
            <h2>How I Work</h2>
            <div className="flow-row">
              {FLOW.map((step, index) => (
                <div className="flow-row__step" key={step}>
                  <span>{step}</span>
                  {index < FLOW.length - 1 ? <span className="flow-row__arrow">→</span> : null}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <h2>Positioning</h2>
            <p>
              I work at the intersection of{" "}
              <strong>Business + Architecture + Full Stack Engineering + AI + Cloud + Automation</strong>.
            </p>
            <div className="hero__actions" style={{ marginTop: "1.5rem" }}>
              <Link className="btn btn--primary" to="/case-studies">
                View Case Studies
              </Link>
              <a className="btn btn--ghost" href={`mailto:${SITE.email}`}>
                Contact Me
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
