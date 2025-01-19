import {Router} from 'express';
import { GenreController } from '../controllers';
import { exceptionHandler } from '../../middlewares';
const userRoutes = Router();

//@ts-ignore
userRoutes.get('/',exceptionHandler(GenreController.getGenre));
//userRoutes.post('/',exceptionHandler(GenreController.));


export default userRoutes;