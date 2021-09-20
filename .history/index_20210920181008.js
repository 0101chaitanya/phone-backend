const express = require('express');
const app = express();


app.use(express.json());
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

    console.log(request);
    /* if (!request.body.name && !request.body.number) {

        res.send(400).send("Body has to include a valid name and number");
    }

    const newPerson = {
        id: assignId(),
        name: request.body.name,
        number: request.body.number
    }

    persons = persons.concat(newPerson);
    res.json(persons);
 */

})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})