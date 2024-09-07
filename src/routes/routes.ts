import { HttpStatusCode } from '@/common/constants';
import { RequestCustom } from '@/common/types/express';
import { NextFunction, Response, Router } from 'express';
const router = Router();

router.get('/hello', (_: RequestCustom, res: Response, __: NextFunction) => {
  return res.status(HttpStatusCode.OK).json('hello');
});
export default router;
