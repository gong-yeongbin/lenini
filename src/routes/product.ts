import { Request, Response, Router } from 'express';

const router: Router = Router();

router.put('/product', (req: Request, res: Response) => {
  console.log('put');
});
router.get('/product', (req: Request, res: Response) => {
  console.log('get');
});

export default router;
