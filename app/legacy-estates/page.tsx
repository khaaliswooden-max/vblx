import type { Metadata } from 'next'
import LegacyEstates from '@/components/pages/LegacyEstates'

const TITLE = 'Legacy Estates | Visionblox'
const DESCRIPTION =
  'Signed, deterministic assessment of legacy COBOL estates. Know exactly what is in your mainframe before anyone quotes you a modernization.'
const OG_DESCRIPTION =
  'Know exactly what is in your COBOL estate — before anyone quotes you a modernization.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: '/legacy-estates',
  },
  openGraph: {
    title: TITLE,
    description: OG_DESCRIPTION,
    url: 'https://visionblox.org/legacy-estates',
    type: 'website',
    siteName: 'Visionblox',
    locale: 'en_US',
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
    title: TITLE,
    description: OG_DESCRIPTION,
    images: ['/og-image.png'],
  },
}

export default function LegacyEstatesPage() {
  return <LegacyEstates />
}
