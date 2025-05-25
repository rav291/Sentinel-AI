import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import router from './routes';

dotenv.config();

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '5000', 10);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', router);

// Root Route
app.get('/', (req: Request, res: Response): void => {
  res.send('Welcome to Express Backend');
});

app.listen(PORT, (): void => {
  console.log(`Server running on http://localhost:${PORT}`);
});
