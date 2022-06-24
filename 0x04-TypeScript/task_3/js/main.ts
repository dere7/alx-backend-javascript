// task 5
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (salary < 500) return new Teacher();
  return new Director();
}

// task 6
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher) {
  if (employee instanceof Director) return employee.workDirectorTasks();
  return employee.workTeacherTasks();
}
const str = executeWork(createEmployee(200));
console.log(str);
console.log(executeWork(createEmployee(1200)));

// task 7
type Subjects = 'Math' | 'History';
function teachClass(todayClass: Subjects) {
  if (todayClass === 'Math') return 'Teaching Math';
  return 'Teaching History';
}

console.log(teachClass('History'))
console.log(teachClass('Math'))