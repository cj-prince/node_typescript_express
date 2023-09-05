import { Router } from 'express';
import * as UserController from '../controller/getAllUserControllers';
import * as UserMiddleware from '../middleware/user.middleware';
import * as UserSchema from '../schema/user.schema';
import validateData from '../middleware/common/middleware.model';

const router = Router();

router.get(
  '/',
  UserMiddleware.verifyAuthToken,
  UserController.getAllUserControllers
);

router.post(
  '/',
  validateData(UserSchema.createUserSchema, 'body'),
  UserController.createUserController
);

router.post(
  '/login',
  validateData(UserSchema.emailLoginSchema, 'body'),
  UserController.logUserController
);

router.get(
  '/:id',
  UserMiddleware.verifyAuthToken,
  UserController.getSingleUserController
);

export default router;
