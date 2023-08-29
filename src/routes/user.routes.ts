import { Router } from 'express';
import * as UserController from '../controller/getAllUserControllers';
import * as UserMiddleware from '../middleware/user.middleware'

const router = Router();

router.get('/',
  UserMiddleware.verifyAuthToken,
  UserController.getAllUserControllers);

router.post('/', UserController.createUserController);

router.post('/login', UserController.logUserController);

router.get(
  '/:id',
  UserMiddleware.verifyAuthToken,
  UserController.getSingleUserController
);


export default router;
