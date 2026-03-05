import { getAcciones } from "@/app/src/services/acciones.service";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await getAcciones();
  return NextResponse.json(data);
}
