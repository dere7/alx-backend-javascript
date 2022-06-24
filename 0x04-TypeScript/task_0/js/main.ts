interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const stud1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  location: 'New York',
};

const stud2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 32,
  location: 'Texas',
};

const studentsList: Student[] = [stud1, stud2];

let table = '<table>';
for (const stud of studentsList) {
  table += `<tr><td>${stud.firstName}</td><td>${stud.location}</td></tr>`;
}
table += '</table>';

document.body.innerHTML += table;
