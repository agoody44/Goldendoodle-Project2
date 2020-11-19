const Goldendoodle = require('../models/goldendoodle.js')

module.exports = {
    index,
    new: newGoldendoodle,
    create,
    edit,
    update,
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

   function update(req, res) {
    Goldendoodle.findByIdAndUpdate(req.params.id, req.body, function(err, Goldendoodle) {
      res.redirect('/share')
    });
  }


   function create(req, res) {
    console.log(req.body);
    req.body.done = false;
    Goldendoodle.create(req.body);
    res.redirect('/share');
  }

  function edit(req, res) {
    Goldendoodle.findById(req.params.id, function(err, goldendoodle) {
      res.render('share/edit', { goldendoodle });
    });
  }