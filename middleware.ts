import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Redirect suspended blog sections to main blog
  if (
    pathname.startsWith('/the-social-forge') ||
    pathname.startsWith('/the-signal') ||
    pathname.startsWith('/the-terminal')
  ) {
    return NextResponse.redirect(new URL('/blog', request.url), 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/the-social-forge/:path*',
    '/the-signal/:path*',
    '/the-terminal/:path*',
  ],
}
