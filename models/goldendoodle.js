const mongoose = require('mongoose');

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const goldendoodleSchema = new Schema({
    name: String,
    birthYear: Number,
    sex: String,
    age: Number,
  });


module.exports = mongoose.model('Goldendoodle', goldendoodleSchema);