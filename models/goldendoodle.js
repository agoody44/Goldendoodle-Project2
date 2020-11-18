const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goldendoodleSchema = new Schema({
    name: String,
    sex: String,
    age: Number,
  });


module.exports = mongoose.model('Goldendoodle', goldendoodleSchema);