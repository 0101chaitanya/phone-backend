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
const { nextTick } = require('process');
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
    }).catch((err) => next(err));
})
app.get("/info", (req, res) => {

    Person.count({}).then((count) => {

        res.send(`<div>
    <p>Phonebook has info for ${count} people</p>
    <p>${new Date().toISOString()}</p>
    </div > `);
    })

})
app.get("/api/persons/:id", (req, res, next) => {
    const id = req.params.id;
    Person.findById(id).then((person) => {
        if (person) {

            res.send(person);
        } else {
            res.status(404).end();
        }

    }).catch(e => next(err));

})

app.put("/api/persons/:id", (req, res, next) => {

    const body = req.body;

    const person = {
        name: body.name,
        number: body.number,
    }

    Person.findByIdAndUpdate(req.params.id, person, { new: true }).then((updatedPerson) => {
        res.send(updatedPerson);


    }).catch((err) => next(err));
})


app.delete("/api/persons/:id", (req, res) => {
    const id = req.params.id;
    Person.findByIdAndRemove(id).then((data) => {
        res.status(204).end()
    }).catch(err => nextTick(err));

})


app.post("/api/persons", (request, response, next) => {
    if (!request.body.name && !request.body.number) {
        return res.status(400).json({ error: "Body has to include a valid name and number" });
    }
    const newPerson = new Person({
        name: request.body.name,
        number: request.body.number
    });

    newPerson.save().then((person) => {

        response.json(person);
    }).catch(err => next(err));

})

const unKnownEndpoint = (req, res) => {
    res.status(404).send({ error: "unknown endpoint" });
}
app.use(unKnownEndpoint);


const errorHandler = (err, req, res, next) => {
    console.log(err.message);
    if (err.name === "castError") {
        return res.status(400).json({ error: "malformed id" });
    }
    next(err);
}
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})