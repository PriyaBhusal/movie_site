import {Router} from 'express';
import { GenreController } from '../controllers';
import { exceptionHandler,validator } from '../../middlewares';
import{createGenre} from '../../validators'
const genreRoutes = Router();

//@ts-ignore
genreRoutes.get('/',exceptionHandler(GenreController.getGenre));
genreRoutes.post('/',
    exceptionHandler(validator.check(createGenre)),
    exceptionHandler(GenreController.Create));
genreRoutes.patch('/:id',exceptionHandler(GenreController.Update));
genreRoutes.delete('/:id',exceptionHandler(GenreController.Delete))

export default genreRoutes;