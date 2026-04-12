import pool from "@/app/lib/db";

export async function getLinks() {
  const getLinksQuery = `select * from links`;
  const [rows] = await pool.query(getLinksQuery);
  return rows;
}
export async function createLink(url, descriptionLink, userId) {
  /**Validacion de los valores */
  if (!url) {
    throw new Error("La url es obligatoria");
  }

  const insertLinkQuery = ` INSERT INTO links (url,descripcion,id_user)
      VALUES (?,?,?)`;
  const [result] = await pool.query(insertLinkQuery, [
    url,
    descriptionLink,
    userId,
  ]);
  return {
    id: result.id,
    url: url,
    descriptionLink: descriptionLink,
    userId: userId,
  };
}
