import db from '../Config/db.js';

export async function getCategories(req, res) {
  const categories = await db.query('SELECT * FROM categories');
  res.status(200).send(categories.rows);
}

export async function createCategory(req, res) {
  const category = req.body;
  console.log(category);

  try {
    const isRepeated = db.query(`SELECT * FROM categories WHERE name = $1`, [
      category.name,
    ]);
    if (isRepeated.rows === 0) {
      const result = db.query(`INSERT INTO categories(name) VALUES ($1)`, [
        category.name,
      ]);
      res.sendStatus(201);
    } else {
      res.sendStatus(409);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
