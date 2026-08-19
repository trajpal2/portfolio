import { Link } from "react-router-dom";
import Seo from "../../components/Seo";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";

const CAPABILITIES = [
  "Workflow automation",
  "AI agents",
  "API integrations",
  "Webhooks",
  "Data transformation",
  "Content generation",
  "Social media automation",
  "Shopify integrations",
  "Business process automation",
  "Human approval workflows",
  "Scheduled workflows",
];

export default function N8nCaseStudy() {
  return (
    <>
      <Seo
        title="AI + n8n Automation Case Study | Tushant Rajpal"
        description="Ongoing AI-powered business automation with n8n — marketing workflows, Shopify content automation and human approval loops."
        path="/case-studies/ai-n8n-automation"
      />
      <PageHero
        eyebrow="Ongoing Project / In Progress"
        title="AI-Powered Business Automation with n8n"
        lead="Exploring automation systems where Business Trigger → n8n → AI Agent → Decision → Automation → Business Platform."
        actions={
          <Link className="btn btn--ghost" to="/case-studies">
            ← All Case Studies
          </Link>
        }
      />

      <section className="section">
        <div className="section__inner case-study">
          <Reveal as="article" className="case-block">
            <p className="case-card__status">In Progress</p>
            <h2>Project Status</h2>
            <p>
              This is an ongoing project. It is presented as work-in-progress exploration and
              implementation — not as a fully completed production case study.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Core Flow</h2>
            <pre className="code-block">{`Business Trigger → n8n → AI Agent → Decision → Automation → Business Platform`}</pre>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>n8n Marketing Automation</h2>
            <p>Goal: reduce repetitive marketing work through AI-assisted automation.</p>
            <pre className="code-block">{`WhatsApp / Business Input
          ↓
       n8n
          ↓
      AI Agent
          ↓
Content Understanding
          ↓
Content Generation
          ↓
Approval / Validation
          ↓
Social Media Automation
          ↓
Instagram / Facebook`}</pre>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Shopify / Social Automation</h2>
            <p>
              Concept for retrieving product information and preparing social content with approval
              and scheduling steps.
            </p>
            <pre className="code-block">{`Shopify
   ↓
Product Information
   ↓
AI Agent
   ↓
Content Generation
   ↓
Approval
   ↓
Schedule
   ↓
Instagram / Facebook`}</pre>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>n8n Capabilities</h2>
            <div className="chip-grid">
              {CAPABILITIES.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
