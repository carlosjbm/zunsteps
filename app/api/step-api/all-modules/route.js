/**esta ruta provee todos los modulos ->api/step-api/all-modules */
import { allModules } from "../services/modules.service";

const { NextResponse } = require("next/server");
const response = allModules();

export async function GET() {
  return NextResponse.json(response);
}
