const mongoose = require('mongoose');


const password = process.argv[2];

const url = `mongodb+srv://0101chaitanya:${password}@cluster0.ojoav.mongodb.net/fso-phonebook?authSource=admin&replicaSet=atlas-yx635f-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true`;


mongoose.connect(url);

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema);


const persons = [{

        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {

        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {

        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {

        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
].map(person => {

    const newPerson = new Person({
        name: person.name,
        number: person.number,
    });
    return newPerson.save();

})

Promise.all([...persons]).then((result) => {
    result.forEach((person) => {
        console.log(person);
    })

    mongoose.connection.close();

}).catch(e => console.log(e));