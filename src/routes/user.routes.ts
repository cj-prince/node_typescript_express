import { Router } from 'express';
import * as UserController from '../controller/getAllUserControllers';

const router = Router();

router.get('/', UserController.getAllUserControllers);
router.post('/', UserController.createUserController);
router.get('/:id', UserController.getSingleUserController);


export default router;
