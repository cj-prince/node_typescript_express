import { Router } from 'express';
import * as UserController from '../controller/getAllUserControllers';

const router = Router();

router.get('/', UserController.getAllUserControllers);

export default router;
