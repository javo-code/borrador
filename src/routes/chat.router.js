import { Router } from 'express';
import ChatController from '../controllers/cart.controllers.js';
const controller = new ChatController();

const router = Router();

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.post('/', controller.create);

router.put('/:id', controller.update);

router.delete('/:id', controller.delete);

export default router;