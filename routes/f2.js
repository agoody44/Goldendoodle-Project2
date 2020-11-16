// require your module (express)
const express = require('express');

// create a router object
const router = express.Router();

const f2Ctrl = require('../controllers/f2');


//define your route for GET '/new'
router.get('/', f2Ctrl.index);



// export your router object
module.exports = router;