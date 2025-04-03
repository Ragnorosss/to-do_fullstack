import { connect, set } from 'mongoose';
import config from './config';

export const connectToMongoDB = async () => {
  try {
    set('strictQuery', false);
    const db = await connect(config.mongoDB);
    console.log('MongoDB connected to', db.connection.name);
  } catch (error) {
    console.log(`MongoDB ${error}`);
  }
};
