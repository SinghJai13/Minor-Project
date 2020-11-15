//require the lib
const mongoose = require('mongoose');
//connect to db
mongoose.connect('mongodb://localhost/minor');
//acquire the connection(to check if it is successful)
const db = mongoose.connection;
//error
db.on('error', console.error.bind(console, 'error connecting db'));
//up and running then print msg
db.once('open', function () {
    console.log('succesful connection to db')
})
module.exports = db;