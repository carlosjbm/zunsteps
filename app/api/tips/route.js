import { getTips } from "@/app/src/services/tips.service";

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
