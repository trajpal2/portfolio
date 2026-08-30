import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata = PAGE_SEO["case-studies/crypto-options-trading"];

const ARCHITECTURE = `                  ┌─────────────────────┐
                  │   Market Data       │
                  │ Historical / Live   │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │ Data Processing     │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │ Strategy Engine     │
                  │ Separate Modules    │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │ Signal Generation   │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │ Risk Management     │
                  │ + Leverage          │
                  └──────────┬──────────┘
                             │
                 ┌───────────┴───────────┐
                 ▼                       ▼
        ┌─────────────────┐      ┌─────────────────┐
        │ Backtesting     │      │ Execution Layer │
        └─────────────────┘      └─────────────────┘`;

const PROJECT_LAYOUT = `project/
│
├── data/
│   └── historical/
│
├── strategies/
│   └── strategy_x.py
│
├── backtesting/
│   └── engine.py
│
├── risk/
│   └── risk_manager.py
│
├── execution/
│   └── executor.py
│
├── models/
│   └── options.py
│
└── main.py`;

const CORE_REQUIREMENTS = [
  "Cryptocurrency markets",
  "Options rather than futures",
  "10× leverage",
  "Pluggable trading strategies",
  "Separate backtesting",
  "Historical market data",
  "Dedicated data directory",
  "Modular Python implementation",
  "Separation of strategy and infrastructure",
];

const BACKTEST_EVAL = [
  "Entry signals",
  "Exit signals",
  "Position sizing",
  "Leverage",
  "Profit/loss",
  "Drawdown",
  "Trade history",
  "Strategy performance",
];

const RISK_FACTORS = [
  "Maximum position size",
  "Available capital",
  "Leverage",
  "Margin requirements",
  "Stop-loss logic",
  "Maximum drawdown",
  "Liquidation risk",
  "Portfolio exposure",
];

const TECHNOLOGIES = [
  "Python",
  "Algorithmic Trading",
  "Options",
  "Cryptocurrency",
  "Backtesting",
  "Quantitative Systems",
  "Modular Architecture",
  "Data Engineering",
];

const KEYWORDS = [
  "Crypto Algo Trading",
  "Options Trading System",
  "Python Trading Bot",
  "Quantitative Trading",
  "Backtesting Engine",
  "Trading Architecture",
  "Risk Management",
  "Algorithmic Trading",
  "Crypto Options",
];

function CryptoOptionsTradingCaseStudy() {
  return (
    <>
      <PageHero
        eyebrow="Case Study"
        title="Modular Crypto Options Algo-Trading & Backtesting System"
        lead="A modular Python architecture for algorithmic trading in the cryptocurrency options market, with leverage, pluggable strategies and independent backtesting."
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
            <p>A modular Python architecture for algorithmic trading in the cryptocurrency options market.</p>
            <p>
              The system was designed specifically around <strong>options trading</strong>, with leverage
              support, independent strategy modules, historical backtesting, and a structured data layer.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>The Challenge</h2>
            <p>
              Trading systems frequently become difficult to maintain when strategy logic, market-data
              handling, risk management, backtesting, and execution are tightly coupled.
            </p>
            <p>
              The objective was therefore to create a modular architecture where individual components
              could evolve independently.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Core Requirements</h2>
            <p>The architecture was designed around:</p>
            <ul>
              {CORE_REQUIREMENTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Proposed Architecture</h2>
            <pre className="code-block">{ARCHITECTURE}</pre>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Separation of Strategy and Infrastructure</h2>
            <p>
              One of the important architectural decisions was to keep trading strategies separate from the
              rest of the application.
            </p>
            <pre className="code-block">{PROJECT_LAYOUT}</pre>
            <p>
              This allows new strategies to be introduced without modifying the core trading
              infrastructure.
            </p>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Backtesting</h2>
            <p>
              Backtesting is treated as an independent component rather than embedding historical
              simulation into strategy code.
            </p>
            <p>This allows the same strategy interface to be evaluated against historical data.</p>
            <p>The backtesting engine can evaluate:</p>
            <div className="chip-grid">
              {BACKTEST_EVAL.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>Risk Architecture</h2>
            <p>Because the system uses leverage, risk management is an essential architectural component.</p>
            <p>The system should consider:</p>
            <div className="chip-grid">
              {RISK_FACTORS.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal as="article" className="case-block">
            <h2>My Contribution</h2>
            <p>
              The key engineering contribution is the <strong>modular system architecture</strong>,
              particularly the separation between:
            </p>
            <p>
              <strong>Data → Strategy → Risk → Backtesting → Execution</strong>
            </p>
            <p>This structure makes the platform easier to test, extend and maintain.</p>
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

export default CryptoOptionsTradingCaseStudy;
