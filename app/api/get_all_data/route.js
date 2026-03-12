const { getAllData } = require("@/app/src/services/data.service");
const { NextResponse } = require("next/server");

export async function GET() {
  const data = await getAllData();
  return NextResponse.json(data);
}
