import db from '../Config/db.js';

export async function getClients(req, res) {
  const { cpf } = req.query;
  try {
    let whereClause = '';

    if (cpf) {
      whereClause += `WHERE cpf LIKE '${cpf}%'`;
    }
    const result = await db.query(`SELECT * FROM customers ${whereClause}`);
    res.send(result.rows);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export async function getClientById(req, res) {
  const { id } = req.params;
  try {
    let whereClause = '';
    const result = await db.query(`SELECT * FROM customers WHERE id = $1`, [
      id,
    ]);
    if (result.rowCount > 0) {
      res.send(result.rows[0]);
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export async function createClient(req, res) {
  const { name, phone, cpf, birthday } = req.body;
  try {
    const isRepeated = await db.query(
      `SELECT cpf FROM customers WHERE cpf = $1`,
      [cpf]
    );
    if (isRepeated.rowCount === 0) {
      await db.query(
        `INSERT INTO customers (name, phone, cpf, birthday) VALUES ($1, $2, $3, $4)`,
        [name, phone, cpf, birthday]
      );
      res.sendStatus(201);
    } else {
      res.sendStatus(409);
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export async function updateClient(req, res) {
  const customer = req.body;
  const { id } = req.params;
  try {
    await db.query(
      `UPDATE customers SET name = $1, phone = $2, cpf = $3, birthday = $4 WHERE id = $5`,
      [customer.name, customer.phone, customer.cpf, customer.birthday, id]
    );
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
