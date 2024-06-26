export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = '';
  const iterator = reportWithIterator[Symbol.iterator]();
  let result = iterator.next();

  while (!result.done) {
    employeeNames += `${result.value} | `;
    result = iterator.next();
  }

  employeeNames = employeeNames.slice(0, -3);

  return employeeNames;
}
