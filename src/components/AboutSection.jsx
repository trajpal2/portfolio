import Reveal from "./Reveal";
import { SITE } from "../data/site";

export default function AboutSection() {
  return (
    <section className="section section--alt" id="about">
      <div className="section__inner about-compact">
        <p className="eyebrow">About</p>
        <h2>About Me</h2>
        <Reveal>
          <p>
            A Senior Full Stack Engineer / Full Stack Architect with 12+ years of experience designing
            and delivering enterprise applications, SaaS platforms, cloud solutions and AI-powered
            systems.
          </p>
          <p>
            I focus on technical leadership, solution architecture, end-to-end product development and
            translating business problems into scalable engineering outcomes — including thoughtful AI
            adoption.
          </p>
          <p className="about-compact__contact">
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <span aria-hidden="true"> · </span>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
