// require your module (express)
const express = require('express');

// create a router object
const router = express.Router();

const multigenCtrl = require('../controllers/multigen');


//define your route for GET '/new'
router.get('/', multigenCtrl.index);



// export your router object
module.exports = router;