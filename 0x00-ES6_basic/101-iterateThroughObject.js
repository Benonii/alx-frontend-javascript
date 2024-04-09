export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = "";
  let totalCount = 0;
  let idx = 0;

  for (const item in reportWithIterator) {
    totalCount += 1;
  };

  for (const employeeName of reportWithIterator) {
    if (idx !== totalCount) {
      employeeNames = employeeNames + employeeName + " | ";
      idx += 1;
    } else {
      employeeNames = employeeNames + employeeName;
    };
  };

  return employeeNames;
}
