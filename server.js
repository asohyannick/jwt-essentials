import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './db/connect.js';
import mainRouter  from './routes/task.js';
import errorMiddlware from './error/error-handler.js';
import notFound from './error/not-found.js';
const app = express();
app.use(express.json());
app.use('/api/v1', mainRouter);
app.use(errorMiddlware);
app.use(notFound);
const PORT = process.env.PORT || PORT;
const starter = async() => {
 try {
  return await connectDB(process.env.MONGO_URL_CONNECTIONSTRING),
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
 } catch(error) {
  console.log({msg:error});
 }
}
starter();
