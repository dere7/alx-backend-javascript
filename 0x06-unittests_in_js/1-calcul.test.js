const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('#SUM', function () {
    const tests = [
      { args: [1, 3], expected: 4 },
      { args: [1, 3.7], expected: 5 },
      { args: [1.2, 3.7], expected: 5 },
      { args: [1.5, 3.7], expected: 6 }
    ];
    tests.forEach(({ args, expected }) => {
      it(`rounded ${args[0]} + ${args[1]} = ${expected}`, function () {
        const res = calculateNumber('SUM', ...args);
        assert.equal(res, expected);
      });
    });
  });

  describe('#SUBTRACT', function () {
    const tests = [
      { args: [1, 3], expected: -2 },
      { args: [1, 3.7], expected: -3 },
      { args: [1.2, 3.7], expected: -3 },
      { args: [1.5, 3.7], expected: -2 }
    ];
    tests.forEach(({ args, expected }) => {
      it(`rounded ${args[0]} - ${args[1]} = ${expected}`, function () {
        const res = calculateNumber('SUBTRACT', ...args);
        assert.equal(res, expected);
      });
    });
  });

  describe('#DIVIDE', function () {
    const tests = [
      { args: [1, 3.7], expected: 0.25 },
      { args: [1.4, 4.5], expected: 0.2 },
      { args: [1.4, 0], expected: 'Error' },
      { args: [1.2, 3.7], expected: 0.25 },
      { args: [1.5, 3.7], expected: 0.5 }
    ];
    tests.forEach(({ args, expected }) => {
      it(`rounded ${args[0]} / ${args[1]} = ${expected}`, function () {
        const res = calculateNumber('DIVIDE', ...args);
        assert.equal(res, expected);
      });
    });
  });
});
