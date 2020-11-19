const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goldendoodleSchema = new Schema({
    name: String,
    sex: String,
    age: Number,
    image: String,
  });


module.exports = mongoose.model('Goldendoodle', goldendoodleSchema);