export default function createReportObject(employeesList) {
	let allEmployees = {};
	Object.entries(employeesList).forEach(([key, value]) => {
	  allEmployees[`${key}`] = value;
	});
		
  return {
    allEmployees, 
    getNumberOfDepartments: (employeesList) => {
	    return Object.keys(employeesList).length;
    }
  }
}
