const express = require('express');
const morgan = require('morgan');
const port = 3000; 
const session = require('express-session');
const authorization = require('./utils/authorization');

const indexRouter = require('./routes/index');
// ^ requiring the index router
const goldendoodlesRouter = require('./routes/goldendoodles');
const f1Router = require('./routes/f1');
const f1bRouter = require('./routes/f1b')
const f1bbRouter = require('./routes/f1bb')
const f2Router = require('./routes/f2')
const f2bRouter = require('./routes/f2b')
const f2bbRouter = require('./routes/f2bb')
const f3Router = require('./routes/f3');
const multigenRouter = require('./routes/multigen');

const usersRouter = require('./routes/users');

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

app.use(session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: false
}));

app.use(authorization.addUserToRequest);

// Mount routes with app.use()
app.use('/', indexRouter);
app.use('/goldendoodles', goldendoodlesRouter);
app.use('/f1', f1Router);
app.use('/f1b', f1bRouter);
app.use('/f1bb', f1bbRouter);
app.use('/f2', f2Router);
app.use('/f2b', f2bRouter);
app.use('/f2bb', f2bbRouter);
app.use('/f3', f3Router);
app.use('/multigen', multigenRouter);


app.use('/users', usersRouter);

// Tell App to listen
app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});