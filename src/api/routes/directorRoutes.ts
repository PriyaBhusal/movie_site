import {Router} from 'express';
import { DirectorController } from '../controllers';
import { exceptionHandler,validator,Guard } from '../../middlewares';
import {createDirector} from '../../validators'
import { RoleEnum } from '../../enums';
const directorRoutes = Router();

directorRoutes.get('/',exceptionHandler(DirectorController.getDirector))

directorRoutes.post('/',
    exceptionHandler(Guard.grantAccess),
    exceptionHandler(validator.check(createDirector)),
    exceptionHandler(DirectorController.Create))

directorRoutes.patch('/:id',
    exceptionHandler(Guard.grantAccess),
    exceptionHandler(Guard.grantRole(RoleEnum.admin)),
    exceptionHandler(DirectorController.Update))

directorRoutes.delete('/:id',
    exceptionHandler(Guard.grantAccess),
    exceptionHandler(Guard.grantRole(RoleEnum.admin)),
    exceptionHandler(DirectorController.Delete))

export default directorRoutes;