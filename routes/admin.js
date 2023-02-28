var express = require("express");
var router = express.Router();
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");

router.get("/", loginUser, function (req, res, next) {
  res.render("admin");
});

module.exports = router;
