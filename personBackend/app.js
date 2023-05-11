const express = require('express');
const app = express();
const PORT = 5000;


// person_obj sample data
let person_obj = [
  { id: 1, name: 'Fatma', age: 20, gender: 'female', email: 'fatma@example.com' },
  { id: 2, name: 'Rodayna', age: 20, gender: 'female', email: 'rodayna@example.com' },
  { id: 3, name: 'Shrouk', age: 21, gender: 'female', email: 'shrouk@example.com' }
];

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
  next();
});

// Read
app.get('/person_obj', (req, res) => {
  res.json(person_obj);
});

// CRUD
// Create
app.post('/person_obj', (req, res) => {
  const person = req.body;
  person.id = person_obj.length + 1;
  person_obj.push(person);
  res.json(person);
});

//  Read
app.get('/person_obj/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const person = person_obj.find(person => person.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).send();
  }
});

// Update
app.put('/person_obj/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const personIndex = person_obj.findIndex(person => person.id === id);
  if (personIndex !== -1) {
    const updatedPerson = { ...person_obj[personIndex], ...req.body };
    person_obj[personIndex] = updatedPerson;
    res.json(updatedPerson);
  } else {
    res.status(404).send();
  }
});

// Delete
app.delete('/person_obj/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const personIndex = person_obj.findIndex(person => person.id === id);
  if (personIndex !== -1) {
    person_obj.splice(personIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, () => console.log(`API listening on port ${PORT}`));