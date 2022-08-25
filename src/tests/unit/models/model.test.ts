// template para criação dos testes de cobertura da camada de model

import * as sinon from 'sinon';
import chai from 'chai';
import CarsModel from '../../../models/CarsModel';
import { Model } from 'mongoose';
import { carMock, carMockWithId, carsMockWithId } from '../../mocks/carsMock';
const { expect } = chai;

describe('Testa camada Cars Model', () => {
  const carsModel = new CarsModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'find').resolves(carsMockWithId);
    sinon.stub(Model, 'findById').resolves(carMockWithId);
    sinon.stub(Model, 'findByIdAndUpdate').resolves();
    sinon.stub(Model, 'findByIdAndRemove').resolves();
  });

  after(()=>{
    sinon.restore();
  })

  it('Cria carro com sucesso', async () => {
    const result = await carsModel.create(carMock);
    expect(result).to.be.eql(carMockWithId);
  });

  it('Retorna lista de carros com sucesso', async () => {
    const result = await carsModel.read();
    expect(result).to.be.eql(carsMockWithId);
  });

  it('Retorna carro corretamente', async () => {
    const result = await carsModel.readOne('62cf1fc6498565d94eba52cd');
    expect(result).to.be.eql(carMockWithId);
  });

  it('Atualiza carro corretamente', async () => {
    const result = await carsModel.update('62cf1fc6498565d94eba52cd', {
      model: 'Corsa',
      year: 2002,
      color: 'branco',
      buyValue: 5000,
      doorsQty: 4,
      seatsQty: 4,
      status: true,
    });
    expect(result).to.be.eql(undefined);
  });

  it('Deleta carro corretamente', async () => {
    const result = await carsModel.delete('62cf1fc6498565d94eba52cd');
    expect(result).to.be.eql(undefined);
  });
});