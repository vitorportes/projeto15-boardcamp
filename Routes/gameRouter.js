import { Router } from 'express';
import { createGame, getGames } from '../Controllers/gameController.js';
import gameValidator from '../Middlewares/gameValidator.js';

const gameRouter = Router();

gameRouter.get('/games', getGames);
gameRouter.post('/games', gameValidator, createGame);

export default gameRouter;
