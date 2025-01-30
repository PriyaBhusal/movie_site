import {Router} from 'express';
import { DirectorController } from '../controllers';
import { exceptionHandler,validator } from '../../middlewares';
import {createDirector} from '../../validators'
const directorRoutes = Router();

directorRoutes.get('/',exceptionHandler(DirectorController.getDirector))
directorRoutes.post('/',
    exceptionHandler(validator.check(createDirector)),
    exceptionHandler(DirectorController.Create))
directorRoutes.patch('/:id',exceptionHandler(DirectorController.Update))
directorRoutes.delete('/:id',exceptionHandler(DirectorController.Delete))

export default directorRoutes;