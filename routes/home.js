var express = require("express");
const {
  getNoticiaController,
  estudiantesController,
  deshabilitarNoticiaController,
  getEditarNoticiaController,
  consultarCedulaController,
} = require("../controllers/home");
var router = express.Router();
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/noticia", asyncHandler(getNoticiaController));
router.get(
  "/noticia/editar/:id",
  loginUser,
  asyncHandler(getEditarNoticiaController)
);
router.get(
  "/noticia/deshabilitar/:id",
  asyncHandler(deshabilitarNoticiaController)
);
router.get("/estudiantes", function (req, res, next) {
  res.render("estudiantes");
});
router.post("/estudiantes", asyncHandler(consultarCedulaController));
router.get("/registrar/estudiantes", function (req, res, next) {
  const data = req.session.cedula;
  res.render("registrar-estudiantes", { data });
});
router.post("/registrar/estudiantes", asyncHandler(estudiantesController));

module.exports = router;
