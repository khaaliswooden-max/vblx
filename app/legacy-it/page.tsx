import type { Metadata } from 'next'
import LegacyIT from '@/components/pages/LegacyIT'

export const metadata: Metadata = {
  title: 'Legacy IT Services | Visionblox',
  description:
    'Fed/SLED IT subcontracting, staff augmentation, and traditional on-premise and remote IT services — no cloud mandate.',
  openGraph: {
    title: 'Legacy IT Services | Visionblox',
    description:
      'Fed/SLED IT subcontracting, staff augmentation, and traditional on-premise and remote IT services.',
    type: 'website',
  },
}

export default function LegacyITPage() {
  return <LegacyIT />
}
