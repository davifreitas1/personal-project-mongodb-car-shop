import { Router } from 'express';
import MotorcyclesController from '../controllers/MotorcyclesController';
import MotorcyclesValidation from '../middlewares/MotorcyclesValidation';
import MotorcyclesModel from '../models/MotorcyclesModel';
import MotorcyclesService from '../services/MotorcyclesService';

const motorcyclesRouter = Router();
const model = new MotorcyclesModel();
const service = new MotorcyclesService(model);
const controller = new MotorcyclesController(service);
const middleware = new MotorcyclesValidation();

motorcyclesRouter.post('/', middleware.validate, controller.create);
motorcyclesRouter.get('/', controller.read);
motorcyclesRouter.get('/:id', controller.readOne);
motorcyclesRouter.put('/:id', middleware.validate, controller.update);
motorcyclesRouter.delete('/:id', controller.delete);

export default motorcyclesRouter;