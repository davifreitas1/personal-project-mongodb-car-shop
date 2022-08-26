import { IModel } from '../interfaces/IModel';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import { IService } from '../interfaces/IService';

class MotorcyclesService implements IService<IMotorcycle> {
  private _model: IModel<IMotorcycle>;

  constructor(model: IModel<IMotorcycle>) {
    this._model = model;
  }

  public async create(car: IMotorcycle) {
    return this._model.create(car);
  }

  public async read() {
    return this._model.read();
  }

  public async readOne(_id: string) {
    return this._model.readOne(_id);
  }

  public async update(_id: string, obj: IMotorcycle) {
    return this._model.update(_id, obj);
  }

  public async delete(_id: string) {
    return this._model.delete(_id);
  }
}

export default MotorcyclesService;