import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { EXPERTISE_GROUPS } from "@/lib/site";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata = PAGE_SEO["expertise"];

function Expertise() {
  return (
    <>
<PageHero
        eyebrow="Expertise"
        title="Engineering Capabilities"
        lead="Organized by layer — from full-stack delivery to AI, cloud and architecture."
      />
      <section className="section">
        <div className="section__inner">
          <div className="tech-grid">
            {EXPERTISE_GROUPS.map((group) => (
              <Reveal as="article" className="tech-card" key={group.id} id={group.id}>
                <h2>{group.title}</h2>
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
    </>
  );
}

export default Expertise;
