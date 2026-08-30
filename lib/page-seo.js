/**
 * Per-page SEO strategy (Search Console–ready).
 *
 * For each route:
 * 1) Page intent from content
 * 2) High-intent / high-engagement keywords
 * 3) Click-worthy title + meta description
 * 4) Applied via buildPageMetadata() → title, keywords, OG, Twitter, canonical
 */
import { buildPageMetadata } from "@/lib/seo";

export const PAGE_SEO = {
  home: buildPageMetadata({
    path: "/",
    title: "Senior Full Stack Engineer & Architect | React, Node.js, AI Systems",
    description:
      "Hire Tushant Rajpal — Senior Full Stack Engineer & Full Stack Architect with 12+ years building scalable enterprise apps, AI platforms, cloud systems and business automation.",
    keywords: [
      "senior full stack engineer",
      "full stack architect",
      "React developer",
      "Node.js architect",
      "AI engineer portfolio",
      "enterprise application development",
      "cloud architecture",
      "business automation expert",
      "hire full stack developer",
      "Next.js portfolio",
    ],
  }),

  about: buildPageMetadata({
    path: "/about",
    title: "About Tushant Rajpal | 12+ Years Full Stack & Architecture Experience",
    description:
      "Meet Tushant Rajpal — Senior Full Stack Engineer / Architect specializing in enterprise platforms, AI systems, CRM/ERP and cloud-ready digital products.",
    keywords: [
      "about Tushant Rajpal",
      "senior software engineer profile",
      "full stack engineer experience",
      "solution architect biography",
      "enterprise software engineer",
      "AI systems engineer",
    ],
  }),

  expertise: buildPageMetadata({
    path: "/expertise",
    title: "Full Stack, AI, Cloud & Architecture Expertise | Engineering Skills",
    description:
      "Explore expertise in React, Next.js, Node.js, .NET, PostgreSQL, cloud/DevOps, AI agents, RAG, n8n automation and enterprise system architecture.",
    keywords: [
      "full stack skills",
      "React Next.js TypeScript",
      "Node.js .NET backend",
      "AI engineering skills",
      "cloud DevOps expertise",
      "system architecture skills",
      "workflow automation skills",
      "PostgreSQL API design",
    ],
  }),

  caseStudies: buildPageMetadata({
    path: "/case-studies",
    title: "Engineering Case Studies | AI, Automation, CRM & Architecture",
    description:
      "Real engineering case studies: AI CRM, n8n automation, education CRM, Vite migration, backend optimization, trading systems and more.",
    keywords: [
      "software engineering case studies",
      "AI architecture case study",
      "automation case studies",
      "CRM development case study",
      "full stack project portfolio",
      "system design case studies",
    ],
  }),

  projects: buildPageMetadata({
    path: "/projects",
    title: "Enterprise, AI & Automation Projects | Selected Engineering Work",
    description:
      "Browse selected projects across enterprise applications, AI agents, n8n automation, e-commerce, CRM platforms and scalable software architecture.",
    keywords: [
      "full stack projects",
      "AI automation projects",
      "enterprise software projects",
      "CRM ERP projects",
      "React Node.js portfolio projects",
      "software architect projects",
    ],
  }),

  architecture: buildPageMetadata({
    path: "/architecture",
    title: "Enterprise & AI Architecture Patterns | Scalable System Design",
    description:
      "Learn how Tushant designs enterprise architecture, AI agent orchestration and event-driven systems for scalable, maintainable software platforms.",
    keywords: [
      "enterprise architecture",
      "system design patterns",
      "AI architecture",
      "event-driven architecture",
      "scalable software architecture",
      "solution architecture portfolio",
    ],
  }),

  aiAutomation: buildPageMetadata({
    path: "/ai-automation",
    title: "AI Agents, RAG & n8n Automation | Intelligent Workflow Engineering",
    description:
      "AI engineering for LLM apps, RAG systems, Google ADK agents, LangGraph orchestration and n8n business automation that connects AI to real systems.",
    keywords: [
      "AI agents",
      "RAG architecture",
      "n8n automation",
      "LLM applications",
      "Google ADK",
      "LangGraph",
      "intelligent automation",
      "AI workflow orchestration",
      "business process automation AI",
    ],
  }),

  industries: buildPageMetadata({
    path: "/industries",
    title: "Industry Experience | Insurance, FinTech, EdTech, SaaS & Healthcare",
    description:
      "Cross-industry engineering experience in insurance, banking, real estate, travel, e-commerce, education, healthcare, SaaS and enterprise applications.",
    keywords: [
      "insurance software development",
      "fintech engineer",
      "edtech CRM",
      "healthcare software",
      "SaaS full stack developer",
      "e-commerce platform engineer",
      "enterprise industry experience",
    ],
  }),

  experience: buildPageMetadata({
    path: "/experience",
    title: "12+ Years Engineering Experience | Career & Impact Timeline",
    description:
      "Career progression from software engineering to full stack ownership, architecture, AI, cloud and automation — with measurable delivery impact.",
    keywords: [
      "senior engineer career",
      "full stack work experience",
      "software architect experience",
      "engineering leadership timeline",
      "AI cloud automation experience",
    ],
  }),

  resume: buildPageMetadata({
    path: "/resume",
    title: "Resume | Senior Full Stack Engineer PDF & Online Profile",
    description:
      "View or download Tushant Rajpal's resume — skills, experience, architecture achievements and AI/automation delivery highlights for hiring managers.",
    keywords: [
      "senior full stack engineer resume",
      "download software engineer CV",
      "React Node.js resume",
      "solution architect resume",
      "hire full stack developer resume",
    ],
  }),

  contact: buildPageMetadata({
    path: "/contact",
    title: "Contact | Hire a Senior Full Stack Engineer & Architect",
    description:
      "Start a conversation with Tushant Rajpal about architecture, enterprise apps, AI systems, CRM platforms or automation solutions. Fast response.",
    keywords: [
      "hire full stack engineer",
      "contact software architect",
      "hire React Node.js developer",
      "AI automation consultant contact",
      "enterprise software consulting",
    ],
  }),

  sitemap: buildPageMetadata({
    path: "/sitemap",
    title: "HTML Sitemap | All Portfolio Pages & Case Studies",
    description:
      "Browse every public page and case study on Tushant Rajpal's portfolio — optimized for navigation and Google Search Console discovery.",
    keywords: [
      "portfolio sitemap",
      "website page index",
      "case study directory",
      "SEO sitemap HTML",
    ],
  }),

  privacy: buildPageMetadata({
    path: "/privacy",
    title: "Privacy Policy | Portfolio Data Collection & Contact Use",
    description:
      "Privacy policy for Tushant Rajpal's personal engineering portfolio — how contact form data, logs and professional content are handled across industries and technologies.",
    keywords: [
      "portfolio privacy policy",
      "contact form privacy",
      "personal data portfolio website",
      "software engineer privacy policy",
      "visitor data protection",
    ],
  }),

  terms: buildPageMetadata({
    path: "/terms",
    title: "Terms & Conditions | Portfolio Website Use",
    description:
      "Terms of use for Tushant Rajpal's portfolio showcasing full stack, AI, cloud and automation work across multiple industries and technologies.",
    keywords: [
      "portfolio terms and conditions",
      "website terms of use",
      "case study intellectual property",
      "professional portfolio terms",
    ],
  }),

  dataDeletion: buildPageMetadata({
    path: "/data-deletion",
    title: "Data Deletion Request | Remove Contact & Personal Data",
    description:
      "Request deletion of personal data submitted via Tushant Rajpal's portfolio contact form or email — process, timeline and what can be removed.",
    keywords: [
      "data deletion request",
      "delete personal data",
      "contact form data removal",
      "GDPR data deletion portfolio",
      "right to be forgotten",
    ],
  }),

  thirdPartyAccess: buildPageMetadata({
    path: "/third-party-access",
    title: "Third-Party Access | Hosting, Email & External Services",
    description:
      "How hosting, SMTP email and linked professional platforms may process data when you use this multi-industry engineering portfolio — no sale of personal data.",
    keywords: [
      "third party data access",
      "portfolio data processors",
      "SMTP email privacy",
      "hosting provider access",
      "third party services disclosure",
    ],
  }),

  // —— Case studies ——
  "case-studies/insurance-platform": buildPageMetadata({
    path: "/case-studies/insurance-platform",
    title: "Enterprise Insurance Platform Case Study | Full Stack & Cloud",
    description:
      "How a layered enterprise insurance platform was designed — React, APIs, PostgreSQL, security and AWS cloud for complex policy and operations workflows.",
    keywords: [
      "insurance software architecture",
      "enterprise insurance platform",
      "full stack insurance case study",
      "policy management system",
      "insurance CRM ERP",
      "cloud insurance application",
    ],
    ogType: "article",
  }),

  "case-studies/dialogflow-google-adk": buildPageMetadata({
    path: "/case-studies/dialogflow-google-adk",
    title: "Dialogflow to Google ADK Migration | AI Agent Orchestration",
    description:
      "Case study: modernizing conversational AI from linear Dialogflow flows to specialized Google ADK agents with sequential, parallel and graph orchestration.",
    keywords: [
      "Google ADK",
      "Dialogflow migration",
      "AI agent orchestration",
      "conversational AI architecture",
      "multi-agent systems",
      "LLM agent case study",
    ],
    ogType: "article",
  }),

  "case-studies/ai-n8n-automation": buildPageMetadata({
    path: "/case-studies/ai-n8n-automation",
    title: "n8n Business Automation Platform | Control Plane Architecture",
    description:
      "Architected a scalable n8n automation platform with Node.js/PostgreSQL control plane — CRM, email, AI workflows, Redis workers and monitoring.",
    keywords: [
      "n8n automation platform",
      "n8n architecture",
      "workflow automation SaaS",
      "business process automation",
      "n8n Redis queue workers",
      "AI n8n orchestration",
    ],
    ogType: "article",
  }),

  "case-studies/linkedin-personal-branding": buildPageMetadata({
    path: "/case-studies/linkedin-personal-branding",
    title: "LinkedIn Personal Branding Automation | AI + n8n Content System",
    description:
      "Build a LinkedIn content engine with AI topic discovery, structured posts, image generation and human approval before publishing via n8n.",
    keywords: [
      "LinkedIn automation",
      "AI LinkedIn content",
      "personal branding automation",
      "n8n LinkedIn workflow",
      "AI social media content",
      "prompt engineering LinkedIn",
    ],
    ogType: "article",
  }),

  "case-studies/crypto-options-trading": buildPageMetadata({
    path: "/case-studies/crypto-options-trading",
    title: "Crypto Options Algo Trading System | Python Backtesting Architecture",
    description:
      "Modular Python architecture for crypto options algorithmic trading — pluggable strategies, leverage risk management, backtesting and execution layers.",
    keywords: [
      "crypto options trading system",
      "algorithmic trading Python",
      "options backtesting engine",
      "quant trading architecture",
      "crypto algo bot design",
      "trading risk management system",
    ],
    ogType: "article",
  }),

  "case-studies/ai-video-transcription": buildPageMetadata({
    path: "/case-studies/ai-video-transcription",
    title: "AI Video Transcription Pipeline | Whisper Speech-to-Text Case Study",
    description:
      "Python pipeline that turns online video into text with Whisper — audio extraction, transcription and a path to summaries, blogs and knowledge bases.",
    keywords: [
      "AI video transcription",
      "Whisper speech to text",
      "video to text pipeline",
      "Python Whisper automation",
      "AI content from video",
      "NLP transcription system",
    ],
    ogType: "article",
  }),

  "case-studies/jest-to-vitest-migration": buildPageMetadata({
    path: "/case-studies/jest-to-vitest-migration",
    title: "Jest to Vitest Migration Guide | Vite React Testing Modernization",
    description:
      "Migrate a Vite + React app from Jest to Vitest — API mapping (jest.fn → vi.fn), mocks, timers, config and a stable modern test suite.",
    keywords: [
      "Jest to Vitest migration",
      "Vitest React testing",
      "Vite Vitest setup",
      "replace Jest with Vitest",
      "frontend test modernization",
      "vi.fn vi.mock migration",
    ],
    ogType: "article",
  }),

  "case-studies/fullstack-backend-optimization": buildPageMetadata({
    path: "/case-studies/fullstack-backend-optimization",
    title: "Backend Performance Optimization | API & Database Tuning Case Study",
    description:
      "Measure → identify → optimize: improve API latency, SQL queries, N+1 issues and service design without a risky full rewrite.",
    keywords: [
      "backend performance optimization",
      "API optimization",
      "database query optimization",
      "N+1 query fix",
      "full stack performance engineering",
      "reduce API latency",
    ],
    ogType: "article",
  }),

  "case-studies/cra-to-vite-migration": buildPageMetadata({
    path: "/case-studies/cra-to-vite-migration",
    title: "Create React App to Vite Migration | Faster React Build Tooling",
    description:
      "Modernize CRA to Vite for faster DX — env vars, entry points, assets, dependencies and testing with minimal application disruption.",
    keywords: [
      "CRA to Vite migration",
      "migrate Create React App to Vite",
      "Vite React upgrade",
      "frontend build modernization",
      "replace webpack CRA Vite",
      "React Vite performance",
    ],
    ogType: "article",
  }),

  "case-studies/ai-crm-integration": buildPageMetadata({
    path: "/case-studies/ai-crm-integration",
    title: "AI-Powered CRM Integration | LLM Agents for Sales & Support",
    description:
      "Add AI to CRM for customer summaries, lead analysis, intelligent search and follow-ups — context-aware LLMs with controlled CRM tools.",
    keywords: [
      "AI CRM",
      "AI powered CRM",
      "LLM CRM integration",
      "AI sales automation",
      "customer intelligence AI",
      "CRM AI agents",
      "generative AI CRM",
    ],
    ogType: "article",
  }),

  "case-studies/education-crm": buildPageMetadata({
    path: "/case-studies/education-crm",
    title: "Education CRM Case Study | Student Admissions & Lead Management",
    description:
      "EdTech CRM for enquiry-to-enrollment: lead management, counselling follow-ups, admission pipeline, communication and reporting for institutions.",
    keywords: [
      "education CRM",
      "student CRM",
      "admission management system",
      "EdTech CRM software",
      "student lead management",
      "education enrollment software",
    ],
    ogType: "article",
  }),

  "case-studies/linkedin-automation": buildPageMetadata({
    path: "/case-studies/linkedin-automation",
    title: "LinkedIn Content Automation with AI & n8n | Publish Faster",
    description:
      "Automate LinkedIn posting with trend discovery, AI writing, visuals and human-in-the-loop approval — a repeatable personal branding pipeline.",
    keywords: [
      "LinkedIn content automation",
      "n8n LinkedIn API",
      "AI LinkedIn posts",
      "social media automation AI",
      "LinkedIn publishing workflow",
      "personal branding AI tools",
    ],
    ogType: "article",
  }),

  "case-studies/marketing-email-automation": buildPageMetadata({
    path: "/case-studies/marketing-email-automation",
    title: "Marketing Email Automation | AI Personalization + n8n Workflows",
    description:
      "Scale email campaigns with n8n: audience segmentation, AI personalized content, delivery, tracking, CRM updates and production-grade reliability.",
    keywords: [
      "email marketing automation",
      "AI email personalization",
      "n8n email workflow",
      "lead nurturing automation",
      "CRM email automation",
      "marketing automation architecture",
    ],
    ogType: "article",
  }),

  "case-studies/ai-content-creation-platform": buildPageMetadata({
    path: "/case-studies/ai-content-creation-platform",
    title: "AI Content Creation Platform | Multi-Format Generative Pipelines",
    description:
      "Turn one idea into LinkedIn posts, blogs and newsletters with research, strategy, writing, editing, visuals and human review prompts.",
    keywords: [
      "AI content creation platform",
      "generative AI content pipeline",
      "content repurposing AI",
      "prompt engineering content",
      "AI marketing content system",
      "LLM content automation",
    ],
    ogType: "article",
  }),

  "case-studies/website-development": buildPageMetadata({
    path: "/case-studies/website-development",
    title: "Conversion-Focused Website Development | React Responsive SEO",
    description:
      "Design and ship a modern business website: component architecture, responsive UX, performance, SEO structure and conversion-focused journeys.",
    keywords: [
      "React website development",
      "conversion focused website",
      "responsive web design React",
      "SEO friendly website development",
      "frontend website architecture",
      "business website case study",
    ],
    ogType: "article",
  }),
};
