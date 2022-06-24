interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}
// task
function printTeacher(firstName: string, lastName: string): string {
  return firstName[0] + '. ' + lastName;
}

interface printTeacherFunction {
  printTeacher(firstName: string, lastName: string): string;
}

console.log(printTeacher('John', 'Doe'));

// task 4
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): void;
  displayName(): void;
}
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}
