import db from '../Config/db.js';

export async function getGames(req, res) {
  const games = await db.query(`SELECT * FROM games`);
  res.status(200).send(games.rows);
}
