const User = require('../models/user');
const bcrypt = require('bcrypt');       
const SALT_ROUNDS = 10;


module.exports = {
    index,
    new: newUser,
    signUp,
    signIn,
    login,
    signOut,
    profile,
};

function index(req, res) {
    res.render('index.ejs');
}

function newUser(req, res) {
    res.render('users/new');
}

function signUp(req, res) {
    console.log(req.body);
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(SALT_ROUNDS));
    User.create(req.body, function (error, newUser) {
        console.log(newUser);
        res.redirect('/');
    });
}

function signIn(req, res) {
    res.render('users/login');
}

function login(req, res) {
    console.log(req.body.username);
    User.findOne({
        username: req.body.username
    }, function (error, foundUser) {
        console.log(foundUser);
        if (foundUser === null) {
            res.redirect('/users/signin');
        } else {
            const doesPasswordMatch = bcrypt.compareSync(req.body.password, foundUser.password);
            console.log(doesPasswordMatch);
            if (doesPasswordMatch) {
                req.session.userId = foundUser._id; 
                res.redirect('/');
            } else {
                res.redirect('/users/signin');
            }
        }
    });
}

function profile(req, res){
    res.render('users/profile');
};

function signOut(req, res){
    // destory the session
    console.log(signOut);
    req.session.destroy(function(err){
        //delete req.user
        delete req.user;
        // redirect back home
        res.redirect('/');
    });
};