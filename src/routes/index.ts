import { Router } from 'express';
import menuRoutes from './menu.routes';

const router = Router();

router.use('/menu', menuRoutes);

export default router;
