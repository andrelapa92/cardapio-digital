import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import { errorHandler } from './errors/errorHandler';
import path from 'path';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api', routes);
app.use('/images', express.static(path.join(__dirname, '..', 'public', 'images')));

app.use(errorHandler);

export default app;
