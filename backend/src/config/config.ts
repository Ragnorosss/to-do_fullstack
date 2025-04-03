import dotenv from 'dotenv';

dotenv.config();

const { PORT, NODE_ENV, DB_URL } = process.env;

interface IConfig {
  port: number;
  nodeEnv: string;
  mongoDB: string;
}

const config: IConfig = {
  port: +`${PORT}` || 3000,
  nodeEnv: NODE_ENV || 'development',
  mongoDB: DB_URL || '',
};

export default config;
