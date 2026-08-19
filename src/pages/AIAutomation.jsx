import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const CAPABILITIES = [
  "AI Agents",
  "LLM Applications",
  "RAG",
  "AI Chatbots",
  "Agent Orchestration",
  "Google ADK",
  "LangGraph",
  "LangChain",
  "AI APIs",
  "Workflow Automation",
  "n8n",
  "Make",
  "API Integrations",
];

export default function AIAutomation() {
  return (
    <>
      <Seo
        title="AI Agents, RAG & Automation | Tushant Rajpal"
        description="AI engineering and intelligent automation spanning agents, RAG, LLM apps, Google ADK, LangGraph and n8n workflows."
        path="/ai-automation"
      />
      <PageHero
        eyebrow="AI & Automation"
        title="AI Engineering & Intelligent Automation"
        lead="From AI experiments to business automation connected to real platforms and workflows."
      />
      <section className="section">
        <div className="section__inner">
          <Reveal>
            <h2>Capabilities</h2>
            <div className="chip-grid chip-grid--wide">
              {CAPABILITIES.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="case-block" style={{ marginTop: "2rem" }}>
            <h2>From AI Experiment to Business Automation</h2>
            <pre className="code-block">{`Business Problem
       ↓
AI Strategy
       ↓
Agent / LLM
       ↓
Business Logic
       ↓
API Integration
       ↓
Automation
       ↓
Monitoring`}</pre>
          </Reveal>

          <div className="hero__actions" style={{ marginTop: "1.5rem" }}>
            <Link className="btn btn--primary" to="/case-studies/dialogflow-google-adk">
              Google ADK Case Study
            </Link>
            <Link className="btn btn--ghost" to="/case-studies/ai-n8n-automation">
              n8n Automation Case Study
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
