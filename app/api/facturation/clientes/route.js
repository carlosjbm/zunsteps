import {
  getClients,
  getClientFacturated,
  updateClientFacturado,
  getCountClientesByCadena,
  getFacturatedClientsByCadena,
} from "@/app/src/services/facturation.service";
/**Ojo cambiar esta logica para facturation.service.js */
const { NextResponse } = require("next/server");
export async function GET() {
  const clients = await getClients();
  const facturated = await getClientFacturated();
  const gaviota = await getCountClientesByCadena(1);
  const gaviotaFacturated = await getFacturatedClientsByCadena(1);
  const islazul = await getCountClientesByCadena(2);
  const islazulFacturated = await getFacturatedClientsByCadena(2);
  const otros = await getCountClientesByCadena(3);
  const otrosFacturated = await getFacturatedClientsByCadena(3);
  const generalPorcentage = Math.round(
    (facturated.length / clients.length) * 100,
  );
  const gaviotaPorcentage = Math.round((gaviotaFacturated / gaviota) * 100);
  const islazulPorcentage = Math.round((islazulFacturated / islazul) * 100);
  const otrosPorcentage = Math.round((otrosFacturated / otros) * 100);
  return NextResponse.json({
    clients,
    gaviotaData: { gaviota, gaviotaFacturated, gaviotaPorcentage },
    islazulData: { islazul, islazulFacturated, islazulPorcentage },
    otrosData: { otros, otrosFacturated, otrosPorcentage },
    generalPorcentage,
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
