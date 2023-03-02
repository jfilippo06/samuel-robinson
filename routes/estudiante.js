var express = require("express");
const {
  getEstudianteController,
  paginacion,
  deshabilitarEstudianteControler,
} = require("../controllers/estudiante");
var router = express.Router();
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");

router.get("/", asyncHandler(paginacion));
router.get("/reporte", asyncHandler(getEstudianteController));
router.get("/deshabilitar/:id", asyncHandler(deshabilitarEstudianteControler));

module.exports = router;
