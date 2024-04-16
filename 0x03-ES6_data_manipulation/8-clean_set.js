export default function cleanSet(set, startString) {
  let cleanString = '';
  set.forEach((element) => {
    if (startString !== '' && typeof startString === 'string' && element.startsWith(startString)) {
      cleanString += `${element.slice(startString.length)}-`;
    }
  });
  cleanString = cleanString.slice(0, -1);

  return cleanString;
}
