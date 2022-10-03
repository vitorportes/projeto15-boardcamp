import rentalSchema from '../Schemas/rentalSchema.js';

export function validateRental(req, res, next) {
  const rental = req.body;
  const validation = rentalSchema.validate(rental);
  if (validation.error) {
    return res.sendStatus(400); // bad request
  }

  next();
}
