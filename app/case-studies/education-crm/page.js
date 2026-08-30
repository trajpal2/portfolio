import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata = PAGE_SEO["case-studies/education-crm"];

const STUDENT_JOURNEY = `Discover Institution
       ↓
Submit Enquiry
       ↓
Counselling
       ↓
Application
       ↓
Documentation
       ↓
Admission
       ↓
Enrollment`;

const SOLUTION_ARCHITECTURE = `                 Education CRM
                       │
       ┌───────────────┼────────────────┐
       ▼               ▼                ▼
    Leads          Students        Admissions
       │               │                │
       └───────────────┼────────────────┘
                       ▼
                Communication
                       │
             ┌─────────┴─────────┐
             ▼                   ▼
          Email                Tasks`;

const LEAD_WORKFLOW = `Lead Generated
      ↓
Lead Assigned
      ↓
Counsellor Follow-up
      ↓
Interaction Recorded
      ↓
Qualification
      ↓
Application
      ↓
Admission
      ↓
Enrollment`;

const FUNCTIONAL_AREAS = [
  {
    title: "Lead Management",
    body: "Capture and manage prospective student enquiries.",
  },
  {
    title: "Student Management",
    body: "Maintain student information and interaction history.",
  },
  {
    title: "Admission Pipeline",
    body: "Track applicants through different admission stages.",
  },
  {
    title: "Follow-up Management",
    body: "Manage tasks and follow-ups for counsellors and admission teams.",
  },
  {
    title: "Communication",
    body: "Centralize communication associated with prospects and students.",
  },
  {
    title: "Reporting",
    body: "Provide visibility into the education sales/admission pipeline.",
  },
];

const BUSINESS_VALUE = [
  "Centralized student information",
  "Better lead visibility",
  "Structured admission workflows",
  "Improved follow-up management",
  "Better communication tracking",
  "Operational reporting",
];

const CONTRIBUTIONS = [
  "CRM architecture",
  "Education workflow design",
  "Backend development",
  "API development",
  "Database architecture",
  "Lead-management workflows",
  "Student lifecycle management",
  "Admission workflow design",
  "Frontend integration",
];

const TECHNOLOGIES = [
  "React",
  "TypeScript/JavaScript",
  "Backend APIs",
  "Database",
  "CRM Architecture",
  "Web Application",
];

const KEYWORDS = [
  "Education CRM",
  "Student CRM",
  "Admission CRM",
  "EdTech",
  "Education Software",
  "Lead Management",
  "Student Management System",
  "CRM Development",
  "EdTech Platform",
];

function EducationCrmCaseStudy() {
  return (
    <>
      <PageHero
        eyebrow="Case Study"
        title="A CRM Platform Designed for the Education Industry"
        lead="Designed and developed an education-focused CRM to manage prospective students, admissions, communication and operational workflows through a centralized platform."
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
              Designed and developed an education-focused CRM to help educational organizations manage
              prospective students, admissions activities, communication and operational workflows through
              a centralized platform.
            </p>
            <p>
              The system was designed around the unique requirements of education and admission-driven
              organizations rather than treating education as a generic CRM use case.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>The Challenge</h2>
            <p>Educational organizations typically interact with prospective students across multiple stages.</p>
            <p>A prospective student may:</p>
            <pre className="code-block">{STUDENT_JOURNEY}</pre>
            <p>
              Without a centralized system, information can become fragmented across spreadsheets, emails,
              phone calls and different internal systems.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Solution</h2>
            <p>The Education CRM provides a centralized platform for managing the student lifecycle.</p>
            <pre className="code-block">{SOLUTION_ARCHITECTURE}</pre>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Core Functional Areas</h2>
            <div className="card-grid">
              {FUNCTIONAL_AREAS.map((item) => (
                <article className="info-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Workflow Architecture</h2>
            <p>A typical lead workflow can be represented as:</p>
            <pre className="code-block">{LEAD_WORKFLOW}</pre>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Architecture Principle</h2>
            <p>The platform separates core CRM functionality from individual education workflows.</p>
            <p>
              This allows the system to support different institutions and admission processes without
              tightly coupling the entire application.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Business Value</h2>
            <p>The platform provides educational organizations with:</p>
            <ul>
              {BUSINESS_VALUE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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

export default EducationCrmCaseStudy;
