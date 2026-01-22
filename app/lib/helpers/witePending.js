import fs from "fs";

export const writeResultToFile = (filename, data) => {
  // Convertir el objeto a string con formato legible
  const content = `export const result = ${JSON.stringify(data, null, 2)};\n`;

  // Escribir en archivo
  fs.writeFileSync(filename, content, "utf-8");

  console.log(`✅ Resultado escrito en ${filename}`);
};
