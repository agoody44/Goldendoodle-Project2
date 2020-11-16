// require your module (express)
const express = require('express');

// create a router object
const router = express.Router();

const f2bCtrl = require('../controllers/f2b');


//define your route for GET '/new'
router.get('/', f2bCtrl.index);



// export your router object
module.exports = router;