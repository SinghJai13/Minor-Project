const mongoose = require('mongoose');

const dbSchema = new mongoose.Schema({

    image: {
        type: String,
        required: true,
        unique: true
    }

});

const DB = mongoose.model('db', dbSchema);

module.exports = DB;