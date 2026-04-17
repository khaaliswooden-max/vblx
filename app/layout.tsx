import type { Metadata } from 'next'
import './globals.css'
import SiteChrome from '@/components/layout/SiteChrome'
import { GoogleAnalytics } from '@/components/analytics'

export const metadata: Metadata = {
  metadataBase: new URL('https://visionblox.org'),
  title: 'Visionblox | Healthcare Data Infrastructure',
  description: 'Healthcare data infrastructure for the institutions that govern it. Epic EMR, MITA-compliant Medicaid systems, and federal-ready AI pipelines.',
  keywords: ['healthcare IT', 'Epic EMR', 'MITA', 'HIPAA', 'Medicaid modernization', 'federal healthcare', 'HL7', 'FHIR'],
  authors: [{ name: 'Visionblox LLC' }],
  openGraph: {
    title: 'Visionblox | Healthcare Data Infrastructure',
    description: 'Healthcare data infrastructure for the institutions that govern it.',
    url: 'https://visionblox.org',
    type: 'website',
    locale: 'en_US',
    siteName: 'Visionblox',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Visionblox — Healthcare Data Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visionblox | Healthcare Data Infrastructure',
    description: 'Healthcare data infrastructure for the institutions that govern it.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts — loaded at runtime */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-vbx-navy text-vbx-white font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NDRCDB3T"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <GoogleAnalytics />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  )
}
