const mongoose = require('mongoose');



const url = "mongodb+srv://0101chaitanya:Webdev%400101@cluster0.ojoav.mongodb.net/fso-phonebook?authSource=admin&replicaSet=atlas-yx635f-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true";


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

module.exports = mongoose.model('Person', personSchema);