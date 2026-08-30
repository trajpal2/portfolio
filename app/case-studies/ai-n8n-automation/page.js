import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata = PAGE_SEO["case-studies/ai-n8n-automation"];

const KEYWORDS = [
  "n8n",
  "Workflow Automation",
  "Business Automation",
  "AI Automation",
  "AI Agents",
  "Workflow Orchestration",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Redis",
  "CRM Automation",
  "Marketing Automation",
  "API Integration",
  "Process Automation",
  "Automation Platform",
  "SaaS Architecture",
];

const CONTRIBUTIONS = [
  "Automation architecture",
  "n8n workflow architecture",
  "Control-plane / execution-plane separation",
  "API-driven workflow provisioning",
  "Node.js / Express integration",
  "PostgreSQL data architecture",
  "AI workflow orchestration",
  "CRM automation",
  "Marketing automation",
  "Execution monitoring",
  "Scalable workflow architecture",
  "Queue-based execution design",
];

const MONITORING = [
  "Active executions",
  "Running workflows",
  "Completed executions",
  "Failed executions",
  "Execution duration",
  "Workflow status",
  "Error information",
  "Retry handling",
  "Integration failures",
];

const ARCHITECTURE = `                    ┌──────────────────────┐
                    │   Web Application    │
                    │  Automation Builder  │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │      API Layer       │
                    │   Node.js / Express  │
                    └──────────┬───────────┘
                               │
                    ┌──────────▼───────────┐
                    │     PostgreSQL       │
                    │ Automation Metadata  │
                    └──────────┬───────────┘
                               │
                         n8n API
                               │
                               ▼
                    ┌──────────────────────┐
                    │         n8n          │
                    │ Workflow Execution   │
                    └──────────┬───────────┘
                               │
          ┌────────────────────┼────────────────────┐
          ▼                    ▼                    ▼
       CRM/API              Email/Marketing       AI
          │                    │                    │
          └────────────────────┼────────────────────┘
                               ▼
                    ┌──────────────────────┐
                    │ Execution Logs /     │
                    │ Status / Monitoring  │
                    └──────────────────────┘`;

const LIFECYCLE = `User creates automation
        ↓
Application stores definition
        ↓
Automation converted to n8n workflow
        ↓
n8n workflow created through API
        ↓
Workflow activated
        ↓
n8n executes workflow
        ↓
Execution status captured
        ↓
Application dashboard updated`;

const MARKETING_FLOW = `Schedule Trigger
       ↓
Retrieve Contacts
       ↓
Batch Contacts
       ↓
Load Email Template
       ↓
Render Personalized Email
       ↓
Send Email
       ↓
Log Result
       ↓
Update CRM`;

const AI_FLOW = `Incoming Request
       ↓
      n8n
       ↓
   AI Agent
       ↓
Context / Knowledge
       ↓
    Decision
       ↓
 ┌─────┼──────┐
 ↓     ↓      ↓
CRM   Email   API
       ↓
   Log Result`;

const SCALE_FLOW = `                 ┌──────────────┐
                 │ n8n Main     │
                 │ Instance     │
                 └──────┬───────┘
                        │
                        ▼
                 ┌──────────────┐
                 │    Redis     │
                 │    Queue     │
                 └──────┬───────┘
                        │
              ┌─────────┼─────────┐
              ▼         ▼         ▼
           Worker 1  Worker 2  Worker 3
              │         │         │
              └─────────┼─────────┘
                        ▼
                  External APIs`;

const USE_CASES = [
  {
    title: "Lead Automation",
    flow: `Lead Capture
 → AI Qualification
 → CRM Update
 → Sales Notification
 → Follow-up`,
  },
  {
    title: "Customer Support",
    flow: `Customer Message
 → AI Classification
 → Knowledge Retrieval
 → CRM / Ticket Lookup
 → Response
 → Conversation Logging`,
  },
  {
    title: "Marketing",
    flow: `Audience
 → Content Generation
 → Personalization
 → Email
 → Campaign Tracking
 → CRM Update`,
  },
  {
    title: "Document Processing",
    flow: `Document
 → Extraction
 → AI Analysis
 → Classification
 → Database
 → Notification`,
  },
  {
    title: "Reporting",
    flow: `Data Sources
 → Collect
 → Transform
 → Analyze
 → Generate Report
 → Distribute`,
  },
];

function N8nCaseStudy() {
  return (
    <>
      <PageHero
        eyebrow="Case Study"
        title="Building a Scalable Automation Engine with n8n"
        lead="Designed a scalable n8n-based automation platform connecting AI, CRM, email, databases and business APIs."
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
              Designed an automation architecture using <strong>n8n as the workflow execution engine</strong>,
              with a custom application acting as the control plane.
            </p>
            <p>
              The objective was to provide businesses with a flexible automation platform where users can
              define workflows while n8n handles the actual execution and integration with external systems.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>The Business Problem</h2>
            <p>Businesses use multiple disconnected systems:</p>
            <ul>
              <li>CRM</li>
              <li>Email platforms</li>
              <li>Databases</li>
              <li>Communication tools</li>
              <li>Marketing platforms</li>
              <li>AI services</li>
              <li>Internal applications</li>
              <li>APIs</li>
            </ul>
            <p>Connecting these systems manually creates repetitive work and operational overhead.</p>
            <p>The goal was to create a centralized automation layer capable of:</p>
            <ul>
              <li>Triggering workflows</li>
              <li>Processing business data</li>
              <li>Calling APIs</li>
              <li>Executing AI operations</li>
              <li>Updating CRMs</li>
              <li>Sending communications</li>
              <li>Recording execution results</li>
              <li>Handling failures</li>
              <li>Scaling workflow execution</li>
            </ul>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Solution</h2>
            <p>
              The architecture separates <strong>automation management</strong> from{" "}
              <strong>automation execution</strong>.
            </p>
            <p>
              The custom application acts as the <strong>Control Plane</strong>, while n8n acts as the{" "}
              <strong>Execution Plane</strong>.
            </p>
            <pre className="code-block">{ARCHITECTURE}</pre>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Control Plane vs Execution Plane</h2>
            <p>
              One of the key architectural decisions was to avoid making the application itself responsible
              for executing every automation step.
            </p>
            <p>
              <strong>Application</strong> → defines and manages automation
              <br />
              <strong>n8n</strong> → executes automation
            </p>
            <p>This separation makes the architecture easier to scale and maintain.</p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Automation Lifecycle</h2>
            <p>When a user creates an automation:</p>
            <pre className="code-block">{LIFECYCLE}</pre>
            <p>
              The application stores the corresponding <strong>n8n workflow ID</strong>, allowing the
              automation to be managed and tracked from the main application.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Example Business Automation</h2>
            <p>A typical marketing automation could follow:</p>
            <pre className="code-block">{MARKETING_FLOW}</pre>
            <p>
              This approach allows a single workflow to automate a complete business process rather than
              just one isolated action.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>AI + n8n</h2>
            <p>n8n can also act as the orchestration layer for AI-powered workflows.</p>
            <pre className="code-block">{AI_FLOW}</pre>
            <p>
              The architectural principle is: <strong>AI decides; automation executes.</strong>
            </p>
            <p>
              AI can interpret information, classify requests or determine an appropriate action, while n8n
              performs the deterministic operations against business systems.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Potential Automation Use Cases</h2>
            <p>The same architecture can support multiple workflows:</p>
            <div className="card-grid">
              {USE_CASES.map((item) => (
                <article className="info-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <pre className="code-block">{item.flow}</pre>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Scalability</h2>
            <p>
              For higher-volume automation workloads, the architecture can use n8n&apos;s queue-based
              execution model with Redis and worker processes.
            </p>
            <pre className="code-block">{SCALE_FLOW}</pre>
            <p>
              This separates workflow orchestration from execution capacity and provides a path toward
              handling larger numbers of concurrent workflows.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Monitoring &amp; Reliability</h2>
            <p>A production automation platform needs more than workflow execution.</p>
            <p>Important operational information includes:</p>
            <div className="chip-grid">
              {MONITORING.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <p>
              This information can be synchronized back into the application&apos;s database and surfaced
              through an administration dashboard.
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
            <div className="card-grid">
              <article className="info-card">
                <h3>Application</h3>
                <p>Node.js · Express · PostgreSQL</p>
              </article>
              <article className="info-card">
                <h3>Automation</h3>
                <p>n8n · Webhooks · Scheduled workflows · API integrations</p>
              </article>
              <article className="info-card">
                <h3>Infrastructure</h3>
                <p>Redis · Worker-based execution · Containerized deployment</p>
              </article>
              <article className="info-card">
                <h3>AI</h3>
                <p>LLMs · AI Agents · Knowledge/RAG integrations</p>
              </article>
            </div>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Business Value</h2>
            <p>
              The architecture turns disconnected business applications into an integrated automation
              ecosystem.
            </p>
            <p>
              Instead of building a custom integration for every business process, organizations can create
              reusable workflows connecting:
            </p>
            <p>
              <strong>CRM + Email + AI + Database + APIs + Internal Systems</strong>
            </p>
            <p>
              This reduces repetitive manual operations and creates a foundation for building AI-powered
              business automation at scale.
            </p>
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

export default N8nCaseStudy;
