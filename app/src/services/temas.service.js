const { default: pool } = require("@/app/lib/db");

const query = `select * from temas;`;
export const getTemas = async () => {
  const [rows] = await pool.query(query);
  return rows;
};
