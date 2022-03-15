var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log("student");
  res.send("respond with a respond");
});
router.get("/create", function (req, res, next) {
  console.log("student");
  res.send("respond with a VENGERS");
});
module.exports = router;
