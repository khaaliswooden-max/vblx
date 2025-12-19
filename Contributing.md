# Contributing to VBLX

Thank you for your interest in contributing to the Visionblox Enterprise Platform. This document provides guidelines and workflows for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Branching Strategy](#branching-strategy)
- [Commit Convention](#commit-convention)
- [Pull Request Process](#pull-request-process)
- [Code Standards](#code-standards)
- [Testing Requirements](#testing-requirements)
- [Documentation](#documentation)

---

## Code of Conduct

All contributors are expected to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

---

## Getting Started

### Prerequisites

- Node.js 18.17 or higher
- npm 9+ or yarn 1.22+
- Git 2.30+
- VS Code or Cursor (recommended)

### Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/khaaliswooden-max/vblx.git
cd vblx

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env.local

# 4. Start development server
npm run dev
```

### Recommended VS Code Extensions

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Importer
- GitLens

---

## Development Workflow

### 1. Create an Issue First

Before starting work, ensure an issue exists for your task:

- Check existing issues to avoid duplicates
- Create a new issue with clear description
- Wait for assignment or approval on significant changes

### 2. Create a Branch

Branch from `main` using the naming convention below.

### 3. Make Changes

- Write clean, documented code
- Follow code standards
- Add tests for new features
- Update documentation as needed

### 4. Submit Pull Request

- Ensure all checks pass
- Request review from maintainers
- Address feedback promptly

---

## Branching Strategy

We use a simplified GitFlow model:

```
main (production)
  │
  ├── develop (integration)
  │     │
  │     ├── feature/VBLX-123-add-platform-page
  │     ├── feature/VBLX-124-intake-form
  │     └── feature/VBLX-125-navigation-update
  │
  ├── hotfix/VBLX-999-critical-fix
  │
  └── release/v1.0.0
```

### Branch Naming Convention

| Type | Pattern | Example |
|------|---------|---------|
| Feature | `feature/VBLX-{issue}-{description}` | `feature/VBLX-42-austra-page` |
| Bug Fix | `fix/VBLX-{issue}-{description}` | `fix/VBLX-57-nav-dropdown` |
| Hotfix | `hotfix/VBLX-{issue}-{description}` | `hotfix/VBLX-99-auth-error` |
| Release | `release/v{version}` | `release/v1.2.0` |
| Docs | `docs/{description}` | `docs/api-reference` |
| Chore | `chore/{description}` | `chore/update-deps` |

### Branch Rules

- `main` — Protected, requires PR with approval
- `develop` — Integration branch, requires PR
- Feature branches — Merge to `develop` via PR
- Hotfixes — Can merge directly to `main` with approval

---

## Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

### Types

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Code style (formatting, semicolons) |
| `refactor` | Code refactoring |
| `perf` | Performance improvement |
| `test` | Adding or updating tests |
| `chore` | Build process, dependencies |
| `ci` | CI/CD configuration |
| `revert` | Revert previous commit |

### Scopes

| Scope | Description |
|-------|-------------|
| `ui` | UI components |
| `layout` | Layout components |
| `hero` | Hero section |
| `platforms` | Platform pages |
| `nav` | Navigation |
| `footer` | Footer |
| `forms` | Intake forms |
| `api` | API routes |
| `config` | Configuration files |
| `deps` | Dependencies |

### Examples

```bash
# Feature
feat(platforms): add AUSTRA detail page

# Bug fix
fix(nav): resolve dropdown z-index issue on mobile

# Documentation
docs(readme): update deployment instructions

# Refactor
refactor(ui): consolidate button variants

# Chore
chore(deps): upgrade Next.js to 14.2.1
```

---

## Pull Request Process

### Before Submitting

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No console.log or debugging code
- [ ] All tests passing
- [ ] Branch is up to date with target

### PR Title Format

```
[TYPE] Brief description (#issue)
```

Examples:
- `[FEAT] Add AUREON platform page (#42)`
- `[FIX] Resolve mobile navigation bug (#57)`
- `[DOCS] Update API documentation (#63)`

### Review Process

1. **Automated Checks** — Linting, type checking, build
2. **Code Review** — At least 1 approval required
3. **QA Review** — For UI changes, visual review required
4. **Merge** — Squash and merge to maintain clean history

### Merge Requirements

- All CI checks passing
- At least 1 approving review
- No unresolved conversations
- Branch up to date with target

---

## Code Standards

### TypeScript

```typescript
// ✅ Good: Explicit types, clear naming
interface PlatformCardProps {
  platform: 'austra' | 'aureon' | 'civium'
  title: string
  description: string
  metrics: PlatformMetric[]
}

// ❌ Bad: Implicit any, unclear naming
function getData(x) {
  return x.stuff
}
```

### React Components

```typescript
// ✅ Good: Functional component with proper typing
export function PlatformCard({ platform, title, description }: PlatformCardProps) {
  return (
    <Card variant="platform" platform={platform}>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  )
}

// ❌ Bad: Class component, no types
class PlatformCard extends React.Component {
  render() {
    return <div>{this.props.title}</div>
  }
}
```

### Tailwind CSS

```tsx
// ✅ Good: Use design system tokens
<div className="bg-background-secondary text-text-primary p-6 rounded-xl">

// ❌ Bad: Arbitrary values
<div className="bg-[#1a1a1a] text-[#ffffff] p-[24px] rounded-[12px]">
```

### File Organization

```
components/
├── ui/              # Reusable primitives
│   ├── Button.tsx
│   └── Card.tsx
├── layout/          # Layout components
│   ├── Navigation.tsx
│   └── Footer.tsx
└── sections/        # Page sections
    ├── Hero.tsx
    └── PlatformShowcase.tsx
```

---

## Testing Requirements

### Unit Tests

- All utility functions must have tests
- Component logic should be tested
- Use Jest + React Testing Library

### Test File Naming

```
Component.tsx       → Component.test.tsx
utils.ts           → utils.test.ts
```

### Minimum Coverage

| Type | Requirement |
|------|-------------|
| Utility functions | 90% |
| Components | 70% |
| API routes | 80% |

---

## Documentation

### Code Comments

```typescript
/**
 * Calculates win probability based on multiple factors.
 * Uses weighted scoring algorithm aligned with AUREON methodology.
 * 
 * @param capability - Capability match score (0-1)
 * @param pastPerformance - Past performance score (0-1)
 * @param setAside - Set-aside eligibility multiplier
 * @returns Win probability as decimal (0-1)
 */
function calculateWinProbability(
  capability: number,
  pastPerformance: number,
  setAside: number
): number {
  // ... implementation
}
```

### README Updates

When adding new features, update relevant documentation:

- Component props in code comments
- Usage examples in README
- Architecture decisions in `docs/ARCHITECTURE.md`

---

## Questions?

- **Technical questions**: Open a GitHub Discussion
- **Security issues**: See [SECURITY.md](SECURITY.md)
- **Direct contact**: khaalis.wooden@visionblox.com

---

*Thank you for contributing to Visionblox!*
