var express = require("express");
const { noticiaController } = require("../controllers/noticia");
var router = express.Router();
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");

router.get("/", function (req, res, next) {
  res.render("admin");
});
router.post("/", asyncHandler(noticiaController));

module.exports = router;
