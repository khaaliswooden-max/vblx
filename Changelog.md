# Changelog

All notable changes to the VBLX project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Planned
- Industry landing pages (content in Sanity)
- Services pages with full taxonomy
- Blog implementation with Sanity posts

---

## [0.5.0] - 2025-12-18

### Added

#### Phase 5: Sanity CMS Integration

**Sanity Studio Setup**
- Embedded Sanity Studio at `/studio` route
- Next.js App Router integration with `next-sanity`
- Custom studio configuration with structured content organization
- Vision plugin for GROQ query testing

**Content Schemas**

*Platform Content*
- `platform` — Full platform schema with modules, capabilities, architecture, metrics
- `useCase` — Customer success stories and case studies
- `integration` — Third-party integrations with category support
- `faq` — Platform FAQs with ordering

*Page Content*
- `page` — Generic landing pages with flexible content blocks
- `industryPage` — Industry-specific pages (Federal, Healthcare, FinTech, etc.)
- `servicePage` — Service offerings with capabilities and approach

*Blog Content*
- `post` — Blog posts with rich content, authors, and categories
- `author` — Author profiles with social links
- `category` — Post categorization with colors

*Site Configuration*
- `siteSettings` — Global settings, company info, social links
- `navigation` — Configurable navigation menus

*Rich Text*
- `blockContent` — Rich text editor with headings, lists, images, code blocks, callouts

**Sanity Client Library (`sanity/lib/`)**
- `client.ts` — Configured Sanity client with CDN and preview support
- `queries.ts` — Centralized GROQ queries for all content types
- Image URL builder helper function
- Preview mode client for draft content

**Environment Configuration**
- `NEXT_PUBLIC_SANITY_PROJECT_ID` — Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` — Dataset name (production)
- `NEXT_PUBLIC_SANITY_API_VERSION` — API version
- `SANITY_API_READ_TOKEN` — Optional preview token

### Dependencies Added
- `sanity@3` — Sanity Studio framework
- `@sanity/client@6` — API client
- `@sanity/image-url@1` — Image URL builder
- `@sanity/vision@3` — GROQ query playground
- `next-sanity@7` — Next.js integration

### Files Added
- `sanity.config.ts` — Studio configuration
- `sanity/schemaTypes/*.ts` — 12 content schemas
- `sanity/lib/client.ts` — Sanity client
- `sanity/lib/queries.ts` — GROQ queries
- `app/studio/[[...tool]]/page.tsx` — Studio route
- `app/studio/[[...tool]]/layout.tsx` — Studio layout

---

## [0.4.0] - 2025-12-18

### Added

#### Phase 4: Content Depth — Industries, Services & Case Studies

##### Data Layer
- `lib/industriesData.ts` — Complete data for 7 industries:
  - Federal & Government
  - Healthcare & Life Sciences
  - Financial Services
  - Manufacturing & Industrial
  - Defense & Aerospace
  - Higher Education
  - Technology
- `lib/servicesData.ts` — Complete data for 11 services across 4 categories:
  - Consulting (Digital Strategy, Process Optimization, Security & Compliance)
  - Implementation (Platform Implementation, System Integration, Cloud Migration)
  - Managed Services (Managed Operations, Support Services, Staff Augmentation)
  - Development (Custom Development, AI/ML Services)
- `lib/caseStudiesData.ts` — 7 detailed case studies with full narratives

##### Industries Section
- `/industries` — Landing page with featured and additional industries
- `/industries/[slug]` — Dynamic detail pages for each industry featuring:
  - Industry challenges and pain points
  - Platform solutions mapping
  - Compliance frameworks supported
  - Use cases and testimonials
  - Related case studies

##### Services Section
- `/services` — Landing page with service categories
- `/services/[slug]` — Dynamic detail pages for each service featuring:
  - Deliverables and methodology
  - Key benefits
  - Engagement models

##### Case Studies Section
- `/case-studies` — Landing page with filtering
- `/case-studies/[slug]` — Full case study narratives

##### About Page
- `/about` — Company information, values, leadership, global locations

##### Navigation Updates
- Added dropdown menus for Industries and Services
- Added Case Studies link

---

## [0.3.0] - 2025-12-17

### Added

#### Phase 3: Intake Forms & Lead Capture

##### Form UI Components (`components/ui/`)
- `Input` — Text input with label, error state, and helper text
- `Textarea` — Multi-line text with validation support
- `Select` — Custom styled dropdown with options
- `Checkbox` — Styled checkbox with description support
- `RadioGroup` — Radio button group with orientation options

##### Commercial Intake Form (`/contact/commercial`)
- 3-step multi-page form with animated progress indicator
- Step 1: Contact information (name, email, phone, title)
- Step 2: Company information (name, size, industry, website)
- Step 3: Project details (platform, use case, timeline, budget)
- Client-side Zod validation with inline error messages
- Marketing consent checkbox
- Success confirmation with next steps

##### Federal/SLED Intake Form (`/contact/federal`)
- 4-step multi-page form with progress tracking
- Step 1: Contact information
- Step 2: Organization details (agency, department, type)
- Step 3: Project requirements (contract vehicle, compliance, NAICS)
- Step 4: Timeline and budget (funding status, security level)
- Multi-select compliance requirements (FedRAMP, FISMA, HIPAA, etc.)
- Set-aside preference options
- BD Command Center follow-up option
- CAGE/UEI display on confirmation

##### Contact Landing Page (`/contact`)
- Dual-path selection UI (Commercial vs Federal/SLED)
- Visual cards with feature highlights
- Company contact information display
- Global locations grid
- Government credentials (CAGE, UEI)

##### API Routes (`app/api/contact/`)
- `POST /api/contact/commercial` — Commercial lead submission
- `POST /api/contact/federal` — Federal/SLED opportunity submission
- Server-side Zod validation
- CRM webhook integration support (configurable)
- BD Command Center webhook support

##### Validation Library (`lib/validations.ts`)
- Commercial form Zod schema with all field validations
- Federal form Zod schema with government-specific fields
- Type exports for form data structures
- Option constants for all dropdowns:
  - Industry options
  - Company size ranges
  - Platform options
  - Timeline options
  - Budget/estimated value ranges
  - Organization types
  - Contract vehicles
  - Security classification levels
  - Compliance requirements
  - Set-aside preferences
  - Funding status options

##### Navigation Updates
- Added Contact dropdown with Commercial and Federal sub-items
- Updated "Get Started" CTA to link to contact page
- Mobile menu updated with contact options

### Dependencies Added
- `zod` — Schema validation library

---

## [0.6.0] - 2025-12-17

### Added

#### Phase 6: Analytics & Conversion Tracking

**Core Analytics Infrastructure**
- Google Analytics 4 (GA4) integration with dynamic loading
- Custom event tracking system with typed events
- Page view tracking for SPA navigation
- Time-on-page engagement tracking (30s, 60s, 120s, 180s milestones)
- Scroll depth tracking (25%, 50%, 75%, 100%)

**Web Vitals Monitoring**
- Core Web Vitals tracking (LCP, FID, CLS, INP, FCP, TTFB)
- PerformanceObserver-based measurement
- Automatic rating (good/needs-improvement/poor)
- Integration with GA4 for performance analytics

**Conversion Tracking**
- Demo request tracking
- Contact form interactions
- Platform inquiry events
- CTA click tracking with location context
- External link click tracking

**A/B Testing Framework**
- Cookie-based experiment assignment
- Weighted variant distribution
- Experiment conversion tracking
- Debug utilities for development
- Example experiments configured

**React Hooks & Components**
- `useAnalytics` — Memoized tracking functions
- `useABTest` — Get variant and track conversions
- `useSectionTracking` — Intersection Observer for sections
- `GoogleAnalytics` — Auto-loading GA4 component
- `TrackingLink` — Link with automatic tracking
- `TrackingButton` — Button with CTA tracking

**Configuration**
- Environment variable `NEXT_PUBLIC_GA_MEASUREMENT_ID` for GA4
- Debug mode in development
- Opt-out functionality for privacy

### Files Added
- `lib/analytics.ts` — Core analytics module
- `lib/web-vitals.ts` — Web Vitals tracking
- `lib/ab-testing.ts` — A/B testing framework
- `components/analytics/GoogleAnalytics.tsx` — GA4 component
- `components/analytics/TrackingLink.tsx` — Tracked links
- `components/analytics/TrackingButton.tsx` — Tracked buttons
- `hooks/useAnalytics.ts` — Analytics hook
- `hooks/useABTest.ts` — A/B testing hook
- `hooks/useSectionTracking.ts` — Section visibility tracking

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
| 0.3.0 | 2025-12-17 | Phase 3: Intake Forms |
| 0.4.0 | 2025-12-18 | Phase 4: Content Depth |
| 0.5.0 | 2025-12-18 | Phase 5: CMS Integration |
| 0.6.0 | 2025-12-17 | Phase 6: Analytics & Conversion |
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

[Unreleased]: https://github.com/kwoodensr/vblx/compare/v0.6.0...HEAD
[0.6.0]: https://github.com/kwoodensr/vblx/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/kwoodensr/vblx/compare/v0.3.0...v0.5.0
[0.3.0]: https://github.com/kwoodensr/vblx/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/kwoodensr/vblx/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/kwoodensr/vblx/releases/tag/v0.1.0
