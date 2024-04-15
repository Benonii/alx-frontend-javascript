export const weakMap = new WeakMap();
export default function queryApi(endpoint) {
  let count = 0;
  count =+ 1;

  weakMap.set(JSON.stringify(endpoint), count);

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  };
}
