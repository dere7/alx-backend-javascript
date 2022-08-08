import readDatabase from '../utils';

export default class StudentController {
  static getAllStudents(request, response) {
    try {
      readDatabase(process.argv[2]).then((fields) => {
        const responseData = ['This is the list of our students'];
        for (const field in fields) {
          if (Object.hasOwnProperty.call(fields, field)) {
            responseData.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
          }
        }
        response.end(responseData.join('\n'));
      });
    } catch (e) {
      response.status(500).send('Cannot load the database');
    }
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).end('Major parameter must be CS or SWE');
    } else {
      readDatabase(process.argv[2]).then((fields) => {
        response.end(`List: ${fields[major].join(', ')}`);
      }).catch(() => {
        response.status(500).end('Cannot load the database');
      });
    }
  }
}
