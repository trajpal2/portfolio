import Reveal from "./Reveal";
import { INDUSTRIES } from "../data/site";

export default function IndustrySection() {
  return (
    <section className="section" id="industries">
      <div className="section__inner">
        <p className="eyebrow">Domains</p>
        <h2>Industry Experience</h2>
        <p className="section__lead">
          I can understand different business domains and translate business requirements into
          software systems.
        </p>
        <Reveal className="chip-grid chip-grid--wide">
          {INDUSTRIES.map((item) => (
            <span className="chip chip--outline" key={item}>
              {item}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
