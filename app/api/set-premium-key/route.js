// app/api/set-premium-key/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { key } = await request.json();

    // Validar que la clave sea correcta
    if (key !== 'Master*25') {
      return NextResponse.json(
        { error: 'Clave inválida' },
        { status: 401 }
      );
    }

    // Crear respuesta con cookie
    const response = NextResponse.json(
      { success: true, message: 'Acceso otorgado' },
      { status: 200 }
    );

    // Guardar la clave en una cookie segura (1 mes de duración)
    response.cookies.set('premium_key', key, {
      httpOnly: true, // No accesible desde JavaScript del cliente
      secure: true, // Solo HTTPS
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 30, // 30 días
      path: '/',
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: 'Error procesando la solicitud' },
      { status: 500 }
    );
  }
}
