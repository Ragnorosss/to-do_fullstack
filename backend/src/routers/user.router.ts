import { Router } from 'express';
import { users, login, registration } from '../controller/user.controlle';

const userRouter: Router = Router();

userRouter.get('/users', users);
userRouter.post('/login', login);
userRouter.post('/users', registration);

export default userRouter;
