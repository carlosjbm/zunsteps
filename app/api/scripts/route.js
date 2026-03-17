/**
 * End Point que devuelve los Scripts
 * resource: /api/scripts
 */
import { getScripts } from "@/app/src/services/scripts.service";
const { NextResponse } = require("next/server");

export async function GET(params) {
  const scripts = await getScripts();
  return NextResponse.json(scripts);
}
