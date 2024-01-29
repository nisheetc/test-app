import { NextRequest, NextResponse } from 'next/server';
import { rateLimiter } from '@/lib/rate-limiter';
import { LOCALHOST_IP } from '@/utils/constants';

export default async function ChatMiddleware(req: NextRequest) {
  try {
    const ip = req.ip ?? LOCALHOST_IP;
    const { success } = await rateLimiter.limit(ip);

    if (!success) {
      return new NextResponse('You are writing messages too fast.');
    }

    // Proceed with other middleware logic or return NextResponse.next() if this is the only middleware
    return NextResponse.next();
  } catch (error) {
    return new NextResponse(
      'Sorry, something went wrong. Please try again later.'
    );
  }
}
