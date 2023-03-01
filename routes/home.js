var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/noticia", function (req, res, next) {
  res.render("noticia");
});

module.exports = router;
