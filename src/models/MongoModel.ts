import { Model } from 'mongoose';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  public async create(object: T): Promise<T> {
    return this._model.create({ ...object });
  }

  public async read(): Promise<T[]> {
    return this._model.find();
  }

  public async readOne(_id: string): Promise<T | null> {
    return this._model.findById({ _id });
  }

  public async update(_id: string, object: T): Promise<T | null> {
    return this._model.findByIdAndUpdate({ _id }, object);
  }

  public async delete(_id: string): Promise<T | null> {
    return this._model.findByIdAndRemove({ _id });
  }
}

export default MongoModel;