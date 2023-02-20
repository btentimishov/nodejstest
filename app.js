// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url === '/api/person') {
//     const data = {
//         name: 'John',
//         surname: 'Doe',
//         age: 30,
//         occupation: 'Software Developer',
//     };
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify(data));
//   } else {
//     res.statusCode = 404;
//     res.end();
//   }
// });

// server.listen(3000, () => {
//   console.log('Server running on port 3000');
// });

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const person = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  occupation: 'Android Developer'
};

app.get('/person', (req, res) => {
  res.json(person);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000...');
});
