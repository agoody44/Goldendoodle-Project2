// require your module (express)
const express = require('express');

// create a router object
const router = express.Router();

const shareCtrl = require('../controllers/share');


//define your route for GET '/new'
router.get('/', shareCtrl.index);
router.get('/new', shareCtrl.new);
router.delete('/:id', shareCtrl.delete)
router.put('/:id/', shareCtrl.update)
router.post('/', shareCtrl.create);
router.get('/:id/edit', shareCtrl.edit)




// export your router object
module.exports = router;