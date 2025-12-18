# Changelog

All notable changes to the VBLX project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Planned
- Commercial intake form with CRM integration
- Federal/SLED intake form with BD Command Center sync
- Industry landing pages
- Services pages with full taxonomy
- Sanity CMS integration
- Analytics and conversion tracking

---

## [0.2.0] - 2025-12-17

### Added

#### Platform Pages Enhancement (Phase 2)
- **Enhanced AUSTRA, AUREON, CIVIUM detail pages** with 6 new sections each
- **CapabilitiesSection** — 6-card grid showcasing core platform capabilities with hover effects
- **ArchitectureSection** — Animated flow diagram showing how each platform works (4-step process)
- **MetricsSection** — Animated number counters with scroll-triggered animations showing measurable impact
- **UseCasesSection** — Tabbed interface with 3 industry-specific use cases per platform
- **IntegrationsSection** — Integration ecosystem grid organized by category (Data Sources, Enterprise, Outputs)
- **FAQSection** — Accordion-style FAQ with 6 questions per platform

#### Data Layer
- **lib/platformData.ts** — Centralized platform content with TypeScript types for:
  - Capabilities (6 per platform)
  - Architecture flow steps
  - Metrics/KPIs (4 per platform)
  - Use cases with industry tags and outcome metrics
  - Integration partners by category
  - FAQ items

#### Component Architecture
- Created `components/sections/platform/` directory with reusable section components
- All components support platform-specific theming via color props
- Framer Motion animations throughout (scroll-triggered, staggered)
- Fully responsive layouts (mobile-first design)

### Technical Details
- All new components are client components (`'use client'`) for interactivity
- Animated counter uses `requestAnimationFrame` for smooth number animations
- FAQ accordion uses `AnimatePresence` for height animations
- Architecture section has separate desktop (horizontal) and mobile (vertical) layouts

---

## [0.1.0] - 2025-12-17

### Added

#### Foundation
- Initial Next.js 14 project setup with App Router
- TypeScript 5.3 configuration
- Tailwind CSS 3.4 with custom design system
- Framer Motion 11 for animations
- ESLint configuration

#### Design System
- Complete color palette (dark theme)
  - Primary background: `#0D0D0D`
  - Secondary background: `#1A1A1A`
  - Accent primary: `#00D4AA`
  - Accent secondary: `#3B82F6`
- Platform-specific colors (AUSTRA, AUREON, CIVIUM)
- Typography scale with Space Grotesk, Inter, JetBrains Mono
- CSS custom properties for theming
- Animation keyframes (fade, glow, grid)

#### Components
- **UI Components**
  - `Button` — 4 variants (primary, secondary, ghost, outline), 4 sizes, loading state
  - `Card` — Platform variants, animated on scroll, hover states
- **Layout Components**
  - `Navigation` — Mega-menu dropdowns, mobile responsive, scroll-aware
  - `Footer` — Links grid, global locations, CAGE/UEI badges
- **Section Components**
  - `Hero` — Particle animation canvas, atmospheric gradients, stats bar
  - `PlatformShowcase` — AUSTRA/AUREON/CIVIUM cards with metrics
  - `IndustryFocus` — Federal, Healthcare, FinTech, Manufacturing cards
  - `ComplianceBadges` — Certification badges, security features
  - `CTASection` — Dual intake paths (Commercial + Federal)

#### Pages
- Homepage with all sections integrated

#### Configuration
- `tailwind.config.ts` — Custom design tokens
- `next.config.js` — Image domains, package optimization
- `tsconfig.json` — Path aliases, strict mode
- `postcss.config.js` — Tailwind + Autoprefixer

#### Documentation
- `README.md` — Project overview, setup instructions
- `CONTRIBUTING.md` — Contribution guidelines
- `SECURITY.md` — Security policy and vulnerability reporting
- `CHANGELOG.md` — Version history (this file)
- `LICENSE` — Proprietary license
- `.env.example` — Environment variable template
- `docs/ARCHITECTURE.md` — Technical decisions

#### Repository
- `.gitignore` — Standard Next.js ignores
- GitHub issue templates
- Pull request template

### Technical Details

- **Framework**: Next.js 14.2.0
- **Node**: 18.17+ required
- **Package Manager**: npm
- **Deployment Target**: Vercel

---

## Version History

| Version | Date | Description |
|---------|------|-------------|
| 0.1.0 | 2025-12-17 | Phase 1: Foundation |
| 0.2.0 | 2025-12-17 | Phase 2: Platform Pages |
| 0.3.0 | TBD | Phase 3: Intake Forms |
| 0.4.0 | TBD | Phase 4: Content Depth |
| 0.5.0 | TBD | Phase 5: CMS Integration |
| 1.0.0 | TBD | Production Release |

---

## Release Process

1. Update version in `package.json`
2. Update this CHANGELOG
3. Create release branch: `release/vX.Y.Z`
4. Open PR to `main`
5. After merge, create GitHub Release with tag `vX.Y.Z`
6. Vercel auto-deploys from `main`

---

## Links

- [Repository](https://github.com/kwoodensr/vblx)
- [Visionblox Website](https://visionblox.com)
- [Issue Tracker](https://github.com/kwoodensr/vblx/issues)

---

[Unreleased]: https://github.com/kwoodensr/vblx/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/kwoodensr/vblx/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/kwoodensr/vblx/releases/tag/v0.1.0
