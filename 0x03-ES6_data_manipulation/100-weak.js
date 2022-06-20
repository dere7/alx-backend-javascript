export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  const queries = weakMap.get(endpoint) || 0;
  if (queries >= 5) throw new Error('Endpoint load is high');
  weakMap.set(endpoint, queries + 1);
}
