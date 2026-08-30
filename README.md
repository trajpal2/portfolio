# Tushant Rajpal — Portfolio

Personal portfolio website for **Tushant Rajpal**, Senior Full Stack Engineer / Full Stack Architect.

The site presents **12+ years** of experience building enterprise applications, cloud platforms, AI systems, CRM/ERP solutions, and business automation — with detailed case studies across multiple industries and technologies.

**Live focus:** professional positioning, searchable case studies, and a clear path to contact for architecture, AI, and full-stack engagements.

---

## About

| | |
| --- | --- |
| **Role** | Senior Full Stack Engineer \| Full Stack Architect |
| **Strengths** | Enterprise apps · AI agents / RAG · n8n automation · Cloud · System architecture |
| **Email** | tushant.rajpal23@gmail.com |
| **LinkedIn** | trajpal |
| **GitHub** | trajpal2 |

---

## Features

- **Next.js 15 App Router** — SSR-friendly pages optimized for SEO and Google Search Console
- **Case studies** — Architecture-led write-ups (insurance, AI CRM, n8n automation, migrations, trading, and more)
- **Contact form** — Nodemailer SMTP delivery (admin notification + visitor confirmation)
- **Theme support** — Light / dark / system preference
- **SEO toolkit** — Per-page metadata, Open Graph / Twitter tags, JSON-LD, `robots.txt`, XML + HTML sitemaps
- **Legal pages** — Privacy, Terms, Data Deletion, Third-Party Access
- **Typography** — Inter (professional, readable, architect-portfolio tone)
- **Standalone build** — `output: "standalone"` for container / VPS / cPanel-friendly deploys

---

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| UI | React 18, custom CSS (`app/globals.css`) |
| Fonts | Inter via `next/font` |
| Email | Nodemailer (SMTP) |
| SEO | Metadata API, JSON-LD, generated `sitemap.xml` |

---

## Project structure

```text
app/                 # Routes (pages + API)
  api/contact/       # Contact form endpoint
  api/health/        # Health check
  case-studies/      # Individual case study pages
  privacy|terms|…    # Legal pages
components/          # Shared UI (Header, Footer, Hero, LegalDoc, …)
lib/                 # Site content, SEO helpers, routes, mail
  site.js            # Portfolio copy, nav, case study summaries
  page-seo.js        # Per-route titles, descriptions, keywords
  seo.js             # Metadata + JSON-LD builders
hooks/               # Client hooks (e.g. reveal-on-scroll)
scripts/             # sitemap.xml generator
public/              # Static assets + sitemap.xml
```

Content and case-study listings are primarily driven from `lib/site.js`. SEO for each route lives in `lib/page-seo.js`.

---

## Getting started

### Prerequisites

- Node.js **18+** (recommended: 20 LTS)
- npm

### Install

```bash
git clone <repository-url>
cd portfolio
npm install
```

### Environment

```bash
cp .env.example .env.local
```

Configure at least:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (sitemap, Open Graph, JSON-LD) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional Search Console HTML-tag verification |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` | Mail server |
| `SMTP_USER` / `SMTP_PASS` | SMTP credentials (e.g. Gmail app password) |
| `CONTACT_FROM_EMAIL` | From address for outbound mail |
| `CONTACT_REPLY_TO` | Reply-To (and admin notification target) |

Never commit `.env` or `.env.local`.

### Develop

```bash
npm run dev
```

App runs locally on port `3000`.  
`predev` regenerates `public/sitemap.xml` from routes + case studies.

### Production

```bash
npm run build
npm start
```

Or use the standalone output under `.next/standalone` after build (see Next.js standalone docs).

### Other scripts

| Script | Description |
| --- | --- |
| `npm run sitemap` | Regenerate `public/sitemap.xml` |
| `npm run lint` | Next.js lint |

---

## Main routes

| Path | Description |
| --- | --- |
| `/` | Home — brand, stats, expertise, featured case studies |
| `/about` | Positioning and working approach |
| `/expertise` | Skills across full stack, AI, cloud, architecture |
| `/case-studies` | Case study index |
| `/case-studies/[slug]` | Detailed engineering narratives |
| `/projects` | Selected project groups |
| `/architecture` | Architecture patterns |
| `/ai-automation` | Agents, RAG, n8n automation |
| `/industries` | Cross-industry experience |
| `/experience` | Career timeline |
| `/resume` | Online résumé + PDF |
| `/contact` | Contact form |
| `/privacy` · `/terms` · `/data-deletion` · `/third-party-access` | Legal |
| `/sitemap` | Human-readable sitemap |

Machine-readable SEO:

- `/sitemap.xml`
- `/robots.txt`

---

## Case studies (examples)

High-level topics covered on the site:

- Enterprise insurance platform
- Dialogflow → Google ADK agent orchestration
- n8n business automation control plane
- AI CRM integration & education CRM
- LinkedIn / marketing / content automation
- CRA → Vite and Jest → Vitest migrations
- Backend performance optimization
- Crypto options trading architecture
- AI video transcription pipelines
- Conversion-focused website development

---

## SEO notes

- Titles, descriptions, keywords, canonicals, Open Graph, and Twitter cards are defined per page in `lib/page-seo.js`
- Person / WebSite / ProfessionalService JSON-LD is injected in the root layout
- Case study listing includes ItemList structured data
- After deploy, submit your site’s `sitemap.xml` in Google Search Console

---

## Design notes

- **Not** a creative-agency experimental look — aimed at a **premium modern software architect** portfolio
- Inter for all UI text; monospace reserved for architecture / code diagrams
- Light and dark themes with system preference support
- Mobile-optimized case study layouts (readable heroes, scrollable diagrams)

---

## License

Private portfolio project. Content and case-study narratives © Tushant Rajpal.  
All rights reserved unless otherwise noted.

---

## Contact

Interested in architecture, AI systems, automation platforms, or full-stack delivery?

Use the Contact page on the live site, or email **tushant.rajpal23@gmail.com**.
