import { Router } from 'express';
import {
  getCategories,
  createCategory,
} from '../Controllers/categoryController.js';

const categoryRouter = Router();

categoryRouter.get('/categories', getCategories);
categoryRouter.post('/categories', createCategory);

export default categoryRouter;
