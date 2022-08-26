import { NextFunction, Request, Response } from 'express';
import { zodMotorcycle } from '../interfaces/IMotorcycle';

class MotorcyclesValidation {
  private _message: object;

  constructor() {
    this._message = { message: 'Invalid Data' };
  }

  public validate = (req: Request, res: Response, next: NextFunction) => {
    const motorcycle = req.body;
    if (!motorcycle) return res.status(400).json(this._message);

    const { success } = zodMotorcycle.safeParse(motorcycle);

    if (!success) return res.status(400).json(this._message);

    next();
  };
}

export default MotorcyclesValidation;