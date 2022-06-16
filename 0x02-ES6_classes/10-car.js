export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  // eslint-disable-next-line class-methods-use-this
  cloneCar() {
    const obj = new Car('', '', '');
    obj._brand = undefined;
    obj._motor = undefined;
    obj._color = undefined;
    return obj;
  }

  get brand() {
    return this._brand;
  }

  set brand(brand) {
    if (typeof brand !== 'string') throw new Error('Brand must be a string');
    this._brand = brand;
  }

  get motor() {
    return this._motor;
  }

  set motor(motor) {
    if (typeof motor !== 'string') throw new Error('Motor must be a string');
    this._motor = motor;
  }

  get color() {
    return this._color;
  }

  set color(color) {
    if (typeof color !== 'string') throw new Error('Color must be a string');
    this._color = color;
  }
}
