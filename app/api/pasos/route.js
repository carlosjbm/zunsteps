const { getPasos } = require("@/app/src/services/pasos.service");
const { NextResponse } = require("next/server");

export async function GET(params) {
  const data = await getPasos();
  return NextResponse.json(data);
}
