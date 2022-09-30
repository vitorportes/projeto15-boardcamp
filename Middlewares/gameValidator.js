import gameSchema from '../Schemas/gameSchema.js';

export default function gameValidator(req, res, next) {
  const game = req.body;
  const validation = gameSchema.validate(game);

  if (validation.error) {
    return res.sendStatus(400);
  }

  next();
}
