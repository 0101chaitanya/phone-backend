const express = require('express');
const app = express();

let persons = [{
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
];


app.get("/api/persons", (req, res) => {
    res.json(persons);
})
app.get("/info", (req, res) => {
    res.send(`<div>
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${new Date().toISOString()}</p>
    </div > `);
})
app.get("/api/persons/:id", (req, res) => {
    const id = req.params.id;
    console.log(`${id}`);
    const person = persons.find(person => person.id.toString() === id);
    res.json(person);
})
app.delete("/api/persons/:id", (req, res) => {
    const id = req.params.id;
    console.log(`${id}`);
    persons = persons.filter(person => person.id.toString() !== id);
    res.json(persons);
})

app.post("/api/persons", (req, res) => {
    const body = req.body;

    if (req.body.name && req.body.number) {

        const newPerson = {
            id: assignId(),
            name: body.name,
            number: body.number
        }

        persons = persons.concat(newPerson);
    }

})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})