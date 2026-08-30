import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata = PAGE_SEO["case-studies/website-development"];

const SOLUTION_ARCHITECTURE = `                    Website
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
      Header         Content         Footer
                       │
             ┌─────────┼─────────┐
             ▼         ▼         ▼
           Hero      Services   Solutions
             │         │         │
             └─────────┼─────────┘
                       ▼
                    CTA / Form`;

const RESPONSIVE_FLOW = `Desktop
   ↓
Tablet
   ↓
Mobile`;

const USER_JOURNEY = `Visitor
   ↓
Understand Problem
   ↓
Understand Solution
   ↓
Build Trust
   ↓
Explore Services
   ↓
Call to Action
   ↓
Lead / Contact`;

const NEEDS = [
  "Communicate the value proposition quickly",
  "Establish credibility",
  "Work across devices",
  "Provide clear navigation",
  "Guide visitors toward conversion",
  "Load efficiently",
  "Be maintainable",
  "Support future content and feature changes",
];

const COMPONENT_BENEFITS = [
  "Consistency",
  "Easier maintenance",
  "Faster future development",
  "Reduced duplication",
  "Better scalability",
];

const PERFORMANCE = [
  "Efficient asset loading",
  "Component optimization",
  "Appropriate image handling",
  "Minimizing unnecessary JavaScript",
  "Efficient API communication where required",
];

const SEO = [
  "Semantic HTML",
  "Page titles",
  "Meta descriptions",
  "Structured content",
  "Search-friendly headings",
  "Internal linking",
  "Relevant page content",
];

const CONTRIBUTIONS = [
  "Website architecture",
  "Frontend development",
  "Component architecture",
  "Responsive implementation",
  "UI development",
  "API integration where required",
  "Performance considerations",
  "SEO-friendly structure",
  "Deployment preparation",
];

const TECHNOLOGIES = [
  "React",
  "JavaScript/TypeScript",
  "HTML",
  "CSS",
  "REST APIs",
  "Responsive Web Design",
];

const KEYWORDS = [
  "Website Development",
  "React Development",
  "Frontend Development",
  "Responsive Website",
  "Web Application",
  "UI Development",
  "SEO-Friendly Website",
  "React Architecture",
  "Full-Stack Development",
];

function WebsiteDevelopmentCaseStudy() {
  return (
    <>
      <PageHero
        eyebrow="Case Study"
        title="Designing and Developing a Modern, Conversion-Focused Website"
        lead="A modern web presence focused on clear communication, responsive UX, maintainable frontend architecture and business conversion."
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
              Designed and developed a modern web presence with a focus on clear communication,
              responsive user experience, maintainable frontend architecture and business conversion.
            </p>
            <p>
              The project combined UI implementation with the underlying engineering required to create
              a production-ready website.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>The Challenge</h2>
            <p>A modern business website needs to achieve more than simply displaying information.</p>
            <p>It needs to:</p>
            <ul>
              {NEEDS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Solution</h2>
            <p>The website was developed around a modular frontend architecture.</p>
            <pre className="code-block">{SOLUTION_ARCHITECTURE}</pre>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Component-Based Architecture</h2>
            <p>Reusable UI components were used wherever possible.</p>
            <p>This provides:</p>
            <div className="chip-grid">
              {COMPONENT_BENEFITS.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Responsive Design</h2>
            <p>
              The website architecture accounts for different screen sizes and interaction patterns.
            </p>
            <pre className="code-block">{RESPONSIVE_FLOW}</pre>
            <p>
              Rather than creating separate applications for each device, responsive components adapt
              the interface according to the available viewport.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Performance</h2>
            <p>Performance considerations include:</p>
            <div className="chip-grid">
              {PERFORMANCE.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>SEO Considerations</h2>
            <p>
              The website architecture also needs to support search-engine discoverability through:
            </p>
            <div className="chip-grid">
              {SEO.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Business-Focused Design</h2>
            <p>
              The website was treated as a business asset rather than simply a frontend implementation.
            </p>
            <p>The user journey follows:</p>
            <pre className="code-block">{USER_JOURNEY}</pre>
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

export default WebsiteDevelopmentCaseStudy;
