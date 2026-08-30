import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ADK_AGENTS, ADK_INPUTS, ADK_OUTPUTS } from "@/lib/site";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata = PAGE_SEO["case-studies/dialogflow-google-adk"];

function ADKCaseStudy() {
  return (
    <>
<PageHero
        eyebrow="Case Study"
        title="Modernizing Conversational AI with Google ADK"
        lead="From linear Dialogflow flows to specialized AI agents with sequential, parallel and graph-based orchestration."
        actions={
          <Link className="btn btn--ghost" href="/case-studies">
            ← All Case Studies
          </Link>
        }
      />

      <section className="section">
        <div className="section__inner case-study">
          <Reveal as="article" className="case-block">
            <h2>1. Problem</h2>
            <p>
              The existing conversational system relied heavily on linear flows, complex if/else logic
              and tightly coupled conversational paths.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>2. Existing Architecture</h2>
            <p>
              Dialogflow-centric linear conversation design where business logic and dialogue paths
              were tightly interleaved.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>3. Limitations</h2>
            <ul className="plain-list">
              <li>Long conversational flows</li>
              <li>Increasing complexity</li>
              <li>Difficult maintenance</li>
              <li>Limited flexibility</li>
              <li>Difficult scaling of business logic</li>
            </ul>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>4. Proposed Architecture</h2>
            <p>
              Move toward specialized agents coordinated using Google ADK, with clear ownership and
              orchestration patterns for sequential, parallel and graph-based journeys.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>5. Agent Design</h2>
            <div className="chip-grid">
              {ADK_AGENTS.map((agent) => (
                <span className="chip" key={agent}>
                  {agent}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>6. Sequential Orchestration</h2>
            <p>Used when one agent depends on the output of another.</p>
            <pre className="code-block">{`Qualification
      ↓
Vehicle
      ↓
Finance
      ↓
Recommendation`}</pre>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>7. Parallel Orchestration</h2>
            <p>Used when multiple independent operations can execute simultaneously.</p>
            <pre className="code-block">{`             ┌── Vehicle Agent
User Input ──┼── Finance Agent
             └── Dealer Agent`}</pre>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>8. Graph Orchestration</h2>
            <p>Used when the system needs branching, decisions and joins.</p>
            <pre className="code-block">{`                    ┌── Vehicle
Qualification ──────┤
                    └── Finance
                         ↓
                    Recommendation`}</pre>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>9–12. Security, Monitoring, Scalability &amp; Performance</h2>
            <ul className="plain-list">
              <li>Security: authenticated contexts, controlled tool/API access and validated agent outputs</li>
              <li>Monitoring: conversation traces, agent outcomes and failure visibility</li>
              <li>Scalability: specialized agents that can evolve independently</li>
              <li>Performance: parallelize independent work; keep sequential only where dependencies exist</li>
            </ul>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>ADK Inputs</h2>
            <div className="chip-grid">
              {ADK_INPUTS.map((item) => (
                <span className="chip chip--outline" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>ADK Outputs</h2>
            <div className="chip-grid">
              {ADK_OUTPUTS.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>13. Business Benefits</h2>
            <p>
              Clearer agent ownership, easier maintenance, more flexible conversational journeys and a
              stronger foundation for scaling business logic.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>14. Lessons Learned</h2>
            <p>
              Linear dialogue trees do not scale with business complexity. Agent-oriented orchestration
              with explicit sequential, parallel and graph patterns creates a more maintainable AI
              architecture.
            </p>
          </Reveal>

          <Reveal className="arch-diagram">
            {["C1 Context", "C2 Containers", "C3 Components"].map((item) => (
              <div className="arch-diagram__layer" key={item}>
                <h3>{item}</h3>
                <p>Architecture view for conversational modernization and agent boundaries.</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default ADKCaseStudy;
