import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Visionblox | Enterprise Operating Systems',
  description: 'AI-powered platforms for operational intelligence, procurement, and compliance. We build the operating systems that power enterprise operations.',
  keywords: ['enterprise software', 'operational intelligence', 'AI platforms', 'procurement', 'compliance', 'federal solutions'],
  authors: [{ name: 'Visionblox LLC' }],
  openGraph: {
    title: 'Visionblox | Enterprise Operating Systems',
    description: 'AI-powered platforms for operational intelligence, procurement, and compliance.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Visionblox',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visionblox | Enterprise Operating Systems',
    description: 'AI-powered platforms for operational intelligence, procurement, and compliance.',
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
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background-primary text-text-primary font-sans antialiased">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

