var express = require("express");
var app = express();
var router = express.Router();

<<<<<<< HEAD:controllers/concertController.js
app.set('models', require('../models/reviews.js'));
var review = app.get('models');
console.log(review);

=======
// Import the model (cat.js) to use its database functions.
var cat = require("../models/reviews.js");
>>>>>>> f702bf992b55f3651a51fc3a12fb14ede10a5351:controllers/concertController.js

// Create all our routes and set up logic within those routes where required.
router.get('/', function(req, res) {
  console.log(review);
  review.findAll().then(review => {
  console.log(review);
});
  res.render('index', {

  });
});

router.post("/", function(req, res) {
  cat.create([
    "name", "sleepy"
  ], [
    req.body.name, req.body.sleepy
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  cat.update({
    sleepy: req.body.sleepy
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  cat.delete(condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
