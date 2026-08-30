import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { EXPERTISE_GROUPS, EXPERIENCE, SITE } from "@/lib/site";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata = PAGE_SEO["resume"];

function Resume() {
  return (
    <>
<PageHero
        eyebrow="Resume"
        title="Professional Resume"
        lead="Senior Full Stack Engineer / Full Stack Architect — 12+ years across enterprise applications, cloud and AI systems."
        actions={
          <a className="btn btn--primary" href="/resume.pdf" download="Tushant_Rajpal_Resume.pdf">
            Download Resume PDF
          </a>
        }
      />
      <section className="section">
        <div className="section__inner resume-view">
          <Reveal as="article" className="case-block">
            <h2>Professional Summary</h2>
            <p>
              {SITE.name} is a {SITE.title} with 12+ years of experience designing and delivering
              enterprise applications, SaaS platforms, cloud solutions and AI-powered systems.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Technical Skills</h2>
            {EXPERTISE_GROUPS.map((group) => (
              <div key={group.id} style={{ marginBottom: "1rem" }}>
                <h3>{group.title}</h3>
                <div className="chip-grid chip-grid--tight">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Experience</h2>
            {EXPERIENCE.map((item) => (
              <div key={`${item.company}-${item.role}`} style={{ marginBottom: "1.25rem" }}>
                <h3>
                  {item.role} — {item.company}
                </h3>
                <p>{item.duration}</p>
                <ul className="plain-list">
                  {item.responsibilities.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Contact</h2>
            <p>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <br />
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Resume;
