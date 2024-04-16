export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);

    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}

// export de{ queryAPI, weakMap };
