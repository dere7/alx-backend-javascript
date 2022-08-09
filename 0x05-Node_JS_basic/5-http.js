const http = require('http');
const fs = require('fs/promises');

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

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students!\n');
    fs.readFile(process.argv[2], { encoding: 'utf8' }).then((data) => {
      const students = parseCSV(data);
      res.write(`Number of students: ${students.length}\n`);
      const fields = [];
      for (const field of students.map((student) => student.field)) {
        if (fields.findIndex((f) => f === field) === -1) {
          fields.push(field);
        }
      }
      for (const field of fields) {
        const result = students.filter((student) => student.field === field)
          .map((student) => student.firstname);
        res.write(`Number of students in ${field}: ${result.length}.\
 List: ${result.join(', ')}`);
      }
      res.end();
    }).catch(() => {
      throw Error('Cannot load the database');
    });
  }
}).listen(1245);

module.exports = app;
