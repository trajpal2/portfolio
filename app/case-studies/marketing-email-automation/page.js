import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata = PAGE_SEO["case-studies/marketing-email-automation"];

const TRADITIONAL_FLOW = `Audience Selection
       ↓
Content Creation
       ↓
Personalization
       ↓
Campaign Setup
       ↓
Email Delivery
       ↓
Tracking
       ↓
CRM Update`;

const SOLUTION_FLOW = `Customer / Lead Data
        ↓
Audience Selection
        ↓
Segmentation
        ↓
AI Content Generation
        ↓
Personalization
        ↓
Email Delivery
        ↓
Campaign Tracking
        ↓
CRM / Database Update`;

const PERSONALIZATION_FLOW = `Customer Context
      ↓
Campaign Objective
      ↓
AI Content Generation
      ↓
Personalized Message
      ↓
Email Provider`;

const N8N_FLOW = `Trigger
  ↓
Get Contacts
  ↓
Filter / Segment
  ↓
Prepare Customer Context
  ↓
Generate Content
  ↓
Validate Content
  ↓
Send Email
  ↓
Capture Result
  ↓
Update CRM`;

const RELIABILITY = [
  "Failed email delivery",
  "API failures",
  "Invalid customer data",
  "Duplicate sends",
  "Rate limits",
  "Retry handling",
  "Logging",
  "Campaign status",
];

const FOUNDATIONS = [
  "Lead nurturing",
  "Customer communication",
  "Campaign automation",
  "Personalized outreach",
  "Follow-up campaigns",
  "CRM-driven marketing",
];

const CONTRIBUTIONS = [
  "Marketing automation architecture",
  "n8n workflow development",
  "Email workflow design",
  "AI content generation",
  "Personalization logic",
  "API integration",
  "CRM integration",
  "Error handling and workflow design",
];

const TECHNOLOGIES = [
  "n8n",
  "AI/LLMs",
  "Email APIs",
  "CRM",
  "REST APIs",
  "Databases",
  "Automation",
];

const KEYWORDS = [
  "Email Automation",
  "Marketing Automation",
  "AI Email Generation",
  "n8n",
  "Email Personalization",
  "CRM Automation",
  "Lead Nurturing",
  "Marketing Workflow",
  "AI Marketing",
];

function MarketingEmailAutomationCaseStudy() {
  return (
    <>
      <PageHero
        eyebrow="Case Study"
        title="Automated, Personalized Marketing Communication"
        lead="An automated marketing-email workflow that reduces repetitive campaign operations and scales generation, personalization and distribution."
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
              Designed an automated marketing-email workflow to reduce repetitive campaign operations and
              create a more scalable process for generating, personalizing and distributing email
              communication.
            </p>
            <p>
              The system combines workflow automation, customer data and AI-assisted content generation.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>The Challenge</h2>
            <p>Traditional email campaigns often involve multiple manual steps:</p>
            <pre className="code-block">{TRADITIONAL_FLOW}</pre>
            <p>
              Repeating this process manually becomes increasingly difficult as the audience and campaign
              volume grow.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Solution</h2>
            <p>The automation workflow centralizes these activities.</p>
            <pre className="code-block">{SOLUTION_FLOW}</pre>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>AI-Assisted Personalization</h2>
            <p>AI can be used to adapt content based on available customer context.</p>
            <p>For example:</p>
            <pre className="code-block">{PERSONALIZATION_FLOW}</pre>
            <p>
              The AI layer is separated from the delivery layer so that content generation and email
              infrastructure remain independent.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Automation Architecture</h2>
            <p>n8n can orchestrate the complete workflow:</p>
            <pre className="code-block">{N8N_FLOW}</pre>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Reliability Considerations</h2>
            <p>A production email automation system needs to account for:</p>
            <div className="chip-grid">
              {RELIABILITY.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <p>
              These considerations make the workflow more reliable than a simple &quot;send email&quot;
              automation.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Business Value</h2>
            <p>
              The automation helps businesses create a repeatable marketing process while reducing manual
              campaign operations.
            </p>
            <p>It creates a foundation for:</p>
            <div className="chip-grid">
              {FOUNDATIONS.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
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

export default MarketingEmailAutomationCaseStudy;
