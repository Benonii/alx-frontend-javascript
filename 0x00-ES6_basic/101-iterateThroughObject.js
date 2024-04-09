export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = '';

  for (const { value : employeeName } of reportWithIterator) {
    employeeNames += employeeName + " | ";
  }

  employeeNames = employeeNames.slice(0, -2);

  return employeeNames;
};
