import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata = PAGE_SEO["case-studies/ai-content-creation-platform"];

const SOLUTION_PIPELINE = `Topic / Source Material
          ↓
      AI Research
          ↓
     Content Strategy
          ↓
    Content Generation
          ↓
       AI Editing
          ↓
     Content Formatting
          ↓
     Visual Generation
          ↓
      Repurposing
          ↓
     Publish / Store`;

const MULTI_FORMAT = `                 Source
                   │
             AI Processing
                   │
       ┌───────────┼───────────┐
       ▼           ▼           ▼
   LinkedIn      Blog       Newsletter
       │           │           │
       └───────────┼───────────┘
                   ▼
              Visual Content`;

const STRUCTURED_OUTPUT = `Title
Topic
Audience
Content
Content Type
Key Points
Visual Prompt
CTA
Hashtags`;

const REVIEW_FLOW = `AI Generation
      ↓
Quality Check
      ↓
Human Review
      ↓
Approval
      ↓
Publishing`;

const ACTIVITIES = [
  "Research",
  "Topic selection",
  "Ideation",
  "Writing",
  "Editing",
  "Formatting",
  "Visual creation",
  "Repurposing",
  "Publishing",
];

const PROMPT_LAYERS = [
  {
    title: "Research Prompt",
    body: "Understands the subject.",
  },
  {
    title: "Strategy Prompt",
    body: "Determines the appropriate angle and audience.",
  },
  {
    title: "Writing Prompt",
    body: "Produces the actual content.",
  },
  {
    title: "Editing Prompt",
    body: "Improves clarity, structure and readability.",
  },
  {
    title: "Visual Prompt",
    body: "Creates instructions for supporting graphics.",
  },
];

const SUPPORTS = [
  "Personal branding",
  "Corporate marketing",
  "Social media",
  "Blog production",
  "Newsletter creation",
  "Content repurposing",
  "Marketing campaigns",
];

const CONTRIBUTIONS = [
  "AI content architecture",
  "Prompt engineering",
  "Content workflow design",
  "Structured AI output",
  "Content repurposing",
  "Image-generation integration",
  "Automation architecture",
  "Human approval workflow",
];

const TECHNOLOGIES = [
  "AI/LLMs",
  "Prompt Engineering",
  "n8n",
  "APIs",
  "JSON",
  "Image Generation",
  "Content Automation",
];

const KEYWORDS = [
  "AI Content Creation",
  "Generative AI",
  "AI Content Platform",
  "Content Automation",
  "Prompt Engineering",
  "AI Marketing",
  "Content Repurposing",
  "LLM Workflow",
  "AI Automation",
];

function AiContentCreationPlatformCaseStudy() {
  return (
    <>
      <PageHero
        eyebrow="Case Study"
        title="An AI-Powered Content Generation & Repurposing System"
        lead="An AI-powered content creation workflow that transforms ideas, topics and source material into multiple forms of publish-ready content."
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
              Designed an AI-powered content creation workflow that helps transform ideas, topics and
              source material into multiple forms of publish-ready content.
            </p>
            <p>
              The goal was to move from isolated AI content generation toward a{" "}
              <strong>structured content-production pipeline</strong>.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>The Challenge</h2>
            <p>Creating high-quality content consistently requires several activities:</p>
            <ul>
              {ACTIVITIES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Generating one piece of content with AI is easy. Building a{" "}
              <strong>repeatable content engine</strong> is the larger engineering challenge.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Solution</h2>
            <p>The platform treats content creation as a pipeline.</p>
            <pre className="code-block">{SOLUTION_PIPELINE}</pre>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Multi-Format Content</h2>
            <p>A single source can be transformed into multiple content formats.</p>
            <pre className="code-block">{MULTI_FORMAT}</pre>
            <p>This increases the value extracted from the original content.</p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Prompt Architecture</h2>
            <p>Instead of relying on a single generic prompt, the system can separate responsibilities:</p>
            <div className="card-grid">
              {PROMPT_LAYERS.map((item) => (
                <article className="info-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
            <p>This creates a more controllable AI pipeline.</p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Structured Output</h2>
            <p>The content-generation workflow can return structured information such as:</p>
            <pre className="code-block">{STRUCTURED_OUTPUT}</pre>
            <p>This makes the AI output suitable for automation and downstream systems.</p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Human Review</h2>
            <p>AI-generated content can pass through a review stage before publication.</p>
            <pre className="code-block">{REVIEW_FLOW}</pre>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Business Value</h2>
            <p>
              The platform transforms content production from a manual sequence into an{" "}
              <strong>AI-assisted production system</strong>.
            </p>
            <p>It can support:</p>
            <div className="chip-grid">
              {SUPPORTS.map((item) => (
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

export default AiContentCreationPlatformCaseStudy;
