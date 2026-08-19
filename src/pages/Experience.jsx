import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { EXPERIENCE } from "../data/site";

export default function Experience() {
  return (
    <>
      <Seo
        title="Experience | 12+ Years Engineering | Tushant Rajpal"
        description="Career progression from software engineering to full stack engineering, architecture, AI, cloud and automation ownership."
        path="/experience"
      />
      <PageHero
        eyebrow="Experience"
        title="12+ Years of Engineering Experience"
        lead="Progression from Software Engineering → Full Stack Engineering → Architecture → AI / Cloud / Automation."
      />
      <section className="section">
        <div className="section__inner">
          <div className="timeline">
            {EXPERIENCE.map((item) => (
              <Reveal as="article" className="timeline__item" key={`${item.company}-${item.role}`}>
                <div className="timeline__meta">
                  <h2>{item.role}</h2>
                  <p className="timeline__company">{item.company}</p>
                  <p className="timeline__duration">{item.duration}</p>
                </div>
                <div className="timeline__content">
                  <p className="timeline__label">Responsibilities</p>
                  <ul>
                    {item.responsibilities.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  <p className="timeline__label">Major Projects</p>
                  <ul>
                    {item.projects.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  <p className="timeline__label">Architecture Responsibilities</p>
                  <ul>
                    {item.architecture.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  <p className="timeline__label">Business Impact</p>
                  <ul>
                    {item.impact.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  <div className="chip-grid chip-grid--tight">
                    {item.technologies.map((tech) => (
                      <span className="chip" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
