import express from 'express';
import { errorHandler } from './middleware/error-handler';
import userRouter from './routers/user.router';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(errorHandler);
app.use(cors({
    
}));
app.use('/api/', userRouter);
export default app;
