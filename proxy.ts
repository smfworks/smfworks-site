import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Redirect suspended blog sections to main blog
  if (
    pathname.startsWith('/the-social-forge')
  ) {
    return NextResponse.redirect(new URL('/blog', request.url), 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/the-social-forge/:path*',
  ],
}
