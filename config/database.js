const mongoose = require('mongoose');

const connectionURI = process.env.DATABASE_URI

mongoose.connect(connectionURI, {
	useNewUrlParser: true, 
	useCreateIndex: true,
	useUnifiedTopology: true, 
	useFindAndModify: false
});

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function() {
console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});