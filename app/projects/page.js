import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { PROJECTS } from "@/lib/site";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata = PAGE_SEO["projects"];

const GROUPS = ["Enterprise Applications", "AI Projects", "Automation", "E-commerce", "Architecture"];

function Projects() {
  return (
    <>
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
                        <Link className="case-card__link" href={project.caseStudy}>
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

export default Projects;
