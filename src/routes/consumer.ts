import { Request, Response, Router } from 'express';

const router: Router = Router();

router.put('/consumer', (req: Request, res: Response) => {
  console.log('put');
});
router.get('/consumer', (req: Request, res: Response) => {
  console.log('get');
});

export default router;
