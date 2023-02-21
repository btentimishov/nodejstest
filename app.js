const express = require('express');
const cors = require('cors');
const app = express();


class Person {
  constructor(id, name, surname, age, occupation) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.occupation = occupation;
  }
}
const people = [
  new Person(1, 'John', 'Doe', 30, 'Software Developer'),
  new Person(2, 'Jane', 'Doe', 25, 'Data Analyst')
];

app.use(cors());
app.use(express.json());

app.get('/people', (req, res) => {
  res.json(people);
});

app.post('/people', (req, res) => {
  const person = new Person(parseInt(req.body.id), req.body.name, req.body.surname, parseInt(req.body.age), req.body.occupation);
  people.push(person);
  res.json(person);
});

app.get('/people/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const person = people.find(p => p.id === id);
  if (person) {
    res.json(person);
  } else {
    res.sendStatus(404);
  }
});

app.put('/people/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const personIndex = people.findIndex(p => p.id === id);
  if (personIndex !== -1) {
    const person = people[personIndex];
    person.name = req.body.name || person.name;
    person.surname = req.body.surname || person.surname;
    person.age = req.body.age || person.age;
    person.occupation = req.body.occupation || person.occupation;
    res.json(person);
  } else {
    res.sendStatus(404);
  }
});

app.delete('/people/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const personIndex = people.findIndex(p => p.id === id);
  if (personIndex !== -1) {
    const person = people[personIndex];
    people.splice(personIndex, 1);
    res.json(person);
  } else {
    res.sendStatus(404);
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000...');
});
