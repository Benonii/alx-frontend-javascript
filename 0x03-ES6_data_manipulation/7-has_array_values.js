export default function hasValuesFromArray(set, array) {
  let hasAllValues = true;

  for (const element of array) {
    if (!set.has(element)) {
      hasAllValues = false;
    }
  }

  return hasAllValues;
}
