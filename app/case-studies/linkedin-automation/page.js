import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata = PAGE_SEO["case-studies/linkedin-automation"];

const SOLUTION_FLOW = `Professional Profile
        ↓
Topic Discovery
        ↓
Trend Analysis
        ↓
AI Topic Selection
        ↓
Content Generation
        ↓
Visual Prompt
        ↓
Image Generation
        ↓
Human Approval
        ↓
LinkedIn Publishing`;

const STRUCTURED_OUTPUT = `Topic
Reason
Content
Audience
Content Type
Visual Prompt
Hashtags`;

const IMAGE_FLOW = `LinkedIn Topic
      ↓
AI Content
      ↓
Visual Concept
      ↓
Image Generation
      ↓
Final LinkedIn Post`;

const MANUAL_EFFORT = [
  "Finding relevant topics",
  "Understanding what's currently trending",
  "Connecting trends with personal expertise",
  "Writing original content",
  "Creating visuals",
  "Reviewing content",
  "Publishing consistently",
];

const AI_CONTEXT = [
  "Professional expertise",
  "Target audience",
  "Current trends",
  "Topic",
  "Desired content style",
  "Content objective",
];

const AUDIENCES = [
  "Founders",
  "CTOs",
  "Consultants",
  "Developers",
  "AI professionals",
  "Agencies",
  "Technology companies",
];

const CONTRIBUTIONS = [
  "Automation architecture",
  "n8n workflow design",
  "Prompt engineering",
  "AI content generation",
  "Structured JSON output",
  "Image-generation workflow",
  "LinkedIn publishing architecture",
  "Human approval workflow",
];

const TECHNOLOGIES = [
  "n8n",
  "AI/LLMs",
  "Prompt Engineering",
  "LinkedIn API",
  "Image Generation",
  "APIs",
  "JSON",
];

const KEYWORDS = [
  "LinkedIn Automation",
  "AI Content Automation",
  "n8n",
  "Personal Branding Automation",
  "AI Content Generation",
  "Social Media Automation",
  "Prompt Engineering",
  "AI Workflow",
  "LinkedIn API",
];

function LinkedInAutomationCaseStudy() {
  return (
    <>
      <PageHero
        eyebrow="Case Study"
        title="AI-Powered LinkedIn Content & Publishing Automation"
        lead="An AI-powered LinkedIn automation workflow that turns professional expertise and industry trends into structured, publish-ready LinkedIn content."
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
              Designed an AI-powered LinkedIn automation workflow to turn professional expertise and
              current industry trends into structured, publish-ready LinkedIn content.
            </p>
            <p>
              The system combines{" "}
              <strong>trend discovery, AI content generation, visual generation and workflow automation</strong>.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>The Challenge</h2>
            <p>Maintaining a professional presence on LinkedIn requires continuous effort:</p>
            <ul>
              {MANUAL_EFFORT.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              The objective was to automate the repetitive work while keeping human control over the
              final content.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Solution</h2>
            <p>The workflow uses n8n as the orchestration layer.</p>
            <pre className="code-block">{SOLUTION_FLOW}</pre>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>AI Content Generation</h2>
            <p>The AI receives context such as:</p>
            <div className="chip-grid">
              {AI_CONTEXT.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <p>
              The model then generates structured content rather than an unstructured response.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Structured Workflow</h2>
            <p>A structured output can contain:</p>
            <pre className="code-block">{STRUCTURED_OUTPUT}</pre>
            <p>This makes the output easy to pass between automation nodes.</p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Human-in-the-Loop</h2>
            <p>A key design decision is that AI should not automatically publish everything it generates.</p>
            <p>The workflow follows:</p>
            <p>
              <strong>AI generates → Human reviews → Automation publishes</strong>
            </p>
            <p>
              This provides quality control while retaining the productivity benefits of automation.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Image Generation</h2>
            <p>Each content topic can also produce a dedicated visual prompt.</p>
            <pre className="code-block">{IMAGE_FLOW}</pre>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Business Value</h2>
            <p>
              The system transforms personal branding from an ad-hoc manual process into a repeatable
              content pipeline.
            </p>
            <p>The same architecture can be adapted for:</p>
            <div className="chip-grid">
              {AUDIENCES.map((item) => (
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

export default LinkedInAutomationCaseStudy;
