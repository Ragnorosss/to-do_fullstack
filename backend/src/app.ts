import express from 'express';
import { errorHandler } from './middleware/error-handler';
import { connectToMongoDB } from './config/mongodeb';
import userRouter from './routers/user.router';

const app = express();
app.use(express.json());
app.use(errorHandler);
app.use('/api/', userRouter);
export default app;
