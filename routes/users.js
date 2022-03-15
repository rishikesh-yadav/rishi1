var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('user')
  res.send('respond with a resource');
});
router.get('/create', function(req, res, next) {
  console.log('user')
  res.send('respond with a create');
});
module.exports = router;
