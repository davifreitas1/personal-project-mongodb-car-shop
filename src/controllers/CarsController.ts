import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';

class CarsController {
  private _service: IService<ICar>;

  constructor(service: IService<ICar>) {
    this._service = service;
  }

  public create = async (req: Request, res: Response) => {
    const car = req.body;
    const serviceResponse = await this._service.create(car);
    return res.status(201).json(serviceResponse);
  };
}

export default CarsController;
