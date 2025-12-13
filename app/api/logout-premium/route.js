// app/api/logout-premium/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  const response = NextResponse.json(
    { success: true, message: 'Sesión cerrada' },
    { status: 200 }
  );

  // Eliminar la cookie
  response.cookies.set('premium_key', '', {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 0,
    path: '/',
  });

  return response;
}
