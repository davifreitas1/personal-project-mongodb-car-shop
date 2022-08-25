// template para criação dos testes de cobertura da camada de controller

import * as sinon from 'sinon';
import chai from 'chai';
import CarsModel from '../../../models/CarsModel';
import CarsService from '../../../services/CarsService';
import CarsController from '../../../controllers/CarsController';
import { Request, Response } from 'express';
import { carMock, carMockWithId, carsMockWithId } from '../../mocks/carsMock';
const { expect } = chai;

describe('Testa camada Controller', () => {
  const carsModel = new CarsModel;
  const carsService = new CarsService(carsModel);
  const carsController = new CarsController(carsService);
  const req = {} as Request;
  const res = {} as Response;

  before(async () => {
    sinon.stub(carsService, 'create').resolves(carMockWithId);
    sinon.stub(carsService, 'read').resolves(carsMockWithId);
    sinon.stub(carsService, 'readOne').resolves(carMockWithId);
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(()=>{
    sinon.restore();
  })

  it('Retorna status e json corretos ao criar um carro', async () => {
    req.body = carMock;
    await carsController.create(req, res);
    expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
  });

  it('Retorna status e json corretos ao listar todos os carros', async () => {
    await carsController.read(req, res);
    expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
  });

  it('Retorna status e json corretos ao listar um carro', async () => {
    req.params = { id: '62cf1fc6498565d94eba52cd' };
    await carsController.readOne(req, res);
    expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;

    req.params.id = '';
    await carsController.readOne(req, res);
    expect((res.status as sinon.SinonStub).calledWith(400)).to.be.true;
  });
});