import { Router} from 'express';
import { users } from '../controller/user.controlle';

const userRouter: Router = Router();

userRouter.get('/users', users);

export default userRouter;
