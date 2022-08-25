// template para criação dos testes de cobertura da camada de service

import * as sinon from 'sinon';
import chai from 'chai';
import CarsService from '../../../services/CarsService';
import CarsModel from '../../../models/CarsModel';
import { carMock, carMockWithId } from '../../mocks/carsMock';

const { expect } = chai;

describe('Testa camada Service', () => {
  const carsModel = new CarsModel();
  const carsService = new CarsService(carsModel);

  before(async () => {
    sinon
      .stub(carsModel, 'create')
      .resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  it('Cria carro com sucesso', async () => {
    const result = await carsService.create(carMock);
    expect(result).to.be.eql(carMockWithId);
  });
});