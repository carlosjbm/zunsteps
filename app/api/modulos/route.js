const { NextResponse } = require("next/server");
const { getAllData } = require("../../src/services/data.service");

export async function GET() {
  try {
    const modulesData = await getAllData();
    return NextResponse.json(modulesData);
  } catch (error) {
    console.error("Error en GET /api/modulos:", error);
    return NextResponse.json(
      { error: "Error al obtener los módulos" },
      { status: 500 },
    );
  }
}

/**
 * GET /api/modulos?id=1 - Obtiene un módulo específico
 */
export async function getModuleById(moduleId) {
  try {
    const allData = await getAllData();
    return allData.find((m) => m.id === parseInt(moduleId)) || null;
  } catch (error) {
    console.error("Error al obtener módulo:", error);
    return null;
  }
}
