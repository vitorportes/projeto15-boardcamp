import { Router } from 'express';
import {
  deleteRental,
  finish,
  getRentals,
  rent,
} from '../Controllers/rentalController.js';
import { validateRental } from '../Middlewares/rentalValidator.js';

const rentalRouter = Router();

rentalRouter.get('/rentals', getRentals);
rentalRouter.post('/rentals', validateRental, rent);
rentalRouter.post('/rentals/:id/return', finish);
rentalRouter.delete('/rentals/:id', deleteRental);

export default rentalRouter;
