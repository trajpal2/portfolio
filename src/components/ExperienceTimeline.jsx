import Reveal from "./Reveal";
import { EXPERIENCE } from "../data/site";

export default function ExperienceTimeline() {
  return (
    <section className="section" id="experience">
      <div className="section__inner">
        <p className="eyebrow">Career</p>
        <h2>12+ Years of Engineering Experience</h2>
        <p className="section__lead">
          Technical leadership across enterprise delivery, platform modernization and AI adoption.
        </p>
        <div className="timeline">
          {EXPERIENCE.map((item) => (
            <Reveal as="article" className="timeline__item" key={`${item.company}-${item.role}`}>
              <div className="timeline__meta">
                <h3>{item.role}</h3>
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
                <p className="timeline__label">Achievements</p>
                <ul>
                  {item.achievements.map((line) => (
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
  );
}
