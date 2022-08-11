const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const { Utils } = require('./utils');

describe('sendPaymentRequestToApi', function () {
  beforeEach(function () {
    sinon.spy(console, 'log')
  })

  afterEach(function () {
    sinon.restore()
  })

  it('Should call calculateNumber', function () {
    const totalAmount = 100;
    const totalShipping = 20;

    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10)
    sendPaymentRequestToApi(totalAmount, totalShipping)
    expect(calculateNumberStub.firstCall.args).to.deep.equal(['SUM', totalAmount, totalShipping])
    expect(console.log.firstCall.args[0]).to.equal('The total is: 10')
  })
});
