export default function getStudentIdSum(students) {
  const studentIdSum = students.reduce((sum, student) => sum + student.id, 0);

  return studentIdSum;
}
