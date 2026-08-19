export default function PageHero({ eyebrow, title, lead, actions }) {
  return (
    <section className="page-hero-band">
      <div className="section__inner">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {lead ? <p className="section__lead page-hero-band__lead">{lead}</p> : null}
        {actions ? <div className="hero__actions">{actions}</div> : null}
      </div>
    </section>
  );
}
