import { Link } from "react-router-dom";
import Seo from "../../components/Seo";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";

const SECTIONS = [
  {
    title: "Executive Summary",
    body: "An enterprise insurance platform focused on complex business workflows, secure APIs, structured modules and cloud-ready delivery.",
  },
  {
    title: "Business Problem",
    body: "Insurance operations often span fragmented policy workflows, manual handoffs and disconnected systems that reduce visibility and slow delivery.",
  },
  {
    title: "Existing Architecture",
    body: "Legacy or siloed application patterns with tightly coupled UI/business logic and limited reuse across operational modules.",
  },
  {
    title: "Challenges",
    body: "Complex domain workflows, authentication/authorization needs, integration points, reliability expectations and long-term maintainability.",
  },
  {
    title: "Proposed Architecture",
    body: "A layered enterprise architecture separating presentation, application services, APIs, data and cloud infrastructure with clear module boundaries.",
  },
  {
    title: "Technical Architecture",
    body: "Frontend application layer → API gateway/services → domain services → data stores → cloud infrastructure, with secure auth and integration adapters.",
  },
  {
    title: "Frontend",
    body: "Modern React-based interfaces for operational workflows, dashboards and process-driven screens.",
  },
  {
    title: "Backend & APIs",
    body: "Node.js / .NET services exposing REST APIs for policy, workflow and operational use cases.",
  },
  {
    title: "Database",
    body: "Relational data modeling with PostgreSQL/SQL Server patterns for transactional business records.",
  },
  {
    title: "Authentication & Security",
    body: "Authentication/authorization controls, secure API design and protected operational access paths.",
  },
  {
    title: "Cloud Infrastructure",
    body: "AWS-oriented deployment patterns supporting scalable services, environment separation and operational monitoring.",
  },
  {
    title: "Business Workflows & Integrations",
    body: "Structured process flows and integrations that connect insurance operations across systems.",
  },
  {
    title: "My Role",
    body: "Full stack engineering and solution architecture support across application design, APIs, workflows and delivery.",
  },
  {
    title: "Results / Impact",
    body: "Improved operational visibility and reduced fragmented manual processes through a centralized application approach.",
  },
  {
    title: "Lessons Learned",
    body: "Clear domain boundaries, secure API contracts and cloud-ready modularity matter as much as feature delivery in enterprise insurance systems.",
  },
];

export default function InsuranceCaseStudy() {
  return (
    <>
      <Seo
        title="Enterprise Insurance Platform Case Study | Tushant Rajpal"
        description="Enterprise insurance platform case study covering architecture, full-stack delivery, APIs, security, cloud and business workflows."
        path="/case-studies/insurance-platform"
      />
      <PageHero
        eyebrow="Case Study"
        title="Enterprise Insurance Platform"
        lead="Insurance | Enterprise Application | Full Stack | Cloud"
        actions={
          <Link className="btn btn--ghost" to="/case-studies">
            ← All Case Studies
          </Link>
        }
      />
      <section className="section">
        <div className="section__inner case-study">
          <Reveal className="arch-diagram arch-diagram--stack">
            {["Business Layer", "Application Layer", "API Layer", "Service Layer", "Data Layer", "Cloud Infrastructure"].map(
              (layer) => (
                <div className="arch-diagram__layer" key={layer}>
                  <h3>{layer}</h3>
                </div>
              )
            )}
          </Reveal>

          {SECTIONS.map((section) => (
            <Reveal as="article" className="case-block" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </Reveal>
          ))}

          <div className="chip-grid">
            {["React", "Node.js", ".NET", "PostgreSQL", "REST APIs", "AWS", "Auth", "Integrations"].map((item) => (
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
