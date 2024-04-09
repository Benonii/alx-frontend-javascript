export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = '';

  for (const item of reportWithIterator) {
    employeeNames += `${item.value} | `;
  }

  employeeNames = employeeNames.slice(0, -2);

  return employeeNames;
}
