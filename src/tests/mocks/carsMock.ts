import { ICar } from '../../interfaces/ICar';

const carMock: ICar = {
  model: 'Corsa',
  year: 2002,
  color: 'branco',
  buyValue: 5000,
  doorsQty: 4,
  seatsQty: 4,
  status: true,
};

const carMockWithId: ICar & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: 'Corsa',
  year: 2002,
  color: 'branco',
  buyValue: 5000,
  doorsQty: 4,
  seatsQty: 4,
  status: true,
};

const carsMockWithId: ICar[] & { _id: string }[] = [
  {
    _id: '62cf1fc6498565d94eba52cd',
    model: 'Corsa',
    year: 2002,
    color: 'branco',
    buyValue: 5000,
    doorsQty: 4,
    seatsQty: 4,
    status: true,
  },
  {
    _id: '61cf1fc6498565d94eba52cd',
    model: 'Gol Bola',
    year: 2006,
    color: 'preto',
    buyValue: 7000,
    doorsQty: 4,
    seatsQty: 4,
    status: true,
  }
];

export { carMock, carMockWithId, carsMockWithId };