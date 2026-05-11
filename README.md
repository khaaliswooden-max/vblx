# VBLX — Visionblox Healthcare IT Platform

<p align="center">
  <img src="public/visionblox-logo.svg" alt="Visionblox Logo" width="120"/>
</p>

<p align="center">
  <strong>Healthcare Data Infrastructure for the Institutions That Govern It.</strong><br>
  <em>Healthcare IT modernization, Rural Health IT, and enterprise IT services — engineered to federal and state audit standards.</em>
</p>

<p align="center">
  <a href="https://visionblox.com">Website</a> •
  <a href="#focus-areas">Focus Areas</a> •
  <a href="#capability-pillars">Capabilities</a> •
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

VBLX is the web presence for **Visionblox LLC**, a minority-owned technology firm focused on **Healthcare IT modernization, Rural Health IT, and enterprise IT services** for federal agencies, state Medicaid programs, health systems, and Critical Access / Rural Health providers.

The site is built around three public pillars — **Healthcare IT**, **Rural Health IT**, and **IT Services** — backed by a documented past performance portfolio and federal contracting credentials.

### Positioning

- **Healthcare-first**: Epic EMR integration, HL7 pipelines, MITA-compliant Medicaid architecture, patient portals, healthcare AI/NLP/OCR.
- **Rural Health focus**: Dedicated practice for Critical Access Hospitals and Rural Health Clinics, surfaced through [ruralhealth.xyz](https://ruralhealth.xyz).
- **IT services backbone**: Enterprise IT services and legacy modernization that fund and feed the healthcare work.
- **Federal-ready**: CAGE 9Z4X2, UEI H4X2Z7R9E3E3, minority-owned, GSA MAS Springboard, HIPAA / HITRUST / FedRAMP-aware delivery.

---

## Focus Areas

The three top-level practices that drive the site's information architecture and capture motion.

| Area | Route | What it covers |
|------|-------|----------------|
| **Healthcare IT** | `/healthcare-it` | State Medicaid modernization, patient portals & digital front door, healthcare AI / document intelligence, federal agency healthcare IT build track. |
| **Rural Health IT** | [ruralhealth.xyz](https://ruralhealth.xyz) | Dedicated practice for Critical Access Hospitals (CAH) and Rural Health Clinics (RHC) — connectivity, EMR enablement, compliance, and rural-grant-aligned IT. |
| **IT Services** | `/it-services` | Enterprise IT services, infrastructure, support, and legacy system modernization for commercial and public-sector clients. |
| **Past Performance** | `/pastperformance` | Documented delivery record across Kaiser Permanente, California DHCS, VCare Urgent Care, and federal/state programs. |

---

## Capability Pillars

Surfaced on the homepage and used in capability statements.

1. **Healthcare Data Systems** — Epic EMR integration, HL7 data pipelines, MITA-compliant Medicaid architecture, and patient portal infrastructure (delivered at Kaiser Permanente, California DHCS, VCare Urgent Care).
2. **Compliance & Security Architecture** — HIPAA, HITRUST audits, 21st Century Cures Act, Section 508 ADA, FedRAMP-aware deployment on AWS GovCloud and Azure Government. 13 years of healthcare security leadership on staff.
3. **Healthcare AI & Document Intelligence** — NLP, OCR, and ML pipelines purpose-built for healthcare data. 96% document processing accuracy and 60% labor reduction delivered at a state Medicaid agency. Python, Spark, Kafka, Snowflake.

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
| **CMS** | Sanity v3 | Headless content management (embedded `/studio`) |

---

## Getting Started

### Prerequisites

- Node.js 18.17+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/khaaliswooden-max/vblx.git
cd vblx

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Sanity Studio Setup

1. Create a Sanity project at [sanity.io/manage](https://www.sanity.io/manage)
2. Copy your project ID and dataset name
3. Add to `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

4. Access the studio at [http://localhost:3000/studio](http://localhost:3000/studio)

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
│   ├── page.tsx             # Homepage (Hero, Capability Pillars, Past Performance preview)
│   ├── healthcare-it/       # Healthcare IT practice page
│   ├── it-services/         # IT Services practice page
│   ├── pastperformance/     # Past performance portfolio
│   ├── solutions/           # Cross-cutting solutions
│   ├── industries/          # Industry pages
│   ├── case-studies/        # Case studies
│   ├── about/               # About + leadership
│   ├── contact/             # Briefing / capture intake
│   └── studio/              # Sanity Studio (embedded)
├── components/
│   ├── ui/                  # Reusable components
│   ├── layout/              # Navigation, footer
│   └── sections/            # Hero, CapabilityPillars, PastPerformancePreview, etc.
├── lib/                     # Utilities + content data
├── sanity/                  # Schemas + client
├── public/                  # Static assets + slide imagery
├── sanity.config.ts
├── tailwind.config.ts
└── package.json
```

Note: Rural Health IT lives at the external property [ruralhealth.xyz](https://ruralhealth.xyz) and is linked from the main nav rather than served from this app.

---

## Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `vbx-navy` | Deep navy | Primary background |
| `vbx-teal` | `#2EA891` | CTAs, accents, data viz |
| `vbx-gold` | `#F7B801` | Briefing CTA, highlights |
| `vbx-white` | `#F5F5F0` | Body text on dark |

### Typography

| Type | Font | Usage |
|------|------|-------|
| Display | Space Grotesk | Hero, section headings |
| Sans | Inter | Body text, UI |
| Mono | JetBrains Mono | Codes, credentials, technical chrome |

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

```env
# Sanity (required for /studio + CMS-backed content)
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Analytics (optional)
NEXT_PUBLIC_GA_ID=UA-XXXXXXXX-X

# Lead capture webhook (optional)
CRM_WEBHOOK_URL=https://your-crm-endpoint
```

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

- San Jose, CA (HQ)
- Philadelphia, PA
- Huntsville, AL
- Chennai, India

---

## Contact

**Khaalis Wooden, MBA** — Director of Enterprise Capture & Compliance

- Email: [khaalis.wooden@visionblox.com](mailto:khaalis.wooden@visionblox.com)
- Phone: +1 (210) 429-4227
- LinkedIn: [Visionblox](https://www.linkedin.com/company/100849749/)
- Briefings: `mailto:khaalis.wooden@visionblox.com?subject=Healthcare%20IT%20Capability%20Briefing`

---

## License

Proprietary. © 2026 Visionblox LLC. All rights reserved.

---

<p align="center">
  <strong>Visionblox</strong> — Healthcare data infrastructure for the institutions that govern it.<br>
  <em>Healthcare IT • Rural Health IT • IT Services</em>
</p>
