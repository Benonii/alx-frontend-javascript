export default function cleanSet(set, startString) {
  let cleanString = '';
  if (typeof startString !== 'string' || startString === '') {
    return cleanString;
  }

  set.forEach((element) => {
    if (element.startsWith(startString)) {
      cleanString += `${element.slice(startString.length)}-`;
    }
  });
  cleanString = cleanString.slice(0, -1);

  return cleanString;
}
