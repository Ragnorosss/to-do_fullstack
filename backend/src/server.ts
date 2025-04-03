import app from './app';
import config from './config/config';
import { connectToMongoDB } from './config/mongodeb';
const { port } = config;

connectToMongoDB();

app.listen(port, () => {
  console.log(`Server running on port ${config.port}`);
});
