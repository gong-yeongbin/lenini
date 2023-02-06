import express, { Request, Response, Router } from 'express';

import client from './client';
import consumer from './consumer';
import product from './product';

const router: Router = express.Router();

router.use('/', (req: Request, res: Response) => {
  console.log('hello world!!!');
});

router.use('/client', client);
router.use('/consumer', consumer);
router.use('/product', product);

export default router;
