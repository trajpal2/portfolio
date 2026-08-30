import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Link from "next/link";

/**
 * Shared layout for Privacy, Terms, Data Deletion, and Third-Party Access pages.
 */
export default function LegalDoc({ eyebrow, title, lead, lastUpdated, sections, relatedLinks }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lead={lead} />
      <section className="section">
        <div className="section__inner legal-doc">
          {lastUpdated ? (
            <p className="legal-doc__updated">Last updated: {lastUpdated}</p>
          ) : null}

          {sections.map((section) => (
            <Reveal as="article" className="legal-doc__block" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs?.map((text, index) => (
                <p key={`${section.heading}-p-${index}`}>{text}</p>
              ))}
              {section.list ? (
                <ul>
                  {section.list.map((item, index) => (
                    <li key={`${section.heading}-li-${index}`}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {section.note ? <p className="legal-doc__note">{section.note}</p> : null}
            </Reveal>
          ))}

          {relatedLinks?.length ? (
            <Reveal as="nav" className="legal-doc__related" aria-label="Related legal pages">
              <h2>Related pages</h2>
              <ul>
                {relatedLinks.map((link) => (
                  <li key={link.to}>
                    <Link href={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}
        </div>
      </section>
    </>
  );
}
