export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  const studentIds = students.map((student) => student.id);

  return studentIds;
}
