import {Router} from 'express';
import { exceptionHandler,validator } from '../../middlewares';
import {AuthController} from '../controllers';
import {signupValidator} from '../../validators';

const authRoutes = Router();

authRoutes.post(
    '/signup',
    exceptionHandler(validator.check(signupValidator)),
    exceptionHandler(AuthController.signup)
)

export default authRoutes;