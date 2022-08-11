const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  beforeEach(function () {
    sinon.spy(console, 'log');
  });

  afterEach(function () {
    sinon.restore();
  });

  it('Should call calculateNumber', function () {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.firstCall.args).to.deep.equal(['SUM', 100, 20]);
    expect(console.log.firstCall.args[0]).to.equal('The total is: 10');
  });
});
