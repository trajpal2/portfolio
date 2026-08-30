import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata = PAGE_SEO["case-studies/linkedin-personal-branding"];

const SOLUTION_DIAGRAM = `             ┌──────────────────────┐
             │ User Profile / Skills │
             └──────────┬───────────┘
                        │
                        ▼
             ┌──────────────────────┐
             │ Trending Topic       │
             │ Discovery            │
             └──────────┬───────────┘
                        │
                        ▼
             ┌──────────────────────┐
             │ AI Topic Evaluation  │
             └──────────┬───────────┘
                        │
                        ▼
             ┌──────────────────────┐
             │ Content Generation   │
             │ + Personal POV       │
             └──────────┬───────────┘
                        │
              ┌─────────┴─────────┐
              ▼                   ▼
       ┌─────────────┐     ┌─────────────┐
       │ Text Review │     │ Image Gen   │
       └──────┬──────┘     └──────┬──────┘
              └─────────┬─────────┘
                        ▼
               ┌────────────────┐
               │ Approval Gate  │
               └───────┬────────┘
                       ▼
               ┌────────────────┐
               │ LinkedIn API   │
               └────────────────┘`;

const STRUCTURED_OUTPUT = `{
  "topic": "...",
  "reason": "...",
  "content": "...",
  "audience": "...",
  "content_type": "...",
  "visual_prompt": "...",
  "hashtags": [...]
}`;

const CONTENT_FACTORS = [
  "Professional background",
  "Technical expertise",
  "Target audience",
  "Current trends",
  "Topic relevance",
  "Personal point of view",
  "Educational value",
  "Engagement potential",
  "LinkedIn formatting",
];

const CHALLENGES = [
  "Find relevant topics.",
  "Determine whether a topic is actually trending.",
  "Relate the topic to personal expertise.",
  "Develop an original point of view.",
  "Write the post.",
  "Create an image.",
  "Review the content.",
  "Publish it.",
  "Repeat every week.",
];

const CONTRIBUTIONS = [
  "Workflow architecture",
  "Prompt engineering",
  "AI content pipeline",
  "JSON-based structured output",
  "n8n automation",
  "LinkedIn publishing architecture",
  "AI image-generation workflow",
  "Human approval design",
];

const AUDIENCES = [
  "Founders",
  "CTOs",
  "Developers",
  "AI engineers",
  "Consultants",
  "Agencies",
  "Recruiters",
  "Technology companies",
];

const KEYWORDS = [
  "n8n Automation",
  "AI Automation",
  "LinkedIn Automation",
  "Prompt Engineering",
  "AI Content Generation",
  "Personal Branding Automation",
  "LLM Workflow",
  "AI Agents",
  "Social Media Automation",
  "Workflow Orchestration",
];

function LinkedInBrandingCaseStudy() {
  return (
    <>
      <PageHero
        eyebrow="Case Study"
        title="AI + n8n LinkedIn Content Automation Platform"
        lead="A personal-branding automation system that identifies topics, generates content and visuals with AI, and publishes through a human approval loop."
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
              A personal-branding automation system designed to identify relevant LinkedIn topics,
              generate content using AI, create supporting visual assets, and automate publishing.
            </p>
            <p>
              The objective was to convert personal expertise into a repeatable content-generation and
              distribution pipeline.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>The Challenge</h2>
            <p>Building a strong LinkedIn presence manually requires significant recurring effort:</p>
            <ol>
              {CHALLENGES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <p>
              The goal was to automate the repetitive portions while keeping human expertise and approval
              in the loop.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Solution</h2>
            <p>An AI-driven workflow was designed using n8n.</p>
            <pre className="code-block">{SOLUTION_DIAGRAM}</pre>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>AI Content Pipeline</h2>
            <p>
              The system uses structured prompts to ensure the AI does not simply generate generic
              social-media content.
            </p>
            <p>The content-generation process considers:</p>
            <div className="chip-grid">
              {CONTENT_FACTORS.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Structured Output</h2>
            <p>
              The topic-generation stage can return structured JSON containing information such as:
            </p>
            <pre className="code-block">{STRUCTURED_OUTPUT}</pre>
            <p>This makes the workflow easier to integrate with downstream automation.</p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Automation Architecture</h2>
            <p>n8n acts as the orchestration layer between:</p>
            <ul>
              <li>Topic discovery</li>
              <li>AI models</li>
              <li>Content processing</li>
              <li>Image generation</li>
              <li>Approval workflows</li>
              <li>LinkedIn publishing</li>
            </ul>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Important Design Decision</h2>
            <p>The workflow should not blindly publish AI-generated content.</p>
            <p>A human approval stage provides a control point before publishing.</p>
            <p>This creates a practical model:</p>
            <p>
              <strong>AI generates → Human validates → Automation publishes</strong>
            </p>
            <p>rather than:</p>
            <p>
              <strong>AI generates → AI publishes</strong>
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
            <h2>Business Value</h2>
            <p>
              The system transforms personal branding from a manually repeated activity into an automated
              content pipeline.
            </p>
            <p>It can be adapted for:</p>
            <div className="chip-grid">
              {AUDIENCES.map((item) => (
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

export default LinkedInBrandingCaseStudy;
