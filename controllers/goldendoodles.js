// require the model
const Goldendoodle = require ('../models/goldendoodle');

// TODO setup the module.exports and export your new action
module.exports = {
    index,
    
};

//TODO define the new function (controller function)

function index(req, res) {
    Goldendoodle.find({}, function(err, goldendoodles) {
    // render the template to show all dogs
        res.render('goldendoodles/index', { goldendoodles })
    });
};