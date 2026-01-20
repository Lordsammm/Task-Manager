import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'fallback-secret-key'
);

// Routes that require authentication
const protectedRoutes = ['/dashboard'];
// Routes that should redirect to dashboard if logged in
const authRoutes = ['/login', '/register'];

export async function proxy(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  // Check if the route is protected
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route));

  let isValidToken = false;
  
  if (token) {
    try {
      await jwtVerify(token, JWT_SECRET);
      isValidToken = true;
    } catch {
      isValidToken = false;
    }
  }

  // Redirect to login if trying to access protected route without valid token
  if (isProtectedRoute && !isValidToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Redirect to dashboard if trying to access auth routes with valid token
  if (isAuthRoute && isValidToken) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register'],
};
