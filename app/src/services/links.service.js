import pool from "@/app/lib/db";

export async function getLinks() {
  const getLinksQuery = `select * from links`;
  const [rows] = await pool.query(getLinksQuery);
  return rows;
}
export async function createLink(url, description, userId) {
  const insertLinkQuery = ` INSERT INTO links (url,descripcion,id_user)
      VALUES (?,?,?)`;
  const [result] = await pool.query(insertLinkQuery, [
    url,
    description,
    userId,
  ]);
  return {
    id: result.id,
    url: url,
    description: description,
    userId: userId,
  };
}
