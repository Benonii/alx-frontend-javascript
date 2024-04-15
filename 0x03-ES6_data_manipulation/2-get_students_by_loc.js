export default function getStudentByLocation(students, city) {
  const studentsByCity = students.filter((student) => student.location === city);

  return studentsByCity;
}
