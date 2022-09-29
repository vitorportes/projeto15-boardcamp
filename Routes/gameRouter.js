import { Router } from 'express';
import { getGames } from '../Controllers/gameController.js';

const gameRouter = Router();

gameRouter.get('/games', getGames);

export default gameRouter;
