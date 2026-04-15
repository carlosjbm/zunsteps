import pool from "@/app/lib/db";

//consultas
const allErrorsQuery = `select * from errores`;
const publicErros = ` select * from errors where nivel_acc=?`;
const createNewError = `INSERT INTO errores(
    ERROR,
    solucion,
    imagen,
    nivel_acc
)
VALUES(
    ?,
    ?,
    ?,
    ?
);`;

//Obtener todos los errores
export async function getErrors() {
  const [errors] = await pool.query(allErrorsQuery);
  return { data: errors };
}
//Guardar un nuevo error en la bd
export async function storeError(error, solucion, imagen, nivel_acc) {
  const [result] = await pool.query(createNewError, [
    error,
    solucion,
    imagen,
    nivel_acc,
  ]);
  return result;
}
