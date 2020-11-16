// require your module (express)
const express = require('express');

// create a router object
const router = express.Router();

const f1bbCtrl = require('../controllers/f1bb');


//define your route for GET '/new'
router.get('/', f1bbCtrl.index);



// export your router object
module.exports = router;