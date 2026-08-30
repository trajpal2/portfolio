import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata = PAGE_SEO["case-studies/jest-to-vitest-migration"];

const JEST_APIS = `jest.useFakeTimers()
jest.clearAllMocks()
jest.fn()
jest.spyOn()
jest.mock()`;

const API_MAPPINGS = `jest.fn()              → vi.fn()
jest.spyOn()           → vi.spyOn()
jest.mock()            → vi.mock()
jest.useFakeTimers()   → vi.useFakeTimers()
jest.clearAllMocks()   → vi.clearAllMocks()
jest.resetAllMocks()   → vi.resetAllMocks()`;

const MIGRATION_ARCHITECTURE = `Existing React Application
          │
          ▼
      Vite Build
          │
          ▼
   Vitest Test Runner
          │
     ┌────┴────┐
     ▼         ▼
 Unit Tests   Integration Tests`;

const EVALUATION_POINTS = [
  "Jest globals",
  "Jest configuration",
  "Mock behavior",
  "Timer behavior",
  "Module mocking",
  "Environment configuration",
  "Setup files",
  "Snapshot behavior",
  "TypeScript definitions",
  "Vite compatibility",
];

const CONTRIBUTIONS = [
  "Test architecture analysis",
  "Jest API identification",
  "Jest-to-Vitest API migration",
  "Test configuration migration",
  "Mocking migration",
  "Timer migration",
  "Vite/Vitest compatibility analysis",
  "Test-suite stabilization",
];

const TECHNOLOGIES = [
  "React",
  "Vite",
  "TypeScript",
  "Jest",
  "Vitest",
  "JavaScript",
  "Unit Testing",
  "Test Automation",
];

const KEYWORDS = [
  "Jest Migration",
  "Vitest Migration",
  "React Testing",
  "Vite",
  "TypeScript",
  "Test Automation",
  "Frontend Architecture",
  "Technical Debt",
];

function JestToVitestCaseStudy() {
  return (
    <>
      <PageHero
        eyebrow="Case Study"
        title="Jest → Vitest Migration for a Vite + React Application"
        lead="A testing-stack modernization that systematically migrated Jest-specific APIs and configuration to Vitest in an existing Vite + React application."
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
              A testing-stack modernization project involving migration from Jest to Vitest in an existing
              Vite + React application.
            </p>
            <p>
              The challenge was not simply replacing one package with another. The project required
              understanding the existing test architecture and systematically migrating Jest-specific APIs
              and configuration.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Problem</h2>
            <p>The existing application contained many Jest-specific references, including APIs such as:</p>
            <pre className="code-block">{JEST_APIS}</pre>
            <p>A direct package replacement would leave the existing test suite incompatible.</p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Solution</h2>
            <p>
              The migration approach was based on systematically replacing Jest APIs with their Vitest
              equivalents.
            </p>
            <p>Common mappings include:</p>
            <pre className="code-block">{API_MAPPINGS}</pre>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Migration Architecture</h2>
            <pre className="code-block">{MIGRATION_ARCHITECTURE}</pre>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Key Consideration</h2>
            <p>A migration should not blindly perform global text replacement.</p>
            <p>The test suite needs to be evaluated for:</p>
            <div className="chip-grid">
              {EVALUATION_POINTS.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Why Vitest</h2>
            <p>
              For a Vite-based application, Vitest provides a testing environment closely aligned with the
              Vite ecosystem.
            </p>
            <p>
              The migration therefore reduces tooling mismatch and creates a more consistent development
              environment.
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
              Modernizing the test stack helps reduce technical debt and creates a more maintainable
              developer workflow.
            </p>
            <p>
              The key value is not simply changing the testing framework, but aligning the testing
              infrastructure with the application&apos;s existing build ecosystem.
            </p>
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

export default JestToVitestCaseStudy;
