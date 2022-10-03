import clientSchema from '../Schemas/clientSchema.js';

export default function clientValidator(req, res, next) {
  const client = req.body;
  const validation = clientSchema.validate(client);

  if (validation.error) {
    return res.sendStatus(400);
  }

  next();
}
