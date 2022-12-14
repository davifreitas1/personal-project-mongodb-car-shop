import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';

class CarsService implements IService<ICar> {
  private _model: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._model = model;
  }

  public async create(car: ICar) {
    return this._model.create(car);
  }

  public async read() {
    return this._model.read();
  }

  public async readOne(_id: string) {
    return this._model.readOne(_id);
  }

  public async update(_id: string, obj: ICar) {
    return this._model.update(_id, obj);
  }

  public async delete(_id: string) {
    return this._model.delete(_id);
  }
}

export default CarsService;