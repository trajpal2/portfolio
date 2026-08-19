import Reveal from "./Reveal";
import { PROJECTS } from "../data/site";

export default function ProjectCard({ project }) {
  return (
    <Reveal as="article" className="case-card">
      <div className="case-card__header">
        <h3>{project.name}</h3>
        <p className="case-card__industry">Industry: {project.industry}</p>
      </div>
      <div className="case-card__body">
        <p>
          <strong>Challenge</strong>
          <span>{project.challenge}</span>
        </p>
        <p>
          <strong>Solution</strong>
          <span>{project.solution}</span>
        </p>
        <p>
          <strong>Technology</strong>
          <span>{project.technology}</span>
        </p>
        <p>
          <strong>My Role</strong>
          <span>{project.role}</span>
        </p>
        <p>
          <strong>Architecture</strong>
          <span>{project.architecture}</span>
        </p>
        <p>
          <strong>Impact</strong>
          <span>{project.impact}</span>
        </p>
      </div>
      <a className="case-card__link" href="#contact">
        View Case Study →
      </a>
    </Reveal>
  );
}

export function ProjectsSection() {
  return (
    <section className="section section--alt" id="projects">
      <div className="section__inner">
        <p className="eyebrow">Case Studies</p>
        <h2>Selected Projects</h2>
        <p className="section__lead">
          Business problems, solution design and architecture — not just technology names.
        </p>
        <div className="case-grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
