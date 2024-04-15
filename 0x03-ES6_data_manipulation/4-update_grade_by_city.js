export default function updateStudentGradeByCity(students, city, newGrades) {
  const gradedStudents = students.filter((student) => student.location === city).map((student) => {
    for (const grade of newGrades) {
      if (student.id === grade.studentId) {
        student.grade = grade.grade ? grade.grade : 'N/A';
        break;
      }
      student.grade = 'N/A';
    }

    return student;
  });

  return gradedStudents;
}
