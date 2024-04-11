export default function createIteratorObject(report) {
  const iterator = {
    [Symbol.iterator]() {
      const departments = report.allEmployees;
      let index = 0;
      let currentDepartment = Object.keys(departments)[index];
      let employeeIndex = 0;

      return {
        next() {
          if (currentDepartment && employeeIndex < departments[currentDepartment].length) {
            const value = departments[currentDepartment][employeeIndex];
            employeeIndex += 1;

            if (employeeIndex === departments[currentDepartment].length) {
              currentDepartment = Object.keys(departments)[index += 1];
              employeeIndex = 0;
            }

            return { value, done: false };
          }
          return { done: true };
        },
      };
    },
  };

  return iterator;
}
