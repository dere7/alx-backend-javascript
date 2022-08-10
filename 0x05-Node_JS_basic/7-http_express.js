const express = require('express');
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
        const key = header[i];
        student[key] = values[i];
      }
    }
    processed.push(student);
  }
  return processed;
}

const app = express();

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  const response = ['This is the list of our students'];
  fs.readFile(process.argv[2], { encoding: 'utf8' }, (err, db) => {
    if (err) {
      response.push('Cannot load the database');
      res.status(500).end(response.join('\n'));
    } else {
      const students = parseCSV(db);
      response.push(`Number of students: ${students.length}`);
      const fields = [];
      for (const field of students.map((student) => student.field)) {
        if (fields.findIndex((f) => f === field) === -1) {
          fields.push(field);
        }
      }
      fields.forEach((field) => {
        const result = students.filter((student) => student.field === field)
          .map((student) => student.firstname);
        response.push(`Number of students in ${field}: ${result.length}. List: ${result.join(', ')}`);
      });
      res.end(response.join('\n'));
    }
  });
});

app.listen(1245);

module.exports = app;
