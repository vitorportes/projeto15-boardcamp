import { Router } from 'express';
import {
  getCategories,
  createCategory,
} from '../Controllers/categoryController.js';
import validateCategory from '../Middlewares/categoryValidator.js';

const categoryRouter = Router();

categoryRouter.get('/categories', getCategories);
categoryRouter.post('/categories', validateCategory, createCategory);

export default categoryRouter;
