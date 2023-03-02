var express = require("express");
const {
  getNoticiaController,
  estudiantesController,
  deshailitarNoticiaController,
} = require("../controllers/home");
var router = express.Router();
const asyncHandler = require("../middlewares/async-handler");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/noticia", asyncHandler(getNoticiaController));
router.get("/noticia/deshabilitar/:id", asyncHandler(deshailitarNoticiaController));
router.get("/estudiantes", function (req, res, next) {
  res.render("estudiantes");
});
router.post("/estudiantes", asyncHandler(estudiantesController));

module.exports = router;
