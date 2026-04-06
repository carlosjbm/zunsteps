import { getBestCollaborators } from "@/app/src/services/collaborate.service";

const { NextResponse } = require("next/server");

export async function GET() {
  try {
    const response = await getBestCollaborators();
    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching temas:", error);
    return NextResponse.json(
      { error: "Error al obtener Mejores colaboradores" },
      { status: 500 },
    );
  }
}
