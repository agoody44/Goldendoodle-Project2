const express = require('express');
const morgan = require('morgan');
const port = 3000; 

const indexRouter = require('./routes/index');
// ^ requiring the index router
const goldendoodlesRouter = require('./routes/goldendoodles');
const f1Router = require('./routes/f1');

// Set up express app
const app = express();

// Connect to DB
require('./config/database');

// Configure the app with app.set()
app.set('view engine', 'ejs');

// Mount middleware with app.use()
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// Mount routes with app.use()
app.use('/', indexRouter);
app.use('/goldendoodles', goldendoodlesRouter);
app.use('/f1', f1Router)

//catch 404
app.use(function (req, res, next) {
    res.status(404).send('404 that does not exist');
});

// Tell App to listen
app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});