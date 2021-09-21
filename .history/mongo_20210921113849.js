const mongoose = require('mongoose');

if (process.argv.length < 3) {
    if (process.argv.length < 5) {
        console.log("Please provide name and number arguments");
    }
    console.log("Please provide a valid password");
    process.exit(1);
}