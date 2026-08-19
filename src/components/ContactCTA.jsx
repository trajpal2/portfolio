import Reveal from "./Reveal";
import { SITE } from "../data/site";

export default function ContactCTA() {
  return (
    <section className="section cta-section" id="contact">
      <div className="section__inner">
        <Reveal className="cta-panel">
          <p className="eyebrow">Contact</p>
          <h2>Have a business problem that needs a software solution?</h2>
          <p className="section__lead">
            Let&apos;s discuss the architecture, technology and solution that can turn your idea into a
            scalable product.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={`mailto:${SITE.email}`}>
              Get in Touch
            </a>
            <a
              className="btn btn--ghost"
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              View LinkedIn
            </a>
            <a className="btn btn--link" href="/resume.pdf" download="Tushant_Rajpal_Resume.pdf">
              Download Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
