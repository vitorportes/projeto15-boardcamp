import db from '../Config/db.js';

export async function getCategories(req, res) {
  const categories = await db.query('SELECT * FROM categories');
  res.status(200).send(categories.rows);
}

export async function createCategory(req, res) {
  const category = req.body;
  console.log(category);

  try {
    const result = await db.query(`SELECT id FROM categories WHERE name = $1`, [
      category.name,
    ]);
    if (result.rowCount > 0) {
      return res.sendStatus(409);
    }
    await db.query(`INSERT INTO categories(name) VALUES ($1)`, [category.name]);
    res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
