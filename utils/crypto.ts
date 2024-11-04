export class CryptoService {
  static async generateRandomBytes(length: number): Promise<string> {
    try {
      const buffer = new Uint8Array(length);
      crypto.getRandomValues(buffer);
      return Array.from(buffer)
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
    } catch (error) {
      console.error('Error generating random bytes:', error);
      throw new Error('Failed to generate random bytes');
    }
  }

  static async hash(text: string): Promise<string> {
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(text);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
    } catch (error) {
      console.error('Error generating hash:', error);
      throw new Error('Failed to generate hash');
    }
  }
}

// // middleware.ts
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { CryptoService } from './utils/crypto';
//
// export async function middleware(request: NextRequest) {
//   try {
//     const randomId = await CryptoService.generateRandomBytes(16);
//     const requestId = await CryptoService.hash(randomId);
//
//     // Clone the response and add the header
//     const response = NextResponse.next();
//     response.headers.set('x-request-id', requestId);
//
//     return response;
//   } catch (error) {
//     console.error('Middleware error:', error);
//     return NextResponse.next();
//   }
// }
//
// export const config = {
//   matcher: '/:path*',
// }
//
// // Example usage in an API route (app/api/example/route.ts)
// import { NextRequest } from 'next/server';
// import { CryptoService } from '@/utils/crypto';
//
// export async function GET(request: NextRequest) {
//   try {
//     const token = await CryptoService.generateRandomBytes(32);
//     const hashedData = await CryptoService.hash('sensitive data');
//
//     return Response.json({
//       token,
//       hashedData,
//       timestamp: Date.now()
//     });
//   } catch (error) {
//     return Response.json(
//       { error: 'Internal Server Error' },
//       { status: 500 }
//     );
//   }
// }
//
//
