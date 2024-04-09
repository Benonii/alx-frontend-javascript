export default function createIteratorObject(report) {
  const iterable = {
    [Symbol.iterator]() {
      let currentDepartmentKey = Object.keys(report)[0];
      let employeeIndex = 0;

      return {
        next() {
          const totalEmployeesInDepartment = report[currentDepartmentKey].length;
          if (currentDepartmentKey && employeeIndex < totalEmployeesInDepartment) {
            const value = report[currentDepartmentKey][employeeIndex];
            employeeIndex += 1;

            if (employeeIndex === totalEmployeesInDepartment) {
              currentDepartmentKey = Object.keys(report).find((key) => key > currentDepartmentKey);
              employeeIndex = 0;
            }

            return { value, done: false };
          }
          return { done: true };
        },
      };
    },
  };

  return iterable;
}
