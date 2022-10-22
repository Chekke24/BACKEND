import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

import GetFibonacci from './routes/fibonacci';

app.use('/fibonacci', GetFibonacci);

export default app;