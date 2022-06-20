import getListStudents from './0-get_list_students';
import getStudentsByLocation from './2-get_students_by_loc';
import getListStudentIds from './1-get_list_student_ids';
import getStudentIdsSum from './3-get_ids_sum';
import updateStudentGradeByCity from './4-update_grade_by_city';

console.log(getListStudents());

console.log(getListStudentIds('hello'));
console.log(getListStudentIds(getListStudents()));

const students = getListStudents();
console.log(getStudentsByLocation(students, 'San Francisco'));

const value = getStudentIdsSum(students);
console.log(value);

console.log(
  updateStudentGradeByCity(getListStudents(), 'San Francisco', [
    { studentId: 5, grade: 97 },
    { studentId: 1, grade: 86 },
  ]),
);

console.log(
  updateStudentGradeByCity(getListStudents(), 'San Francisco', [
    { studentId: 5, grade: 97 },
  ]),
);

import createInt8TypedArray from "./5-typed_arrays.js";

console.log(createInt8TypedArray(10, 2, 89));
