import e from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { WHITELIST_DOMAINS } from './constants.js';
import errorHandler from './middlewares/errorHandler.middleware.js';


const app = e();

app.use(e.json());
app.use(e.urlencoded({ extended: true }));
app.use(e.static('public'));
app.use(
  cors({
    origin: WHITELIST_DOMAINS.split(','),
    credentials: true,
  })
);
app.use(cookieParser());


//routes
import healthCheckRoute from './routes/healthCheck.route.js';
import userRoute from './routes/user.route.js';

app.use('/api/v1', userRoute);
app.use('/api/v1', healthCheckRoute);

app.use(errorHandler);
export { app };
