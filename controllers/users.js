const User = require('../models/user');
const bcrypt = require('bcrypt');       
const SALT_ROUNDS = 10;


module.exports = {
    new: newUser,
    signUp,
    signIn,
    login,
    signOut,
    profile,
};

function newUser(req, res) {
    res.render('users/new');
}

function signUp(req, res) {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, function (error, newUser) {
        
        res.redirect('/');
    });
}

function signIn(req, res) {
    res.render('users/login');
}

function login(req, res) {
    User.findOne({
        username: req.body.username
    }, function (error, foundUser) {
        if (foundUser === null) {
            req.flash("error", err.message);
            res.redirect('/users/signin');
        } else {
            const doesPasswordMatch = bcrypt.compareSync(req.body.password, foundUser.password);
            if (doesPasswordMatch) {
                req.session.userId = foundUser._id; 
                req.flash("success", "successfuly Signed up");
                res.redirect('/users/signin'); // redirect back to main change!!!!!!!!!!
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
    req.session.destroy(function(err){
        //delete req.user
        delete req.user;
        // redirect back home
        res.redirect('/');
    });
};