import Reveal from "./Reveal";
import { TECH_STACK } from "../data/site";

export default function TechStack() {
  return (
    <section className="section section--alt" id="tech">
      <div className="section__inner">
        <p className="eyebrow">Stack</p>
        <h2>Technology Stack</h2>
        <p className="section__lead">
          Modern full-stack, cloud and AI technologies organized by engineering layer.
        </p>
        <div className="tech-grid">
          {TECH_STACK.map((group) => (
            <Reveal as="article" className="tech-card" key={group.category}>
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
