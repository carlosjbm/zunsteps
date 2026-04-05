import { getTips, createTip } from "@/app/src/services/tips.service";

const { NextResponse } = require("next/server");

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "0");
    const limit = parseInt(searchParams.get("limit") || "10");

    const response = await getTips();

    // Aplicar paginación
    const startIndex = page * limit;
    const endIndex = startIndex + limit;
    const paginatedTips = response.slice(startIndex, endIndex);

    return NextResponse.json({
      tips: paginatedTips,
      hasMore: endIndex < response.length,
      total: response.length,
      page,
      limit,
    });
  } catch (error) {
    console.error("Error fetching tips:", error);
    return NextResponse.json(
      { error: "Error al obtener tips" },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    const { nombre, descripcion, usuario_id, tema_id, clase_id } =
      await request.json();

    if (!nombre || !descripcion) {
      return NextResponse.json(
        { error: "Nombre y descripción son requeridos" },
        { status: 400 },
      );
    }

    const result = await createTip(
      nombre,
      descripcion,
      usuario_id || 1,
      tema_id || 3,
      clase_id || 1,
    );

    return NextResponse.json({
      success: true,
      message: "Tip creado exitosamente",
      tip: result,
    });
  } catch (error) {
    console.error("Error creating tip:", error);
    return NextResponse.json(
      { error: "Error al crear el tip" },
      { status: 500 },
    );
  }
}
