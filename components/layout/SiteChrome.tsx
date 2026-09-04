'use client'

import { usePathname } from 'next/navigation'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const CHROMELESS: string[] = []

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hideChrome = CHROMELESS.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  )

  if (hideChrome) {
    return <>{children}</>
  }

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" tabIndex={-1} className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  )
}
