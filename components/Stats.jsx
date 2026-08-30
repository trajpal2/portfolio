import { STATS } from "@/lib/site";

export default function Stats() {
  return (
    <section className="stats" aria-label="Credibility highlights">
      <div className="stats__inner">
        {STATS.map((stat) => (
          <div className="stats__item" key={`${stat.value}-${stat.label}`}>
            <p className="stats__value">{stat.value}</p>
            <p className="stats__label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
