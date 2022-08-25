import { Router } from 'express';
import CarsController from '../controllers/CarsController';
import CarsValidation from '../middlewares/CarsValidation';
import CarsModel from '../models/CarsModel';
import CarsService from '../services/CarsService';

const carsRouter = Router();
const model = new CarsModel();
const service = new CarsService(model);
const controller = new CarsController(service);
const middleware = new CarsValidation();

carsRouter.post('/', middleware.validate, controller.create);
carsRouter.get('/', controller.read);
carsRouter.get('/:id', controller.readOne);

export default carsRouter;