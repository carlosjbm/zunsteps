import {
  getClients,
  getClientFacturated,
} from "@/app/src/services/facturation.service";
/**Ojo cambiar esta logica para facturation.service.js */
const { NextResponse } = require("next/server");
export async function GET() {
  const clients = await getClients();
  const facturated = await getClientFacturated();
  const gaviota = clients.filter((client) => client.id_cadena === 1).length;
  const islazul = clients.filter((client) => client.id_cadena === 2).length;
  const otros = clients.filter((client) => client.id_cadena === 3).length;
  const generalPorcentage = Math.round(
    (facturated.length / clients.length) * 100,
  );
  const gaviotaPorcentage = Math.round((gaviota / clients.length) * 100);
  const islazulPorcentage = Math.round((islazul / clients.length) * 100);
  const otrosPorcentage = Math.round((otros / clients.length) * 100);
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
