# Architecture Decision Record

This document captures the key architectural decisions for the VBLX project, including rationale, alternatives considered, and implementation details.

---

## Table of Contents

- [Overview](#overview)
- [Design Principles](#design-principles)
- [Technology Decisions](#technology-decisions)
- [Project Structure](#project-structure)
- [Component Architecture](#component-architecture)
- [Styling Architecture](#styling-architecture)
- [State Management](#state-management)
- [Data Flow](#data-flow)
- [Performance Strategy](#performance-strategy)
- [Security Considerations](#security-considerations)
- [Future Considerations](#future-considerations)

---

## Overview

VBLX is the enterprise web platform for Visionblox LLC, designed to position the company as an "enterprise operating system builder" rather than a conventional IT services provider.

### Goals

1. **Visual Authority** — Palantir-inspired dark theme conveying technical sophistication
2. **Platform Unity** — Three interconnected platforms (AUSTRA, AUREON, CIVIUM)
3. **Performance** — Sub-1.5s LCP for enterprise credibility
4. **Compliance** — WCAG 2.1 AA, Section 508 accessibility
5. **Scalability** — Architecture supports future CMS integration

---

## Design Principles

### 1. Operational Gravity

Every design element should convey that this software operates at the center of consequential decisions.

**Implementation:**
- Dark backgrounds (#0D0D0D, #1A1A1A)
- Restrained color palette
- Precise typography with dramatic scale contrasts
- Atmospheric animations (particles, gradients)

### 2. Platform Unity

Products presented as interconnected components, not disconnected offerings.

**Implementation:**
- Consistent platform colors (AUSTRA blue, AUREON purple, CIVIUM teal)
- Shared component library
- Unified navigation structure
- Cross-platform visual language

### 3. Technical Authority

Demonstrate genuine engineering depth over marketing abstractions.

**Implementation:**
- Code-style typography (JetBrains Mono)
- Technical metrics prominently displayed
- Architecture diagrams in documentation
- Performance metrics visible

---

## Technology Decisions

### Framework: Next.js 14

**Decision:** Use Next.js 14 with App Router

**Rationale:**
- Server Components reduce client-side JavaScript
- Built-in image optimization
- API routes for serverless functions
- Vercel deployment optimization
- Strong TypeScript support

**Alternatives Considered:**
| Option | Pros | Cons | Decision |
|--------|------|------|----------|
| Next.js 14 | SSG/SSR, great DX, Vercel integration | Learning curve for App Router | ✅ Selected |
| Remix | Nested routing, progressive enhancement | Smaller ecosystem | ❌ Rejected |
| Astro | Excellent for static sites | Limited interactivity | ❌ Rejected |
| Gatsby | GraphQL data layer | Build times, complexity | ❌ Rejected |

### Styling: Tailwind CSS

**Decision:** Use Tailwind CSS with custom design tokens

**Rationale:**
- Utility-first enables rapid iteration
- Design tokens in `tailwind.config.ts`
- PurgeCSS for minimal bundle
- Consistent spacing/sizing scale
- Dark mode support built-in

**Alternatives Considered:**
| Option | Pros | Cons | Decision |
|--------|------|------|----------|
| Tailwind CSS | Fast iteration, small bundle | Verbose HTML | ✅ Selected |
| CSS Modules | Scoped styles | Manual design system | ❌ Rejected |
| Styled Components | CSS-in-JS flexibility | Runtime overhead | ❌ Rejected |
| Vanilla Extract | Zero-runtime CSS-in-TS | Setup complexity | ❌ Rejected |

### Animation: Framer Motion

**Decision:** Use Framer Motion for animations

**Rationale:**
- Declarative animation API
- Scroll-triggered animations
- Page transitions
- Gesture support
- React-native integration path

**Alternatives Considered:**
| Option | Pros | Cons | Decision |
|--------|------|------|----------|
| Framer Motion | Powerful, React-native | Bundle size (~30kb) | ✅ Selected |
| GSAP | Industry standard | License for commercial | ❌ Rejected |
| CSS Animations | Zero bundle | Limited interactivity | ❌ Rejected |
| React Spring | Physics-based | Steeper learning curve | ❌ Rejected |

### Deployment: Vercel

**Decision:** Deploy on Vercel

**Rationale:**
- Optimal Next.js performance
- Edge network (global CDN)
- Preview deployments for PRs
- Automatic HTTPS
- Serverless functions included
- Analytics built-in

**Note on FedRAMP:** Vercel is NOT FedRAMP authorized. For production federal workloads requiring FedRAMP, consider AWS GovCloud deployment with custom configuration.

---

## Project Structure

```
vblx/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout (fonts, nav, footer)
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles + CSS variables
│   ├── platforms/           # Platform pages
│   │   ├── austra/
│   │   ├── aureon/
│   │   └── civium/
│   ├── industries/          # Industry pages
│   ├── services/            # Service pages
│   ├── about/               # Company pages
│   └── api/                 # API routes
│       └── contact/         # Form submission handlers
│
├── components/              # React components
│   ├── ui/                  # Primitives (Button, Card, Input)
│   ├── layout/              # Layout (Navigation, Footer)
│   └── sections/            # Page sections (Hero, etc.)
│
├── lib/                     # Utilities
│   ├── utils.ts             # Helper functions
│   ├── constants.ts         # Static data
│   └── validations.ts       # Zod schemas
│
├── hooks/                   # Custom React hooks
│   ├── useScrollPosition.ts
│   └── useMediaQuery.ts
│
├── types/                   # TypeScript types
│   └── index.ts
│
├── public/                  # Static assets
│   ├── images/
│   ├── icons/
│   └── fonts/
│
└── docs/                    # Documentation
    └── ARCHITECTURE.md      # This file
```

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `PlatformCard.tsx` |
| Utilities | camelCase | `formatDate.ts` |
| Constants | SCREAMING_SNAKE | `API_ENDPOINTS` |
| CSS Classes | kebab-case | `platform-card` |
| Hooks | camelCase with `use` | `useScrollPosition` |

---

## Component Architecture

### Component Hierarchy

```
Layout (Navigation + Footer)
└── Page
    └── Sections
        └── UI Components
```

### Component Types

#### 1. UI Components (`components/ui/`)

Atomic, reusable primitives with no business logic.

```typescript
// Button.tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost' | 'outline'
  size: 'sm' | 'md' | 'lg' | 'xl'
  isLoading?: boolean
  // ...
}
```

**Characteristics:**
- Accept props for customization
- No internal state (or minimal)
- Fully typed with TypeScript
- Documented with JSDoc

#### 2. Layout Components (`components/layout/`)

Structural components that define page layout.

```typescript
// Navigation.tsx
// - Handles scroll state
// - Manages mobile menu
// - Contains navigation data
```

**Characteristics:**
- May contain state for interactivity
- Use design system tokens
- Responsive by default

#### 3. Section Components (`components/sections/`)

Page-level sections combining multiple UI components.

```typescript
// Hero.tsx
// - Canvas particle animation
// - Headline + CTA
// - Stats bar
```

**Characteristics:**
- Compose UI components
- Handle section-specific animations
- May fetch data (Server Components)

### Component Guidelines

```typescript
// ✅ Good: Single responsibility, typed props
export function PlatformCard({ 
  platform, 
  metrics 
}: PlatformCardProps) {
  return (
    <Card variant="platform" platform={platform}>
      {/* ... */}
    </Card>
  )
}

// ❌ Bad: Multiple responsibilities, no types
export function PlatformCard(props) {
  const data = useFetch('/api/platforms')
  // Mixing data fetching with presentation
}
```

---

## Styling Architecture

### Design Token Hierarchy

```
CSS Variables (root level)
    ↓
Tailwind Config (tailwind.config.ts)
    ↓
Utility Classes (in components)
    ↓
Component Styles (component-specific)
```

### CSS Variable Structure

```css
:root {
  /* Colors */
  --color-bg-primary: #0D0D0D;
  --color-accent-primary: #00D4AA;
  
  /* Typography */
  --font-display: 'Space Grotesk', sans-serif;
  
  /* Spacing */
  --spacing-section: 6rem;
  
  /* Animation */
  --transition-base: 300ms ease;
}
```

### Tailwind Extension

```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      background: {
        primary: 'var(--color-bg-primary)',
        // ...
      }
    }
  }
}
```

### Component Styling Pattern

```tsx
// Use cn() utility for conditional classes
import { cn } from '@/lib/utils'

<div className={cn(
  // Base styles
  'rounded-xl p-6',
  // Conditional styles
  variant === 'primary' && 'bg-accent-primary',
  // Prop-based styles
  className
)}>
```

---

## State Management

### Current Approach

For Phase 1, state management is minimal:

| State Type | Solution |
|------------|----------|
| UI State | React `useState` |
| Form State | React Hook Form |
| Server State | Next.js Server Components |
| URL State | Next.js `useSearchParams` |

### Future Considerations

For Phase 5+ with CMS integration:

| State Type | Recommended Solution |
|------------|---------------------|
| Server Cache | TanStack Query |
| Global UI | Zustand |
| Forms | React Hook Form + Zod |

---

## Data Flow

### Server Components (Default)

```
Request → Server Component → Render → HTML to Client
```

Benefits:
- Data fetching at build or request time
- No client-side JavaScript for data
- SEO-friendly

### Client Components (Interactive)

```
Request → Server Render → Hydration → Client Interactivity
```

Use `'use client'` directive for:
- Event handlers (onClick, onSubmit)
- Browser APIs (localStorage, window)
- React hooks (useState, useEffect)
- Third-party libraries requiring client

### Form Submissions

```
User Input → Client Validation (Zod) → API Route → CRM Webhook
```

---

## Performance Strategy

### Target Metrics

| Metric | Target | Strategy |
|--------|--------|----------|
| LCP | < 1.5s | Image optimization, font preload |
| FID | < 100ms | Minimal client JS |
| CLS | < 0.1 | Reserved space for images |
| TTI | < 2.0s | Code splitting |

### Implementation

1. **Image Optimization**
   - Next.js `<Image>` with automatic WebP
   - Lazy loading below fold
   - Proper `sizes` attribute

2. **Font Loading**
   - Google Fonts with `display: swap`
   - Preload critical fonts
   - Subset fonts to reduce size

3. **Code Splitting**
   - Dynamic imports for heavy components
   - Route-based splitting (automatic)
   - Analyze bundle with `@next/bundle-analyzer`

4. **Caching**
   - Static pages with ISR
   - CDN caching via Vercel Edge
   - Asset caching headers

---

## Security Considerations

### Input Validation

All user inputs validated with Zod:

```typescript
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
})
```

### API Routes

- Rate limiting (planned: Upstash)
- CORS configuration
- Input sanitization
- Error handling (no stack traces in production)

### Environment Variables

- Sensitive keys server-side only
- `NEXT_PUBLIC_` prefix only for client-safe values
- `.env.local` in `.gitignore`

### Headers (Vercel)

```json
{
  "headers": [
    {
      "key": "X-Content-Type-Options",
      "value": "nosniff"
    },
    {
      "key": "X-Frame-Options", 
      "value": "DENY"
    }
  ]
}
```

---

## Future Considerations

### Phase 5: CMS Integration

**Recommended:** Sanity

```
Sanity Studio → Content API → Next.js ISR → Vercel Edge
```

Rationale:
- Real-time preview
- Custom schemas
- TypeScript SDK
- Generous free tier

### Phase 6+: Authentication

**Recommended:** NextAuth.js + Azure AD

For federal clients requiring SSO:
- Azure AD B2C for external users
- SAML/OIDC federation
- MFA enforcement

### Scale Considerations

If traffic exceeds Vercel limits:
- Consider AWS Amplify or custom EKS
- Database layer: Vercel Postgres or PlanetScale
- For FedRAMP: AWS GovCloud deployment

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2025-12-17 | Next.js 14 App Router | Best DX for React, Vercel optimization |
| 2025-12-17 | Tailwind CSS | Rapid iteration, design tokens |
| 2025-12-17 | Framer Motion | Best React animation library |
| 2025-12-17 | Vercel deployment | Optimal for Next.js |
| 2025-12-17 | Proprietary license | Enterprise positioning |

---

## References

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Vercel Documentation](https://vercel.com/docs)

---

*Last updated: December 2025*
