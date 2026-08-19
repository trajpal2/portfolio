import Reveal from "./Reveal";
import { AI_CAPABILITIES } from "../data/site";

const FLOW = ["AI Agents", "LLM / RAG", "APIs", "Workflows", "Business Systems"];

export default function AISection() {
  return (
    <section className="section section--alt" id="ai">
      <div className="section__inner">
        <p className="eyebrow">AI &amp; Automation</p>
        <h2>Building Software with AI at the Core</h2>
        <p className="section__lead">
          Designing intelligent systems that connect models, data and business workflows into
          production-ready products.
        </p>

        <Reveal className="ai-flow">
          {FLOW.map((step, index) => (
            <div className="ai-flow__step" key={step}>
              <span>{step}</span>
              {index < FLOW.length - 1 ? <span className="ai-flow__arrow" aria-hidden="true">→</span> : null}
            </div>
          ))}
        </Reveal>

        <div className="chip-grid">
          {AI_CAPABILITIES.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
