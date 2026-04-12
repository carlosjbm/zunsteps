import { createLink, getLinks } from "@/app/src/services/links.service";
import { NextResponse } from "next/server";

/**
 * Obtener todos los links
 */
export async function GET() {
  try {
    const links = await getLinks();
    return NextResponse.json(links, { status: 200 });
  } catch (error) {
    console.error("Error en GET /api/admin/usuarios:", error);
    return NextResponse.json(
      { error: "Error obteniendo links" },
      { status: 500 },
    );
  }
}
/**
 * Crear un nuevo link
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { url, descriptionLink, userId } = body;

    const link = await createLink(url, descriptionLink, userId);
    return NextResponse.json(
      {
        success: true,
        message: "Link creado exitosamente",
        link,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error en POST /api/links", error);
    return NextResponse.json(
      { error: error.message || "Error creando links" },
      { status: 500 },
    );
  }
}
