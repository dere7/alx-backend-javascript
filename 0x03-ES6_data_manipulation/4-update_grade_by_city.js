export default function updateStudentGradeByCity(students, city, newGrade) {
  return students.filter((student) => student.location === city).map((student) => {
    const grade = newGrade.find((g) => g.studentId === student.id);
    // eslint-disable-next-line no-param-reassign
    student.grade = grade ? grade.grade : 'N/A';
    return student;
  });
}
