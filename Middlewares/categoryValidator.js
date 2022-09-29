import categorySchema from '../Schemas/categorySchema.js';

export default function validateCategory(req, res, next) {
  const category = req.body;
  const validation = categorySchema.validate(category);

  if (validation.error) {
    res.sendStatus(409);
  }

  next();
}
