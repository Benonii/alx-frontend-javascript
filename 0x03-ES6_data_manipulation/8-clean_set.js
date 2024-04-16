export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '' || !set) {
    return '';
  }

  const cleanString = [...set]
    .filter((item) => item.startsWith(startString))
    .map((item) => item.slice(startString.length))
    .join('-');

  return cleanString;
}
