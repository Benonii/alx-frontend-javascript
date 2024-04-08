export default function createReportObject(employeesList) {
  const allEmployees = {};
  Object.entries(employeesList).forEach(([key, value]) => {
    allEmployees[`${key}`] = value;
  });

  return {
    allEmployees,
    getNumberOfDepartments: (employeesList) => Object.keys(employeesList).length,
  };
}
