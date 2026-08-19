import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import ExpertiseCards from "../components/ExpertiseCards";
import FeaturedCaseStudies from "../components/FeaturedCaseStudies";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { INDUSTRIES, SITE, EXPERTISE_GROUPS, EXPERIENCE } from "../data/site";

export default function Home() {
  return (
    <>
      <Seo
        title="Senior Full Stack Engineer & Full Stack Architect | Tushant Rajpal"
        description="12+ years designing and building scalable enterprise applications, cloud platforms, AI-powered solutions and intelligent automation systems."
        path="/"
      />
      <Hero />
      <Stats />
      <ExpertiseCards />
      <FeaturedCaseStudies />

      <section className="section" id="ai-home">
        <div className="section__inner">
          <p className="eyebrow">AI &amp; Automation</p>
          <h2>From AI strategy to business automation</h2>
          <p className="section__lead">
            LLM applications, agent orchestration, RAG and workflow automation connected to real
            business systems.
          </p>
          <Reveal className="flow-row">
            {["Business Problem", "AI Strategy", "Agent / LLM", "Integration", "Automation", "Monitoring"].map(
              (step, index, arr) => (
                <div className="flow-row__step" key={step}>
                  <span>{step}</span>
                  {index < arr.length - 1 ? <span className="flow-row__arrow">→</span> : null}
                </div>
              )
            )}
          </Reveal>
          <Link className="btn btn--primary" to="/ai-automation">
            Explore AI &amp; Automation
          </Link>
        </div>
      </section>

      <section className="section section--alt" id="architecture-home">
        <div className="section__inner">
          <p className="eyebrow">Architecture</p>
          <h2>Business → Architecture → Delivery</h2>
          <p className="section__lead">
            I work across requirements, solution design, development, AI integration, cloud and
            deployment.
          </p>
          <Reveal className="flow-row">
            {SITE.story.map((step, index, arr) => (
              <div className="flow-row__step" key={step}>
                <span>{step}</span>
                {index < arr.length - 1 ? <span className="flow-row__arrow">↓</span> : null}
              </div>
            ))}
          </Reveal>
          <Link className="btn btn--ghost" to="/architecture">
            View Architecture
          </Link>
        </div>
      </section>

      <section className="section" id="industries-home">
        <div className="section__inner">
          <p className="eyebrow">Domains</p>
          <h2>Industry Experience</h2>
          <p className="section__lead">
            I understand different business domains and translate requirements into software systems.
          </p>
          <div className="chip-grid chip-grid--wide">
            {INDUSTRIES.map((item) => (
              <Link className="chip chip--outline" key={item.name} to="/industries">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="tech-home">
        <div className="section__inner">
          <p className="eyebrow">Stack</p>
          <h2>Technology Stack</h2>
          <div className="tech-grid">
            {EXPERTISE_GROUPS.slice(0, 6).map((group) => (
              <article className="tech-card" key={group.id}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.slice(0, 5).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="section__lead" style={{ marginTop: "1.5rem" }}>
            Detailed capability map lives on the Expertise page.
          </p>
          <Link className="btn btn--ghost" to="/expertise">
            View Expertise
          </Link>
        </div>
      </section>

      <section className="section" id="experience-home">
        <div className="section__inner">
          <p className="eyebrow">Career</p>
          <h2>Experience Summary</h2>
          <div className="timeline">
            {EXPERIENCE.map((item) => (
              <article className="timeline__item" key={`${item.company}-${item.role}`}>
                <div className="timeline__meta">
                  <h3>{item.role}</h3>
                  <p className="timeline__company">{item.company}</p>
                  <p className="timeline__duration">{item.duration}</p>
                </div>
                <div className="timeline__content">
                  <ul>
                    {item.impact.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <Link className="btn btn--ghost" to="/experience">
            View Full Experience
          </Link>
        </div>
      </section>

      <section className="section cta-section" id="final-cta">
        <div className="section__inner">
          <Reveal className="cta-panel">
            <p className="eyebrow">Next Step</p>
            <h2>Have a complex business problem that needs a software solution?</h2>
            <p className="section__lead">
              Let&apos;s discuss the architecture, technology and solution that can turn your idea into
              a scalable product.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--primary" to="/contact">
                Start a Conversation
              </Link>
              <Link className="btn btn--ghost" to="/case-studies">
                View Case Studies
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
