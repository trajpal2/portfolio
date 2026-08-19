import { Link } from "react-router-dom";
import TypewriterHeadline from "./TypewriterHeadline";
import { SITE, SPECIALITIES } from "../data/site";

export default function Hero() {
  return (
    <section className="hero page-hero" id="home">
      <div className="hero__content">
        <p className="hero__brand">{SITE.name}</p>
        <p className="hero__role">{SITE.roleLine}</p>
        <TypewriterHeadline specialities={SPECIALITIES} />
        <p className="hero__lead">{SITE.lead}</p>
        <div className="hero__actions">
          <Link className="btn btn--primary" to="/case-studies">
            View Case Studies
          </Link>
          <Link className="btn btn--ghost" to="/contact">
            Let&apos;s Work Together
          </Link>
          <a className="btn btn--link" href="/resume.pdf" download="Tushant_Rajpal_Resume.pdf">
            Download Resume
          </a>
        </div>
      </div>
      <figure className="hero__visual">
        <img
          src="/images/architecture-hero.png"
          alt="Architecture visual: AI agents, React/Next.js, Node.js/.NET, APIs, Database, Events, AWS/GCP and Automation"
          width="1600"
          height="900"
          loading="eager"
        />
        <figcaption className="hero__visual-caption">
          Full Stack + Architecture + AI + Cloud + Automation
        </figcaption>
      </figure>
    </section>
  );
}
