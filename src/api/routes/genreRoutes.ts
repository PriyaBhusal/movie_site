import {Router} from 'express';
import { GenreController } from '../controllers';
import { exceptionHandler,Guard,validator } from '../../middlewares';
import{createGenre} from '../../validators'
import { RoleEnum } from '../../enums';
const genreRoutes = Router();

//@ts-ignore
genreRoutes.get('/',exceptionHandler(GenreController.getGenre));
genreRoutes.post('/',
    exceptionHandler(Guard.grantAccess),
    exceptionHandler(validator.check(createGenre)),
    exceptionHandler(GenreController.Create));
genreRoutes.patch('/:id',
    exceptionHandler(Guard.grantAccess),
    exceptionHandler(Guard.grantRole(RoleEnum.admin)),
    exceptionHandler(GenreController.Update));
genreRoutes.delete('/:id',
    exceptionHandler(Guard.grantAccess),
    exceptionHandler(Guard.grantRole(RoleEnum.admin)),
    exceptionHandler(GenreController.Delete))

export default genreRoutes;