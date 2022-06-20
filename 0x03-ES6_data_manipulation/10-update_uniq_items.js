export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new TypeError('Cannot process');
  map.forEach((value, key, m) => {
    // eslint-disable-next-line no-param-reassign
    if (value === 1) m.set(key, 100);
  });
}
