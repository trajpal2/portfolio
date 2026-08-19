import Reveal from "./Reveal";
import { SERVICES } from "../data/site";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="section__inner">
        <p className="eyebrow">Services</p>
        <h2>How I Can Help</h2>
        <p className="section__lead">
          From architecture and development to AI integration, cloud delivery and modernization.
        </p>
        <Reveal className="chip-grid chip-grid--wide">
          {SERVICES.map((item) => (
            <span className="chip chip--outline" key={item}>
              {item}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
