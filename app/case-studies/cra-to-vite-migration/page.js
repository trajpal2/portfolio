import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata = PAGE_SEO["case-studies/cra-to-vite-migration"];

const SOLUTION_FLOW = `Existing React Application
          │
          ▼
   CRA Build System
          │
    Migration Analysis
          │
          ▼
   Vite Configuration
          │
          ▼
 React Application
          │
    ┌─────┴─────┐
    ▼           ▼
Development   Production
   Build         Build`;

const CONSIDERATIONS = [
  "Existing React components and application behavior",
  "Existing environment variables",
  "Build configuration",
  "Development server behavior",
  "Static assets",
  "CSS processing",
  "Testing infrastructure",
  "Third-party dependencies",
  "Production builds",
  "CI/CD compatibility",
];

const MIGRATION_AREAS = [
  {
    title: "Build Configuration",
    body: "Replaced CRA's build system with Vite and introduced the required Vite configuration.",
  },
  {
    title: "Environment Variables",
    body: "Reviewed environment-variable usage and adapted it to Vite's environment-variable conventions.",
  },
  {
    title: "Application Entry Point",
    body: "Updated the application bootstrap process to work with Vite's expected entry structure.",
  },
  {
    title: "Static Assets",
    body: "Reviewed asset handling and import patterns to ensure compatibility with Vite.",
  },
  {
    title: "Dependencies",
    body: "Audited dependencies that relied on CRA-specific behavior and updated them where required.",
  },
  {
    title: "Testing",
    body: "The migration also required evaluating the existing testing environment and its compatibility with the new Vite-based architecture.",
  },
];

const CONTRIBUTIONS = [
  "Frontend architecture analysis",
  "CRA-to-Vite migration",
  "Build configuration",
  "Dependency analysis",
  "Environment configuration",
  "Asset migration",
  "Application bootstrap migration",
  "Development workflow modernization",
  "Testing compatibility",
  "Migration validation",
];

const TECHNOLOGIES = [
  "React",
  "JavaScript/TypeScript",
  "Vite",
  "HTML",
  "CSS",
  "Frontend Testing",
  "npm",
];

const KEYWORDS = [
  "CRA to Vite Migration",
  "React Migration",
  "Vite Migration",
  "Frontend Modernization",
  "React Architecture",
  "Frontend Performance",
  "Build Optimization",
  "Technical Debt",
  "JavaScript",
  "TypeScript",
];

function CraToViteCaseStudy() {
  return (
    <>
      <PageHero
        eyebrow="Case Study"
        title="Modernizing a React Application from Create React App to Vite"
        lead="Migrated frontend build and development infrastructure from CRA to Vite — improving DX and modernizing the toolchain without a full application rewrite."
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
              Modernized an existing React application by migrating its frontend build and development
              infrastructure from <strong>Create React App (CRA) to Vite</strong>.
            </p>
            <p>
              The project focused on improving the development experience, modernizing the frontend
              toolchain, and creating a foundation that could support the application&apos;s continued
              evolution without requiring a complete rewrite.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>The Challenge</h2>
            <p>
              The application was originally built using Create React App. As the application evolved,
              the existing build setup became a limitation for modern frontend development.
            </p>
            <p>
              The migration needed to preserve the existing application while introducing a modern
              development and build environment.
            </p>
            <p>Key considerations included:</p>
            <ul>
              {CONSIDERATIONS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              The objective was therefore not simply to replace CRA with Vite, but to{" "}
              <strong>
                modernize the frontend infrastructure while minimizing application-level disruption
              </strong>
              .
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Solution</h2>
            <p>The migration was approached incrementally.</p>
            <pre className="code-block">{SOLUTION_FLOW}</pre>
            <p>
              The application codebase was retained wherever possible while the build and tooling layer
              was migrated.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Key Migration Areas</h2>
            <div className="card-grid">
              {MIGRATION_AREAS.map((item) => (
                <article className="info-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Engineering Approach</h2>
            <p>The migration followed:</p>
            <p>
              <strong>Analyze → Migrate → Run → Test → Fix → Validate</strong>
            </p>
            <p>rather than performing a blind configuration replacement.</p>
            <p>This reduced the risk of introducing subtle runtime or build-time issues.</p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Business Value</h2>
            <p>
              The migration creates a more modern frontend foundation and improves the
              application&apos;s ability to evolve with the current React ecosystem.
            </p>
            <p>
              It also provides a cleaner foundation for future development, testing, and frontend
              tooling.
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

export default CraToViteCaseStudy;
