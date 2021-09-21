const express = require('express');
let persons = require('./db');
const morgan = require('morgan');
const path = require('path');
const app = express();
const cors = require('cors');
app.use(cors());
const mongoose = require('mongoose');
require('dotenv').config();
const Person = require('./models/person');
app.use(express.json());


morgan.token("body", function getBody(req) {
    return JSON.stringify(req.body)
})
app.use(morgan('tiny'));
app.use(morgan(':body'));
//app.use(express.static(path.join(__dirname, 'build')));
app.get("/api/persons", (req, res) => {
    Person.find({}).then((persons) => {
        res.send(persons)
    })
})
app.get("/info", (req, res) => {

    Person.count({}).then((count) => {

        res.send(`<div>
    <p>Phonebook has info for ${count} people</p>
    <p>${new Date().toISOString()}</p>
    </div > `);
    })

})
app.get("/api/persons/:id", (req, res) => {
    const id = req.params.id;
    Person.findById(id).then((person) => {
        res.send(person);
    })

})
app.delete("/api/persons/:id", (req, res) => {
    const id = req.params.id;
    Person.findByIdAndDelete(id).then((data) => {
        res.status(204).end()
    });

})

const assignId = () => Math.floor(Math.random() * 100000);

app.post("/api/persons", (request, response) => {
    if (!request.body.name && !request.body.number) {
        return res.status(400).send("Body has to include a valid name and number");
    }
    const newPerson = new Person({
        name: request.body.name,
        number: request.body.number
    });

    newPerson.save().then((person) => {

        response.json(person);
    })

})

const unKnownEndpoint = (req, res) => {
    res.status(404).send({ error: "unknown endpoint" });
}
app.use(unKnownEndpoint);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})