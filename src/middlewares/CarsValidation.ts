import { NextFunction, Request, Response } from 'express';
import { zodCar } from '../interfaces/ICar';

class CarsValidation {
  private _message: object;

  constructor() {
    this._message = { message: 'Invalid Data' };
  }

  public validate = (req: Request, res: Response, next: NextFunction) => {
    const car = req.body;
    if (!car) return res.status(400).json(this._message);

    const { success } = zodCar.safeParse(car);

    if (!success) return res.status(400).json(this._message);

    next();
  };
}

export default CarsValidation;