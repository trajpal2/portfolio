import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { PROJECTS } from "../data/site";

const GROUPS = ["Enterprise Applications", "AI Projects", "Automation", "E-commerce", "Architecture"];

export default function Projects() {
  return (
    <>
      <Seo
        title="Projects | Enterprise, AI & Automation | Tushant Rajpal"
        description="Projects across enterprise applications, AI agents, automation, e-commerce and architecture."
        path="/projects"
      />
      <PageHero
        eyebrow="Projects"
        title="Selected Engineering Work"
        lead="Grouped by problem space — with architecture, role, technology and status."
      />
      <section className="section">
        <div className="section__inner">
          {GROUPS.map((group) => {
            const items = PROJECTS.filter((project) => project.group === group);
            if (!items.length) return null;
            return (
              <div className="project-group" key={group}>
                <h2>{group}</h2>
                <div className="case-grid">
                  {items.map((project) => (
                    <Reveal as="article" className="case-card" key={project.name}>
                      <h3>{project.name}</h3>
                      <p className="case-card__industry">{project.industry}</p>
                      <div className="case-card__body">
                        <p>
                          <strong>Role</strong>
                          <span>{project.role}</span>
                        </p>
                        <p>
                          <strong>Technology</strong>
                          <span>{project.technology}</span>
                        </p>
                        <p>
                          <strong>Architecture</strong>
                          <span>{project.architecture}</span>
                        </p>
                        <p>
                          <strong>Status</strong>
                          <span>{project.status}</span>
                        </p>
                      </div>
                      {project.caseStudy ? (
                        <Link className="case-card__link" to={project.caseStudy}>
                          View Case Study →
                        </Link>
                      ) : null}
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
