import Reveal from "./Reveal";

export default function ImpactSection() {
  return (
    <section className="section section--alt" id="impact">
      <div className="section__inner">
        <p className="eyebrow">Outcomes</p>
        <h2>Engineering That Delivers Business Impact</h2>
        <p className="section__lead">
          Outcomes grounded in delivered enterprise work — not invented metrics.
        </p>
        <div className="card-grid card-grid--three">
          <Reveal as="article" className="info-card">
            <h3>Operational Visibility</h3>
            <p>
              Centralized CRM and workflow platforms that reduced fragmented manual processes and
              improved reporting clarity.
            </p>
          </Reveal>
          <Reveal as="article" className="info-card">
            <h3>Delivery Reliability</h3>
            <p>
              Backend modernization and cloud practices that improved production stability and
              accelerated feature delivery.
            </p>
          </Reveal>
          <Reveal as="article" className="info-card">
            <h3>Intelligent Automation</h3>
            <p>
              AI-assisted communication and workflow automation that reduced repetitive operational
              effort across business systems.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
