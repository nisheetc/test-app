import { NextRequest, NextResponse } from 'next/server';

import { ChatMiddleware } from '@/lib/middleware';
import { parse } from '@/lib/middleware/utils';

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api/ routes
     * 2. /_next/ (Next.js internals)
     * 3. /_proxy/ (special page for OG tags proxying)
     * 4. /_static (inside /public)
     * 5. /_vercel (Vercel internals)
     * 6. /favicon.ico, /sitemap.xml, /robots.txt (static files)
     */
    '/((?!api/|_next/|_proxy/|_static|_vercel|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};

export default async function middleware(req: NextRequest) {
  const { path } = parse(req);

  if (path.startsWith('/api/message/')) {
    return ChatMiddleware(req);
  }

  return NextResponse.next();
}
