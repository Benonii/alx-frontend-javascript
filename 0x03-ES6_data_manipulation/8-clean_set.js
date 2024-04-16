export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '' || !(set instanceof Set)) {
    return '';
  }

  const cleanString = [...set]
    .filter((item) => typeof item === 'string' && item.startsWith(startString))
    .map((item) => item.slice(startString.length))
    .join('-');

  return cleanString;
}
