import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { INDUSTRIES } from "@/lib/site";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata = PAGE_SEO["industries"];

function Industries() {
  return (
    <>
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

export default Industries;
