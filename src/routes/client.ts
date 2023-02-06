import { Request, Response, Router } from 'express';

const router: Router = Router();

router.put('/client', (req: Request, res: Response) => {
  console.log('put');
});
router.get('/client', (req: Request, res: Response) => {
  console.log('get');
});

export default router;
