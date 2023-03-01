var express = require("express");
var router = express.Router();
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");

router.get("/",  function (req, res, next) {
  res.render("admin/estudiantes");
});

module.exports = router;