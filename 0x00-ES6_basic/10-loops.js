export default function appendToEachArrayValue(array, appendString) {
  const arrayAppendedOn = [];
  for (const value of array) {
    arrayAppendedOn.push(appendString + value);
  }

  return arrayAppendedOn;
}
