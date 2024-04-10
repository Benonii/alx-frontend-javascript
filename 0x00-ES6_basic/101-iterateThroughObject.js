export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = '';
  let result = reportWithIterator.next();

  while (!result.done) {
    employeeNames += `${result.value}`;
    result = reportWithIterator.next();
  }

  employeeNames = employeeNames.slice(0, -2);

  return reportWithIterator;
}
