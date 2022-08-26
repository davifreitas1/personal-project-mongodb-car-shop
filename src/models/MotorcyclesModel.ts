import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle'; 
import MongoModel from './MongoModel';

const motoMongooseSchema = new Schema<IMotorcycle>(
  {
    status: Boolean,
    model: String,
    year: Number,
    color: String,
    buyValue: Number,
    category: String,
    engineCapacity: Number,
  },
  {
    versionKey: false,
  },
);

class MotorcyclesModel extends MongoModel<IMotorcycle> {
  constructor(model = mongooseCreateModel('Motorcycles', motoMongooseSchema)) {
    super(model);
  }
}

export default MotorcyclesModel;
