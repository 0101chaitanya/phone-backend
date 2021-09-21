const mongoose = require('mongoose');

if (process.argv.length < 3) {
    if (process.argv.length < 5) {
        console.log("Please provide name and number arguments");
    }
    console.log("Please provide a valid password");
    process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://0101chaitanya:${password}@cluster0.ojoav.mongodb.net/fso-phonebook?authSource=admin&replicaSet=atlas-yx635f-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true`;


mongoose.connection(url);

const personSchema = new mongoose.Schema({
    name: String,
    number: String,

})