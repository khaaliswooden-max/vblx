# VBLX — Visionblox Enterprise Platform

<p align="center">
  <img src="public/visionblox-logo.svg" alt="Visionblox Logo" width="120"/>
</p>

<p align="center">
  <strong>The Operating System for Enterprise Operations</strong><br>
  <em>AI-powered platforms for operational intelligence, procurement, and compliance.</em>
</p>

<p align="center">
  <a href="https://visionblox.com">Website</a> •
  <a href="#platforms">Platforms</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#deployment">Deployment</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?logo=next.js" alt="Next.js 14"/>
  <img src="https://img.shields.io/badge/TypeScript-5.3-blue?logo=typescript" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwindcss" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Framer_Motion-11-ff69b4?logo=framer" alt="Framer Motion"/>
  <img src="https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel" alt="Vercel"/>
</p>

---

## Overview

VBLX is the next-generation web presence for **Visionblox LLC**, a minority-owned technology consultancy specializing in AI-driven federal solutions, healthcare IT modernization, and enterprise cloud migration.

This repository contains the Palantir-inspired redesign that transforms Visionblox from an IT services provider into an **enterprise operating system builder**—positioning three unified platforms at the core of the company's market presence.

### Design Philosophy

- **Operational Gravity**: Dark themes, restrained color palettes, precise typography
- **Platform Unity**: Three interconnected platforms, not a menu of disconnected products
- **Technical Authority**: Deep documentation, architectural depth over marketing abstractions
- **Mission Alignment**: "We build software that powers institutions"

---

## Platforms

<table>
<tr>
<td width="33%" valign="top">

### AUSTRA
**Operational Intelligence OS**

*"Know your operations. Act with precision."*

- Workforce intelligence
- Facility operations
- Project management
- AI anomaly detection

**Modules**: Pro-People, Pro-School, Pro-Canteen, Pro-Parking, Pro-Project

</td>
<td width="33%" valign="top">

### AUREON
**Procurement Substrate**

*"The procurement layer for the next decade."*

- Opportunity intelligence
- Proposal automation
- Supply chain visibility
- Win probability modeling

**Modules**: Pro-Sales, Pro-Biz

</td>
<td width="33%" valign="top">

### CIVIUM
**Compliance Engine**

*"Compliance at the speed of business."*

- Visitor management
- Threat assessment
- Service management
- Warranty assurance

**Modules**: Pro-Visit, Pro-Ticket, Pro-Assure

</td>
</tr>
</table>

---

## Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Framework** | Next.js 14 (App Router) | SSG/SSR, API routes, edge functions |
| **Language** | TypeScript 5.3 | Type safety, developer experience |
| **Styling** | Tailwind CSS 3.4 | Utility-first, design tokens |
| **Animation** | Framer Motion 11 | Page transitions, micro-interactions |
| **Icons** | Lucide React | Consistent iconography |
| **Hosting** | Vercel | Edge CDN, auto-deploy, preview URLs |
| **CMS** | Sanity *(planned)* | Headless content management |

---

## Getting Started

### Prerequisites

- Node.js 18.17+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/kwoodensr/vblx.git
cd vblx

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
vblx/
├── app/
│   ├── globals.css          # Design system + CSS variables
│   ├── layout.tsx           # Root layout with fonts
│   ├── page.tsx             # Homepage
│   └── platforms/           # Platform pages
│       ├── austra/
│       ├── aureon/
│       └── civium/
├── components/
│   ├── ui/                  # Reusable components
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── layout/              # Layout components
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   └── sections/            # Page sections
│       ├── Hero.tsx
│       ├── PlatformShowcase.tsx
│       └── ...
├── lib/
│   └── utils.ts             # Utilities + constants
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
└── package.json
```

---

## Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg-primary` | `#0D0D0D` | Main backgrounds |
| `--color-bg-secondary` | `#1A1A1A` | Cards, sections |
| `--color-accent-primary` | `#00D4AA` | CTAs, highlights |
| `--color-accent-secondary` | `#3B82F6` | Links, secondary |
| `--color-austra` | `#3182CE` | AUSTRA platform |
| `--color-aureon` | `#6B46C1` | AUREON platform |
| `--color-civium` | `#38B2AC` | CIVIUM platform |

### Typography

| Type | Font | Usage |
|------|------|-------|
| Display | Space Grotesk | Heroes, large headings |
| Sans | Inter | Body text, UI elements |
| Mono | JetBrains Mono | Code, technical content |

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository at [vercel.com/new](https://vercel.com/new)
3. Deploy automatically

```bash
# Or deploy via CLI
npx vercel
```

### Environment Variables

Create `.env.local` for local development:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_ID=UA-XXXXXXXX-X

# CRM Integration (optional)
CRM_WEBHOOK_URL=https://your-crm-endpoint
```

---

## Roadmap

- [x] **Phase 1**: Foundation — Design system, components, homepage
- [x] **Phase 2**: Platform pages — AUSTRA, AUREON, CIVIUM detail pages
- [x] **Phase 3**: Intake forms — Commercial + Federal/SLED lead capture
- [ ] **Phase 4**: Content depth — Industry pages, case studies, services
- [ ] **Phase 5**: CMS integration — Sanity headless CMS
- [x] **Phase 6**: Analytics — Conversion tracking, A/B testing

---

## Company

**Visionblox LLC**

| Attribute | Value |
|-----------|-------|
| **CAGE Code** | 9Z4X2 |
| **UEI** | H4X2Z7R9E3E3 |
| **Status** | Minority-Owned, GSA MAS Springboard |
| **Headquarters** | San Jose, CA |

### Global Presence

- 🇺🇸 San Jose, CA (HQ)
- 🇺🇸 Philadelphia, PA
- 🇴🇲 Muscat, Oman
- 🇦🇪 Dubai, UAE
- 🇮🇳 Chennai, India

---

## Contact

**Khaalis Wooden** — Director of Enterprise Capture & Compliance

- Email: [khaalis.wooden@visionblox.com](mailto:khaalis.wooden@visionblox.com)
- Phone: +1 (210) 429-4227
- LinkedIn: [Visionblox](https://www.linkedin.com/company/100849749/)

---

## License

Proprietary. © 2025 Visionblox LLC. All rights reserved.

---

<p align="center">
  <strong>Visionblox</strong> — We build the operating systems that power enterprise operations.<br>
  <em>From data to decision. From complexity to clarity.</em>
</p>
