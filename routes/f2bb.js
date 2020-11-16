// require your module (express)
const express = require('express');

// create a router object
const router = express.Router();

const f2bbCtrl = require('../controllers/f2bb');


//define your route for GET '/new'
router.get('/', f2bbCtrl.index);



// export your router object
module.exports = router;