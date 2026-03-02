const { NextResponse } = require("next/server");
const { getModules } = require("../../src/services/modules.service");

export async function GET() {
  const result = await getModules();
  return NextResponse.json(result);
}
