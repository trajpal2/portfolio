import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata = PAGE_SEO["case-studies/fullstack-backend-optimization"];

const APPROACH = `Existing Application
        │
        ▼
Architecture Review
        │
        ▼
Performance Profiling
        │
        ▼
Bottleneck Identification
        │
        ▼
Backend Optimization
        │
        ▼
Database/API Optimization
        │
        ▼
Testing
        │
        ▼
Deployment Validation`;

const SYMPTOMS = [
  "Slow APIs",
  "Inefficient database queries",
  "Repeated business logic",
  "Poor separation of concerns",
  "Difficult-to-maintain services",
  "Excessive API calls",
  "Inefficient data processing",
  "Difficult debugging",
];

const API_REVIEWS = [
  "Request/response patterns",
  "API latency",
  "Payload size",
  "Duplicate requests",
  "Error handling",
  "Authentication flows",
];

const DB_REVIEWS = [
  "Query efficiency",
  "Indexing",
  "Data access patterns",
  "N+1 queries",
  "Unnecessary database calls",
];

const APP_REVIEWS = [
  "Business logic",
  "Service boundaries",
  "Reusable components",
  "Async processing",
  "Error handling",
  "Caching opportunities",
];

const CONTRIBUTIONS = [
  "Backend architecture analysis",
  "Performance bottleneck identification",
  "API optimization",
  "Database optimization",
  "Code-level improvements",
  "Full-stack integration",
  "Testing and validation",
  "Technical architecture recommendations",
];

const BUSINESS_VALUE = [
  "Handle more traffic",
  "Respond faster",
  "Reduce unnecessary infrastructure consumption",
  "Improve developer productivity",
  "Reduce operational issues",
  "Support future feature development",
];

const TECHNOLOGIES = [
  "Backend APIs",
  "Databases",
  "Full-Stack Development",
  "Performance Engineering",
  "System Architecture",
  "Testing",
  "Cloud/Deployment",
];

const KEYWORDS = [
  "Backend Optimization",
  "API Optimization",
  "Full Stack Development",
  "Performance Engineering",
  "Database Optimization",
  "Software Architecture",
  "Technical Debt",
];

function BackendOptimizationCaseStudy() {
  return (
    <>
      <PageHero
        eyebrow="Case Study"
        title="Improving Performance, Maintainability and Scalability of an Existing Application"
        lead="A full-stack backend optimization project focused on analyzing an existing application, identifying bottlenecks, and improving the backend without unnecessarily rewriting the entire system."
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
              A full-stack backend optimization project focused on analyzing an existing application,
              identifying performance and architectural bottlenecks, and improving the backend without
              unnecessarily rewriting the entire system.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Problem</h2>
            <p>Mature applications often accumulate technical debt as features are added over time.</p>
            <p>Typical symptoms include:</p>
            <ul>
              {SYMPTOMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>The objective was to improve the existing system while minimizing disruption.</p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Approach</h2>
            <p>The optimization process follows a structured sequence:</p>
            <pre className="code-block">{APPROACH}</pre>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Areas of Optimization</h2>

            <h3>API Layer</h3>
            <p>Reviewing:</p>
            <div className="chip-grid">
              {API_REVIEWS.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <h3>Database Layer</h3>
            <p>Reviewing:</p>
            <div className="chip-grid">
              {DB_REVIEWS.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <h3>Application Layer</h3>
            <p>Reviewing:</p>
            <div className="chip-grid">
              {APP_REVIEWS.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Architecture Principle</h2>
            <p>
              The goal is to optimize based on measured bottlenecks rather than prematurely rewriting
              working systems.
            </p>
            <p>This produces a more controlled modernization strategy:</p>
            <p>
              <strong>Measure → Identify → Optimize → Test → Validate</strong>
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
            <p>Backend optimization can improve the application&apos;s ability to:</p>
            <ul>
              {BUSINESS_VALUE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Technologies</h2>
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

export default BackendOptimizationCaseStudy;
