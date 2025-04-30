import mongoose from 'mongoose';
import { app } from './src/app.js';
import { MONGO_DB, PORT } from './src/constants.js';
import { ApiError } from './src/utils/ApiError.js';

const maxTries = 3;
let delay = 1000;
export const dbConnect = async (attempt = 1) => {
  try {
    await mongoose.connect(MONGO_DB);
    console.log('Database connected');
  } catch (error) {
    if (attempt < maxTries) {
      delay = delay * 2 ** (attempt - 1);
      setTimeout(() => {
        dbConnect(attempt + 1);
      }, delay);
    } else {
      throw ApiError.serverError('Database connection failed');
    }
  }
};

app.listen(PORT, () => {
  dbConnect();
  console.log(`Server is running on port ${PORT}`);
});
