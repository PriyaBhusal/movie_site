import {Router} from 'express';
import { MovieController } from '../controllers/movieController';
import { exceptionHandler } from '../../middlewares';
const movieRoutes = Router();

movieRoutes.get('/',exceptionHandler(MovieController.getMovie))
movieRoutes.post('/',exceptionHandler(MovieController.Create))
movieRoutes.patch('/:id',exceptionHandler(MovieController.Update))
movieRoutes.delete('/:id',exceptionHandler(MovieController.Delete))

export default movieRoutes;