export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const array = new DataView(buffer, 0);
  if (position >= length) throw new RangeError('Position outside range');
  array.setInt8(position, value);
  return array;
}
