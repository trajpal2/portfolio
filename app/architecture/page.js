import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata = PAGE_SEO["architecture"];

function Architecture() {
  return (
    <>
<PageHero
        eyebrow="Architecture"
        title="Architecture & Engineering"
        lead="More than feature delivery — system design, boundaries, integrations and cloud-ready execution."
      />
      <section className="section">
        <div className="section__inner case-study">
          <Reveal as="article" className="case-block">
            <h2>Enterprise Architecture</h2>
            <pre className="code-block">{`Business Layer
↓
Application Layer
↓
API Layer
↓
Service Layer
↓
Data Layer
↓
Cloud Infrastructure`}</pre>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>AI Architecture</h2>
            <pre className="code-block">{`User
↓
Application
↓
AI Agent
↓
LLM
↓
RAG / Vector DB
↓
Business APIs
↓
Enterprise Systems`}</pre>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Event-Driven Architecture</h2>
            <pre className="code-block">{`Producer
↓
Message Broker
↓
Consumers
↓
Services
↓
Database`}</pre>
          </Reveal>

          <Reveal className="arch-diagram">
            {["System Design", "HLD / LLD", "C4 Views", "Cloud Topology"].map((item) => (
              <div className="arch-diagram__layer" key={item}>
                <h3>{item}</h3>
                <p>Architecture depth used across enterprise and AI delivery.</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Architecture;
