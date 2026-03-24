import { redirect } from 'next/navigation'

// /case-studies has moved to /pastperformance (also handled by next.config.js 301 redirect)
export default function CaseStudiesPage() {
  redirect('/pastperformance')
}
