import Car from './10-car';

export default class EVCar extends Car {
  constructor(branc, motor, color, range) {
    super(branc, motor, color);
    this.range = range;
  }

  get range() {
    return this._range;
  }

  set range(range) {
    if (typeof range !== 'string') throw new TypeError('Range must be a string');
    this._range = range;
  }

  static [Symbol.hasInstance](lho) {
    return lho instanceof Car;
  }
}
