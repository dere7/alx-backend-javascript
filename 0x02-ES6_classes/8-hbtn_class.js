export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  toString() {
    return this.location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') return this.location;
    return this.size;
  }

  get size() {
    return this._size;
  }

  set size(size) {
    if (typeof size !== 'number') throw new Error('Size must be a number');
    this._size = size;
  }

  get location() {
    return this._location;
  }

  set location(location) {
    if (typeof location !== 'string') throw new Error('Location must be a string');
    this._location = location;
  }
}
