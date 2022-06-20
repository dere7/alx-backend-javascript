import getListStudents from './0-get_list_students';
import getStudentsByLocation from './2-get_students_by_loc';
import getListStudentIds from './1-get_list_student_ids';
import getStudentIdsSum from './3-get_ids_sum';
import updateStudentGradeByCity from './4-update_grade_by_city';

import createInt8TypedArray from './5-typed_arrays';
import setFromArray from './6-set';
import hasValuesFromArray from './7-has_array_values';
import cleanSet from './8-clean_set';
import groceriesList from './9-groceries_list';
import updateUniqueItems from './10-update_uniq_items';

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

console.log(createInt8TypedArray(10, 2, 89));

console.log(setFromArray([12, 32, 15, 78, 98, 15]));

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));

console.log(groceriesList());

const map = groceriesList();
console.log(map);

updateUniqueItems(map);
console.log(map);
