const fs = require('fs');

function countStudents(path) {
  const db = fs.readFileSync(path, { encoding: 'utf8' });
  if (!db) {
    throw Error('Cannot load the database');
  } else {
    const rows = db.split('\n');
    const header = rows[0].split(',');
    const lines = rows.slice(1, -1);
    const students = [];
    for (const line of lines) {
      const values = line.split(',');
      const student = {};
      for (const i in header) {
        if (Object.hasOwnProperty.call(header, i)) {
          student[header[i]] = values[i];
        }
      }
      students.push(student);
    }

    console.log(`Number of students: ${students.length}`);
    const fields = [];
    for (const field of students.map((student) => student.field)) {
      if (fields.findIndex((f) => f === field) === -1) { fields.push(field); }
    }
    for (const field of fields) {
      const result = students.filter((student) => student.field === field)
        .map((student) => student.firstname);
      console.log(`Number of students in ${field}: ${result.length}. List: ${result.join(', ')}`);
    }
  }
}

module.exports = countStudents;
