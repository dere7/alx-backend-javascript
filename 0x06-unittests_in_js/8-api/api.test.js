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
