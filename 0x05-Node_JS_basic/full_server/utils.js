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

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, db) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const students = parseCSV(db);
        const dept = {};
        students.forEach((student) => {
          if (student.field in dept) {
            dept[student.field].push(student.firstname);
          } else {
            dept[student.field] = [student.firstname];
          }
        });
        resolve(dept);
      }
    });
  });
}
