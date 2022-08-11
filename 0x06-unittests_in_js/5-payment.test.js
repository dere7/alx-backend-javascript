const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToAPI = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  beforeEach(function () {
    sinon.spy(console, 'log');
  });

  afterEach(function () {
    sinon.restore();
  });

  it('console is logging `The total is: 120`', function () {
    sendPaymentRequestToAPI(100, 20);
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.firstCall.args[0]).to.equal('The total is: 120');
  });
  it('console is logging `The total is: 20`', function () {
    sendPaymentRequestToAPI(10, 10);
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.firstCall.args[0]).to.equal('The total is: 20');
  });
});
