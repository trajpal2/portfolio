import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { INDUSTRIES } from "../data/site";

export default function Industries() {
  return (
    <>
      <Seo
        title="Industry Experience | Tushant Rajpal"
        description="Industry experience across insurance, banking, real estate, travel, e-commerce, education, healthcare, SaaS and enterprise applications."
        path="/industries"
      />
      <PageHero
        eyebrow="Industries"
        title="Industry Experience"
        lead="I can understand different business domains and translate business requirements into software systems."
      />
      <section className="section">
        <div className="section__inner">
          <div className="card-grid">
            {INDUSTRIES.map((item) => (
              <Reveal as="article" className="info-card" key={item.name}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
