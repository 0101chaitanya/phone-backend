const mongoose = require('mongoose');


const password = process.argv[2];

const url = `mongodb+srv://0101chaitanya:${password}@cluster0.ojoav.mongodb.net/fso-phonebook?authSource=admin&replicaSet=atlas-yx635f-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true`;


mongoose.connect(url);

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema);

const newPerson = new Person({
    name: process.argv[3],
    number: process.argv[4],
})

if (process.argv.length < 5) {
    if (process.argv.length < 3) {


        console.log("Please provide a valid password");
        mongoose.connection.close();
        process.exit(1);
    }
    Person.find({}).then((res) => {
        res.forEach((person) => {
            console.log(person);
        })
        console.log("Please provide name and number arguments");
        mongoose.connection.close();
        process.exit(1);

    })


}



newPerson.save().then((result) => {
    console.log(result);
    mongoose.connection.close();

}).catch(e => console.log(e));