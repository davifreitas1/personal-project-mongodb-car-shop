import express from 'express';
import carsRouter from './routes/CarsRoute';
import motorcyclesRouter from './routes/MotorcyclesRoute';

const app = express();
app.use(express.json());
app.use('/cars', carsRouter);
app.use('/motorcycles', motorcyclesRouter);

export default app;
