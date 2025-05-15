import { Router, RequestHandler } from 'express';
import { MenuController } from '../controllers/MenuController';
import { MenuService } from '../services/MenuService';
import { MenuRepository } from '../repositories/MenuRepository';

const router = Router();

const menuRepository = new MenuRepository();
const menuService = new MenuService(menuRepository);
const menuController = new MenuController(menuService);

router.get('/', menuController.getAll as RequestHandler);
router.get('/:id', menuController.getById as RequestHandler);
router.post('/', menuController.create as RequestHandler);
router.put('/:id', menuController.update as RequestHandler);
router.delete('/:id', menuController.delete as RequestHandler);

export default router;
