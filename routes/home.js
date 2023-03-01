var express = require("express");
const { getNoticiaController } = require("../controllers/home");
var router = express.Router();
const asyncHandler = require("../middlewares/async-handler");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/noticia", asyncHandler(getNoticiaController));

module.exports = router;
