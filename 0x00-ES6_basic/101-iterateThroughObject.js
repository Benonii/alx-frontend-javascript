export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = '';

  for (const employeeName of reportWithIterator) {
    employeeNames += `${employeeName} | `;
  }

  employeeNames = employeeNames.slice(0, -2);

  return employeeNames;
}
