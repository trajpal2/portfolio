import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata = PAGE_SEO["case-studies/ai-crm-integration"];

const SOLUTION_ARCHITECTURE = `                 CRM Application
                       │
                       ▼
                  API Layer
                       │
            ┌──────────┴──────────┐
            ▼                     ▼
      CRM Services            AI Service
            │                     │
            ▼                     ▼
        CRM Data            LLM / AI Model
                                  │
                                  ▼
                         Context / Tools
                                  │
                                  ▼
                         AI Response`;

const CONTEXT_FLOW = `User Request
     ↓
Identify Intent
     ↓
Retrieve CRM Context
     ↓
Prepare AI Context
     ↓
LLM
     ↓
Validate / Process Response
     ↓
CRM Action or User Response`;

const AGENT_ARCHITECTURE = `             AI Agent
                │
      ┌─────────┼─────────┐
      ▼         ▼         ▼
  Customer   Lead Tool   Activity
   Search                 Tool
      │         │         │
      └─────────┼─────────┘
                ▼
           CRM Services`;

const MANUAL_NEEDS = [
  "Search customer records",
  "Review previous interactions",
  "Understand customer context",
  "Classify leads",
  "Prepare follow-ups",
  "Analyze customer information",
  "Perform repetitive CRM updates",
];

const AI_CAPABILITIES = [
  {
    title: "Customer Summarization",
    body: "AI can transform large amounts of customer information into concise summaries.",
  },
  {
    title: "Lead Analysis",
    body: "Customer information can be evaluated to help identify lead characteristics and priorities.",
  },
  {
    title: "Intelligent Search",
    body: "Users can interact with customer information using natural language rather than relying exclusively on traditional filters.",
  },
  {
    title: "Follow-up Assistance",
    body: "AI can assist users in preparing context-aware follow-up messages.",
  },
  {
    title: "Customer Insights",
    body: "Historical CRM information can be analyzed to identify patterns and important information.",
  },
];

const CONTRIBUTIONS = [
  "AI integration architecture",
  "CRM/AI service integration",
  "API design",
  "AI workflow design",
  "Prompt engineering",
  "Context retrieval",
  "AI-assisted CRM workflows",
  "Backend integration",
  "Business-process automation",
];

const TECHNOLOGIES = [
  "AI/LLMs",
  "CRM",
  "REST APIs",
  "Backend Services",
  "Databases",
  "Prompt Engineering",
  "AI Agents",
];

const KEYWORDS = [
  "AI CRM",
  "AI-Powered CRM",
  "CRM Automation",
  "Generative AI",
  "AI Agents",
  "LLM Integration",
  "Sales Automation",
  "Customer Intelligence",
  "AI SaaS",
];

function AiCrmIntegrationCaseStudy() {
  return (
    <>
      <PageHero
        eyebrow="Case Study"
        title="Bringing AI-Powered Intelligence into a CRM Platform"
        lead="Integrated AI capabilities into a CRM environment to move beyond traditional customer-data management toward AI-assisted customer operations and decision-making."
        actions={
          <Link className="btn btn--ghost" href="/case-studies">
            ← All Case Studies
          </Link>
        }
      />

      <section className="section">
        <div className="section__inner case-study">
          <Reveal as="article" className="case-block">
            <p className="case-card__status">Featured</p>
            <h2>Overview</h2>
            <p>
              Integrated AI capabilities into a CRM environment to move the system beyond traditional
              customer-data management toward{" "}
              <strong>AI-assisted customer operations and decision-making</strong>.
            </p>
            <p>
              The objective was to use AI where it could reduce manual work, improve access to customer
              information, and help users make faster decisions.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>The Challenge</h2>
            <p>
              Traditional CRM platforms store large amounts of customer information but often require
              users to manually search, interpret and act on that information.
            </p>
            <p>Sales and customer-facing teams may need to:</p>
            <ul>
              {MANUAL_NEEDS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>The opportunity was to introduce AI directly into these workflows.</p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Solution</h2>
            <p>The architecture introduced an AI layer alongside the existing CRM services.</p>
            <pre className="code-block">{SOLUTION_ARCHITECTURE}</pre>
            <p>The AI service acts as an intelligence layer rather than replacing the existing CRM.</p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>AI Capabilities</h2>
            <p>Potential CRM intelligence workflows include:</p>
            <div className="card-grid">
              {AI_CAPABILITIES.map((item) => (
                <article className="info-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Context-Aware AI</h2>
            <p>A major architectural consideration is preventing the AI from operating without business context.</p>
            <p>The workflow therefore becomes:</p>
            <pre className="code-block">{CONTEXT_FLOW}</pre>
            <p>
              This allows the AI to work with relevant CRM information instead of generating generic
              responses.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>AI + CRM Architecture</h2>
            <p>The AI layer can expose controlled tools to perform CRM operations.</p>
            <pre className="code-block">{AGENT_ARCHITECTURE}</pre>
            <p>
              This creates a controlled boundary between AI decision-making and business operations.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Business Value</h2>
            <p>
              The integration changes the CRM from a system that primarily{" "}
              <strong>stores information</strong> into a system that can help users{" "}
              <strong>understand and act on information</strong>.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>My Contribution</h2>
            <div className="chip-grid">
              {CONTRIBUTIONS.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Technology Stack</h2>
            <div className="chip-grid">
              {TECHNOLOGIES.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="chip-grid">
            {KEYWORDS.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AiCrmIntegrationCaseStudy;
