// require your module (express)
const express = require('express');

// create a router object
const router = express.Router();

const goldendoodlesCtrl = require('../controllers/goldendoodles');


//define your route for GET '/new'
router.get('/', goldendoodlesCtrl.index);

// router.get('/new', flightsCtrl.new);

// router.post('/', flightsCtrl.create);



// export your router object
module.exports = router;