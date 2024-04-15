export default function updateStudentGradeByCity(students, city, newGrades) {
  const gradedStudents = students.filter((student) => student.location === city).map((student) => {
    let gradedStudent = {};
    for (const grade of newGrades) {
      if (student.id === grade.studentId) {
        gradedStudent = { ...student, grade: grade.grade ? grade.grade : 'N/A' };
        break;
      }
      gradedStudent = { ...student, grade: 'N/A' };
    }

    return gradedStudent;
  });

  return gradedStudents;
}
