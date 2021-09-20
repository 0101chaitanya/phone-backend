const express = require('express');
let persons = require('./db');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json());


morgan.token("body", function getBody(req) {
    return JSON.stringify(req.body)
})
app.use(morgan('tiny'));
app.use(morgan(':body'));

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
    if (!request.body.name && !request.body.number) {
        return res.status(400).send("Body has to include a valid name and number");
    }
    const sum = persons.some(person => person.name === request.body.name);
    if (sum) {
        console.log("i exist")
        return response.json({
            error: "name must be unique",
        });
    } else {
        const newPerson = {
            id: assignId(),
            name: request.body.name,
            number: request.body.number
        }
        persons = persons.concat(newPerson);
        response.json(persons);
    }
})

const unKnownEndpoint = (req, res) => {
    res.status(404).send({ error: "unknown endpoint" });
}
app.use(unKnownEndpoint);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})