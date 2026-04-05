import { getTemas } from "@/app/src/services/temas.service";

const { NextResponse } = require("next/server");

export async function GET() {
  try {
    const response = await getTemas();
    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching temas:", error);
    return NextResponse.json(
      { error: "Error al obtener temas" },
      { status: 500 },
    );
  }
}
