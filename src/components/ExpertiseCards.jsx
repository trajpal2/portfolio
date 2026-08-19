import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { WHAT_I_BUILD } from "../data/site";

export default function ExpertiseCards() {
  return (
    <section className="section" id="what-i-build">
      <div className="section__inner">
        <p className="eyebrow">Capabilities</p>
        <h2>What I Build</h2>
        <p className="section__lead">
          From business ideas to scalable digital products and enterprise platforms.
        </p>
        <div className="card-grid">
          {WHAT_I_BUILD.map((item) => (
            <Reveal as="article" className="info-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link className="case-card__link" to={item.to}>
                Explore expertise →
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
