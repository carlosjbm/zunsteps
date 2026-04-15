import { getErrors } from "@/app/src/services/faststeps.service";
import { NextResponse } from "next/server";

export async function GET(params) {
  const errors = await getErrors();
  if (!errors) {
    throw new Error("Error obteniendo datos");
  }
  return NextResponse.json(errors, { status: 201 });
}
