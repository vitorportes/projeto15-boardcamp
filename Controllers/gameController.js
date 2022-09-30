import db from '../Config/db.js';

export async function getGames(req, res) {
  const { name } = req.query;

  try {
    let whereClause = '';
    if (name) {
      whereClause += `WHERE games.name ILIKE '${name}%'`;
    }
    const games =
      await db.query(`SELECT games.*, categories.name AS "categoryName" FROM games 
    JOIN categories ON games."categoryId" = categories.id ${whereClause}`);
    res.send(games.rows);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export async function createGame(req, res) {
  const { name, image, stockTotal, categoryId, pricePerDay } = req.body;

  try {
    const result = await db.query(`SELECT id FROM games WHERE name = $1`, [
      name,
    ]);
    if (result.rowCount > 0) {
      return res.sendStatus(409);
    }
    await db.query(
      `
    INSERT INTO games (name, image, "stockTotal", "categoryId", "pricePerDay")
    VALUES ($1, $2, $3, $4, $5)
    `,
      [name, image, stockTotal, categoryId, pricePerDay]
    );
    res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
