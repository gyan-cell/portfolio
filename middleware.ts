// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { CryptoService } from './utils/crypto';

export async function middleware(request: NextRequest) {
  try {
    const randomId = await CryptoService.generateRandomBytes(16);
    const requestId = await CryptoService.hash(randomId);

    // Clone the response and add the header
    const response = NextResponse.next();
    response.headers.set('x-request-id', requestId);

    return response;
  } catch (error) {
    console.error('Middleware error:', error);
    return NextResponse.next();
  }
}


export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
