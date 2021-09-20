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

const assignId = () => Math.floor(Math.random() * 100000);

app.post("/api/persons", (request, response) => {
    console.log(req)

    const body = req.body;
    if (body.name && body.number) {

        const newPerson = {
            id: assignId(),
            name: body.name,
            number: body.number
        }

        persons = persons.concat(newPerson);
        res.json(persons);
    }

    res.send(400).send("Body has to include a valid name and number");
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})