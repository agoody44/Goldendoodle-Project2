const bcrypt = require('bcrypt');

// inside of playground/bcrypt.js

const SALT_ROUNDS = bcrypt.genSaltSync(10);

const password = 'supersecretpassword';

// const hashedString = bcrypt.hashSync(password, SALT_ROUNDS);

// const isMatch = bcrypt.compareSync('passwordProvidedAtLogin', hashedPassword);