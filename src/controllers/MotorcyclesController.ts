import { Request, Response } from 'express';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import { IService } from '../interfaces/IService';

class MotorcyclesController {
  private _service: IService<IMotorcycle>;
  private _messageBadRequest: string;
  private _messageNotFound: string;

  constructor(service: IService<IMotorcycle>) {
    this._service = service;
    this._messageBadRequest = 'Id must have 24 hexadecimal characters';
    this._messageNotFound = 'Object not found';
  }

  public create = async (req: Request, res: Response) => {
    const motorcycle = req.body;
    const serviceResponse = await this._service.create(motorcycle);
    return res.status(201).json(serviceResponse);
  };

  public read = async (_req: Request, res: Response) => {
    const serviceResponse = await this._service.read();
    return res.status(200).json(serviceResponse);
  };

  public readOne = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (id.length < 24) {
      return res.status(400).json({
        error: this._messageBadRequest,
      });
    }

    const serviceResponse = await this._service.readOne(id);

    if (!serviceResponse) {
      return res.status(404).json({ error: this._messageNotFound });
    }

    return res.status(200).json(serviceResponse);
  };

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const motorcycle = req.body;

    if (id.length < 24) {
      return res.status(400).json({
        error: this._messageBadRequest,
      });
    }

    const serviceResponse = await this._service.update(id, motorcycle);

    if (!serviceResponse) {
      return res.status(404).json({ error: this._messageNotFound });
    }

    return res.status(200).json(serviceResponse);
  };

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (id.length < 24) {
      return res.status(400).json({
        error: this._messageBadRequest,
      });
    }

    const serviceResponse = await this._service.delete(id);
    
    if (!serviceResponse) {
      return res.status(404).json({ error: this._messageNotFound });
    }

    return res.status(204).json(serviceResponse);
  };
}

export default MotorcyclesController;