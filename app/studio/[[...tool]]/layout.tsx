/**
 * Sanity Studio Layout
 * 
 * Provides a minimal layout for the Sanity Studio.
 * This layout doesn't include the main site navigation or footer.
 */

export const metadata = {
  title: 'VBLX Content Studio',
  description: 'Content management studio for Visionblox',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
