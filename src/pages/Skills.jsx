import { useEffect } from "react";
import Reveal from "../components/Reveal";
import { useReveal } from "../hooks/useReveal";
import { SKILLS } from "../data/site";

function SkillCard({ skill }) {
  const { ref, visible } = useReveal();

  useEffect(() => {
    if (!visible || !ref.current) return;
    const bar = ref.current.querySelector(".progress__bar");
    if (bar) bar.style.width = `${skill.progress}%`;
  }, [visible, skill.progress, ref]);

  return (
    <article
      ref={ref}
      className={`skill reveal${visible ? " is-visible" : ""}`}
      data-progress={skill.progress}
    >
      <h3>{skill.name}</h3>
      <p>{skill.description}</p>
      <div
        className="progress"
        role="progressbar"
        aria-valuenow={skill.progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${skill.name} proficiency`}
      >
        <span className="progress__bar" />
      </div>
    </article>
  );
}

export default function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="section__inner">
        <p className="eyebrow">Capabilities</p>
        <h2>Skills</h2>
        <p className="section__lead">Core strengths across backend, frontend, cloud, and AI automation.</p>
        <div className="skills-grid">
          {SKILLS.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
        <Reveal className="skills-note">
          <p>Also experienced with Docker, Kubernetes, CI/CD, OAuth2/JWT, and Agile delivery leadership.</p>
        </Reveal>
      </div>
    </section>
  );
}
