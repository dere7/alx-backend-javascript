const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const { Utils } = require('./utils');

describe('sendPaymentRequestToApi', function () {
  beforeEach(function () {
    sinon.spy(Utils, 'calculateNumber')
  })

  afterEach(function () {
    sinon.restore()
  })

  it('Should call calculateNumber', function () {
    const totalAmount = 100;
    const totalShipping = 20;
    sendPaymentRequestToApi(totalAmount, totalShipping)
    expect(Utils.calculateNumber.firstCall.args).to.deep.equal(['SUM', totalAmount, totalShipping])
  })
});
