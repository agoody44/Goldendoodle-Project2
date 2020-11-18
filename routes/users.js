const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

const authorization = require('../utils/authorization');

router.get('/new', usersCtrl.new);
router.post('/signup', usersCtrl.signUp);
router.get('/signin', usersCtrl.signIn);
router.post('/login', usersCtrl.login);
router.get('/signout', usersCtrl.signOut);
router.get('/profile', authorization.isAuthenticated, usersCtrl.profile);

module.exports = router;