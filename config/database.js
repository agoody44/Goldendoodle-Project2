const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:Paisley8189!@cluster0.ss9zw.mongodb.net/goldendoodles?retryWrites=true&w=majority', {
	useNewUrlParser: true, 
	useCreateIndex: true,
	useUnifiedTopology: true 
});

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function() {
console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});