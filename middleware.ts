import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  
  // Redirect www to non-www (makes visionblox.org the canonical domain)
  if (host === 'www.visionblox.org') {
    const url = request.nextUrl.clone()
    url.host = 'visionblox.org'
    return NextResponse.redirect(url, 301)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
