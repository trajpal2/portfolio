<div align="center">

![Banner](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=Portfolio%20Website&fontSize=80&animation=fadeIn&fontAlignY=35)

<p align="center">
  <a href="#features">Features</a> •
  <a href="#resume">Resume</a> •
  <a href="#demo">Demo</a> •
  <a href="#assets">Assets</a> •
  <a href="#installation">Installation</a> •
  <a href="#tech-stack">Tech Stack</a>
</p>

[![GitHub Repo](https://img.shields.io/badge/GitHub-trajpal2%2Fportfolio-181717?style=flat-square&logo=github)](https://github.com/trajpal2/portfolio)
[![Website](https://img.shields.io/website?style=flat-square&url=https%3A%2F%2Ftrajpal2.github.io%2Fportfolio)](https://trajpal2.github.io/portfolio)
[![Made with Next.js](https://img.shields.io/badge/Made%20with-Next.js-000000?style=flat-square&logo=next.js)](https://nextjs.org)

<p align="center">A modern portfolio built with Next.js 14, React, and Tailwind CSS — experience timeline, tech stack, projects, contact form, and a dedicated resume page with PDF preview and download.</p>

</div>

## ✨ Features

- **Homepage** (`/`) — About, achievements, experience, tech stack, projects, and contact
- **Resume page** (`/resume`) — PDF preview, view in browser, and download (not on the homepage)
- **Contact API** — SMTP email via Nodemailer (`POST /api/contact`)
- **Site analytics (JSON)** — Visit, resume download, and contact counts in `data/site-stats.json`
- **SEO** — Metadata, Open Graph, `sitemap.xml`, `robots.txt`, and JSON-LD
- **3D & motion** — Three.js hero canvas, Framer Motion, dark minimalist theme

## 📄 Resume

Linked from the navbar **Resume** item. Lives only on `/resume`, not as a homepage section.

| Route | Live URL |
|-------|----------|
| Resume page | [trajpal2.github.io/portfolio/resume](https://trajpal2.github.io/portfolio/resume) |

**Actions on `/resume`:**

- **View in browser** — opens `/Tushant_Resume2.pdf`
- **Download resume** — saves `Tushant_Rajpal_Resume.pdf` (`POST /api/resume-download`)
- **Back to portfolio** — returns to the homepage

**Files (in `public/`):**

| File | Purpose |
|------|---------|
| `Tushant_Resume2.pdf` | Preview / view in browser (`resume.file` in `src/constants/index.js`) |
| `Resume_Tushant.pdf` | Alternate copy (not used by default) |

**Optional — read counters** (`STATS_SECRET` in `.env`):

```bash
curl "https://trajpal2.github.io/portfolio/api/resume-downloads?secret=YOUR_STATS_SECRET"
```

Returns `resumeDownloads`, `visits`, `contactSubmissions`, and `updatedAt`.

## 🚀 Demo

| Page | URL |
|------|-----|
| Homepage | [https://trajpal2.github.io/portfolio](https://trajpal2.github.io/portfolio) |
| Resume | [https://trajpal2.github.io/portfolio/resume](https://trajpal2.github.io/portfolio/resume) |
| Repository | [https://github.com/trajpal2/portfolio](https://github.com/trajpal2/portfolio) |

> **GitHub Pages:** This repo is published as a project site at `/portfolio`. Set `NEXT_PUBLIC_SITE_URL=https://trajpal2.github.io/portfolio` (no trailing slash).

## 🖼️ Assets

Static files live under `public/`. Paths below are the same in the app and in the browser.

### Hero & branding

| Path | Used for |
|------|----------|
| `/herobg.png` | Hero background (`bg-hero-pattern`), Open Graph / Twitter images |
| `/assets/github.png` | Project card GitHub icon |
| `/assets/menu.svg`, `/assets/close.svg` | Mobile navigation |
| `/assets/contact-person.svg` | Contact section illustration |

### Project previews (Projects section)

Configured in `src/constants/index.js` — one PNG per project title:

| Project | Image path |
|---------|------------|
| Educational CRM | `/assets/projects/educational-crm.png` |
| Enterprise Applications | `/assets/projects/enterprise-applications.png` |
| E-commerce & EdTech | `/assets/projects/ecommerce-edtech.png` |
| Travel & Property Apps | `/assets/projects/travel-property-apps.png` |

<p align="center">
  <img src="./public/assets/projects/educational-crm.png" alt="Educational CRM" width="280" />
  <img src="./public/assets/projects/enterprise-applications.png" alt="Enterprise Applications" width="280" />
  <img src="./public/assets/projects/ecommerce-edtech.png" alt="E-commerce and EdTech" width="280" />
  <img src="./public/assets/projects/travel-property-apps.png" alt="Travel and Property Apps" width="280" />
</p>

### 3D models

| Path | Used for |
|------|----------|
| `/desktop_pc/scene.gltf` | Hero 3D computer |
| `/planet/scene.gltf` | Contact section background |

### Tech & company icons

- `/assets/tech/*.svg` — Tech stack section  
- `/assets/company/*` — Experience timeline company logos  

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/trajpal2/portfolio.git
cd portfolio
```

If your folder is named `Portfolio-Website` after clone, `cd` into that directory instead.

2. Install dependencies:

```bash
npm install
```

3. Environment variables:

```bash
cp .env.example .env
```

Set at minimum:

```env
NEXT_PUBLIC_SITE_URL=https://trajpal2.github.io/portfolio
```

4. Run locally:

```bash
npm run dev
```

| Page | Local URL |
|------|-----------|
| Homepage | [http://localhost:3000](http://localhost:3000) |
| Resume | [http://localhost:3000/resume](http://localhost:3000/resume) |

**Production build:**

```bash
npm run build
npm start
```

**Stale Next.js cache** (e.g. `Cannot find module './682.js'`):

```bash
rm -rf .next && npm run dev
```

## 🔐 Environment variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Yes (prod) | `https://trajpal2.github.io/portfolio` — SEO, sitemap, OG URLs |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | For contact | Send contact form emails |
| `CONTACT_EMAIL` | Optional | Inbox for contact submissions |
| `STATS_SECRET` | Optional | Protect `GET /api/resume-downloads` |

Runtime stats: `data/site-stats.json` (template: `data/site-stats.example.json`). No Redis.

## 💻 Tech Stack

<table align="center">
  <tr>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=nextjs" width="48" height="48" alt="Next.js" />
      <br>Next.js 14
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=react" width="48" height="48" alt="React" />
      <br>React 18
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=tailwind" width="48" height="48" alt="Tailwind CSS" />
      <br>Tailwind
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=threejs" width="48" height="48" alt="Three.js" />
      <br>Three.js
    </td>
  </tr>
</table>

Also: **Framer Motion**, **Nodemailer**, **React Three Fiber**, **@react-three/drei**.

## 📁 Project structure

```
src/
  app/
    page.jsx                 # Homepage
    resume/page.jsx          # Resume (preview + download)
    api/contact/             # Contact form
    api/resume-download/     # Download counter
    api/resume-downloads/    # Read counters (STATS_SECRET)
    api/visit/               # Visit counter
    layout.jsx               # SEO, OG image: /herobg.png
    sitemap.js, robots.js
  components/                # Hero, About, Experience, Works, Contact, …
  config/site.js             # siteUrl, metadata
  constants/index.js         # nav, resume, projects, experience
public/
  herobg.png
  Tushant_Resume2.pdf
  assets/projects/*.png      # Project card images
  assets/tech/, assets/company/
  desktop_pc/, planet/       # 3D GLTF assets
data/
  site-stats.json            # Runtime counters (gitignored)
```

## ⚡ Core features

- Responsive, mobile-first layout  
- Alternating experience timeline  
- Project cards with per-title preview images  
- Dark minimalist (slate / charcoal) theme  
- Contact form with server-side email  
- Resume only on `/resume`  
- Hidden stats on `#site-stats` in the footer (DevTools)  

## 📄 License

<div align="center">

MIT © Tushant Rajpal

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer" width="100%"/>

</div>
