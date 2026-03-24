import { permanentRedirect } from 'next/navigation'

// /case-studies has moved to /pastperformance (also handled by next.config.js 301 redirect)
export default function CaseStudiesPage() {
  permanentRedirect('/pastperformance')
}
