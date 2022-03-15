var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  console.log("Index")

  res.render('Index', { title: 'Express' });
});
router.get('/', function(req, res, next) {
  console.log("student")

  res.render('student', { title: 'Express' });
});
module.exports = router;
