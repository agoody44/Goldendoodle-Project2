const Goldendoodle = require('../models/goldendoodle.js')

module.exports = {
    index,
    new: newGoldendoodle,
    create,
    edit,
};

//define the new function (controller function)

function index(req, res) {
    Goldendoodle.find({}, function(err, goldendoodles) {
    res.render('goldendoodles/share', { goldendoodles })
});
}

function newGoldendoodle(req, res) {
    res.render('/share');
   }


   function create(req, res) {
    console.log(req.body);
    req.body.done = false;
    Goldendoodle.create(req.body);
    res.redirect('/share');
  }

  function edit(req, res) {
    Goldendoodle.findById(req.params.id, function(err, goldendoodle) {
      res.render('share/edit', { Goldendoodle });
    });
  }