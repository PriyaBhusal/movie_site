import {Router} from 'express';
import { MovieController } from '../controllers/movieController';
import { exceptionHandler , Multer, validator} from '../../middlewares';
import { Guard} from '../../middlewares';
import { RoleEnum } from '../../enums';
import { createMovie } from '../../validators/movieValidator';
const movieRoutes = Router();

movieRoutes.get('/',exceptionHandler(MovieController.getMovie))
movieRoutes.post('/',
    exceptionHandler(Guard.grantRole(RoleEnum.admin)),
    exceptionHandler(new Multer().uploadSingle('file')),
    exceptionHandler(validator.check(createMovie)),
    exceptionHandler(MovieController.Create))
movieRoutes.patch('/:id',
    exceptionHandler(Guard.grantRole(RoleEnum.admin)),
    exceptionHandler(MovieController.Update))
movieRoutes.delete('/:id',
    exceptionHandler(Guard.grantRole(RoleEnum.admin)),
    exceptionHandler(MovieController.Delete))

export default movieRoutes;