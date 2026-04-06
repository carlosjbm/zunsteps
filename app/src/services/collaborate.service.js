import pool from "@/app/lib/db";
import { colaboration, usersAndLikes } from "@/app/lib/queries/colaborations";

export async function getBestCollaborators() {
  const [colaborationData] = await pool.query(colaboration);
  const [usersLikes] = await pool.query(usersAndLikes);
  const firstUsers = usersLikes.slice(0, 2).map((us) => {
    return us?.usuario_nombre;
  }); //Primeros tres usuarios
  return {
    genericData: colaborationData,
    likesStats: usersLikes,
    bestRank: firstUsers,
  };
}
