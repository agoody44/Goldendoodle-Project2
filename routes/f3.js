// require your module (express)
const express = require('express');

// create a router object
const router = express.Router();

const f3Ctrl = require('../controllers/f3');


//define your route for GET '/new'
router.get('/', f3Ctrl.index);



// export your router object
module.exports = router;