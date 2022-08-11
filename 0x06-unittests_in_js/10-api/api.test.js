const { expect } = require('chai');
const request = require('request');

describe('index page', function () {
  it('correct response', function (done) {
    request.get('http://localhost:7865', function (err, res, body) {
      if (err) {
        done(err);
      }
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('cart page', function () {
  it('correct response', function (done) {
    request.get('http://localhost:7865/cart/34', function (err, res, body) {
      if (err) {
        done(err);
      }
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 34');
      done();
    });
  });

  it('correct response for invalid id', function (done) {
    request.get('http://localhost:7865/cart/abc', function (err, res) {
      if (err) {
        done(err);
      }
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('available_payment page', function () {
  it('correct response', function (done) {
    request.get('http://localhost:7865/available_payments', { json: true }, function (err, res, body) {
      if (err) {
        done(err);
      }
      expect(res.statusCode).to.equal(200);
      expect(body).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('login page', function () {
  it('correct response', function (done) {
    request({
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: { userName: 'Betty' }
    }, function (err, res, body) {
      if (err) {
        done(err);
      }
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
