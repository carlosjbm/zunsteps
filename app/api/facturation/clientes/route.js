import {
  getClients,
  getClientFacturated,
  updateClientFacturado,
} from "@/app/src/services/facturation.service";
/**Ojo cambiar esta logica para facturation.service.js */
const { NextResponse } = require("next/server");
export async function GET() {
  const clients = await getClients();
  const facturated = await getClientFacturated();
  const gaviota = clients.filter((client) => client.id_cadena === 1).length;
  const gaviotaFacturated = facturated.filter(
    (client) => client.id_cadena === 1 && client.facturado === 1,
  ).length;
  const islazul = clients.filter((client) => client.id_cadena === 2).length;
  const islazulFacturated = facturated.filter(
    (client) => client.id_cadena === 2 && client.facturado === 1,
  ).length;
  const otros = clients.filter((client) => client.id_cadena === 3).length;
  const otrosFacturated = facturated.filter(
    (client) => client.id_cadena === 3 && client.facturado === 1,
  ).length;
  const generalPorcentage = Math.round(
    (facturated.length / clients.length) * 100,
  );
  const gaviotaPorcentage = Math.round((gaviotaFacturated / gaviota) * 100);
  const islazulPorcentage = Math.round((islazulFacturated / islazul) * 100);
  const otrosPorcentage = Math.round((otrosFacturated / otros) * 100);
  return NextResponse.json({
    clients,
    gaviota,
    islazul,
    otros,
    generalPorcentage,
    gaviotaPorcentage,
    islazulPorcentage,
    otrosPorcentage,
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { clientesFacturacion } = body;

    // Actualizar cada cliente
    for (const [clientId, facturado] of Object.entries(clientesFacturacion)) {
      await updateClientFacturado(parseInt(clientId), facturado);
    }

    return NextResponse.json(
      { message: "Clientes actualizados correctamente" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error al actualizar clientes:", error);
    return NextResponse.json(
      { error: "Error al actualizar clientes" },
      { status: 500 },
    );
  }
}
