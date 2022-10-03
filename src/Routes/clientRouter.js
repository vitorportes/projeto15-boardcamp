import { Router } from 'express';
import {
  createClient,
  getClientById,
  getClients,
  updateClient,
} from '../Controllers/clientController.js';
import clientValidator from '../Middlewares/clientValidator.js';

const clientRouter = Router();

clientRouter.get('/customers', getClients);
clientRouter.get('/customers/:id', getClientById);
clientRouter.post('/customers', clientValidator, createClient);
clientRouter.put('/customers/:id', clientValidator, updateClient); // FALTA TESTAR A VALIDAÇÃO

export default clientRouter;
