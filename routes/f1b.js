// require your module (express)
const express = require('express');

// create a router object
const router = express.Router();

const f1bCtrl = require('../controllers/f1b');


//define your route for GET '/new'
router.get('/', f1bCtrl.index);



// export your router object
module.exports = router;