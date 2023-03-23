var express = require("express");
const {
  getEstudianteController,
  paginacion,
  paginacion2,
  deshabilitarEstudianteControler,
  deshabilitarEstudianteControler2,
  estudiantePdf,
} = require("../controllers/estudiante");
var router = express.Router();
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");

router.get("/reporte-csv", loginUser, asyncHandler(paginacion));
router.get("/reporte-pdf", loginUser, asyncHandler(paginacion2));
router.get("/reporte", loginUser, asyncHandler(getEstudianteController));
router.get("/pdf", loginUser, asyncHandler(estudiantePdf));
router.get(
  "/deshabilitar-csv/:id",
  loginUser,
  asyncHandler(deshabilitarEstudianteControler)
);
router.get(
  "/deshabilitar-pdf/:id",
  loginUser,
  asyncHandler(deshabilitarEstudianteControler2)
);

module.exports = router;
