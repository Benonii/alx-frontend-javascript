export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  let cleanString = '';
  set.forEach((element) => {
    if (element.startsWith(startString)) {
      cleanString += `${element.slice([startString.length])}-`;
    }
  });
  cleanString = cleanString.slice(0, -1);

  return cleanString;
}
