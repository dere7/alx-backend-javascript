const fs = require('fs');

function parseCSV(data) {
  let rows = data.split('\n');
  const header = rows[0].split(',');
  rows = rows.slice(1, -1);
  const processed = [];
  for (const line of rows) {
    const values = line.split(',');
    const student = {};
    for (const i in header) {
      if (Object.hasOwnProperty.call(header, i)) {
        student[header[i]] = values[i];
      }
    }
    processed.push(student);
  }
  return processed;
}

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, db) => {
      if (err) {
        reject(Error('Cannot load the database'));
      }
      const students = parseCSV(db);
      console.log(`Number of students: ${students.length}`);
      const fields = [];
      for (const field of students.map((student) => student.field)) {
        if (fields.findIndex((f) => f === field) === -1) {
          fields.push(field);
        }
      }
      for (const field of fields) {
        const result = students.filter((student) => student.field === field)
          .map((student) => student.firstname);
        console.log(`Number of students in ${field}: ${result.length}. List: ${result.join(', ')}`);
      }
      resolve();
    });
  });
}

module.exports = countStudents;
