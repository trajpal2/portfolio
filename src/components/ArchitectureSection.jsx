import Reveal from "./Reveal";
import { HOW_I_BUILD } from "../data/site";

const LAYERS = [
  { title: "Architecture", items: ["System Design", "Solution Architecture", "Scalability"] },
  { title: "Services", items: ["Microservices", "REST APIs", "Security"] },
  { title: "Data & Cloud", items: ["Database Design", "Cloud Architecture", "Docker / K8s"] },
  { title: "Delivery", items: ["CI/CD", "Performance", "Monitoring"] },
];

export default function ArchitectureSection() {
  return (
    <section className="section" id="architecture">
      <div className="section__inner">
        <p className="eyebrow">Engineering</p>
        <h2>How I Build</h2>
        <p className="section__lead">
          End-to-end engineering from architecture and APIs to cloud delivery and observability.
        </p>

        <Reveal className="arch-diagram">
          {LAYERS.map((layer, index) => (
            <div className="arch-diagram__layer" key={layer.title}>
              <h3>{layer.title}</h3>
              <ul>
                {layer.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {index < LAYERS.length - 1 ? (
                <div className="arch-diagram__connector" aria-hidden="true" />
              ) : null}
            </div>
          ))}
        </Reveal>

        <div className="chip-grid">
          {HOW_I_BUILD.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
