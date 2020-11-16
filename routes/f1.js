// require your module (express)
const express = require('express');

// create a router object
const router = express.Router();

const f1Ctrl = require('../controllers/f1');


//define your route for GET '/new'
router.get('/f1', f1Ctrl.index);



// export your router object
module.exports = router;