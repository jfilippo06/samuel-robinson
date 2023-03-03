var express = require("express");
const {
  getEstudianteController,
  paginacion,
  deshabilitarEstudianteControler,
  estudiantePdf,
} = require("../controllers/estudiante");
var router = express.Router();
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");

router.get("/", loginUser, asyncHandler(paginacion));
router.get("/reporte", loginUser, asyncHandler(getEstudianteController));
router.get("/pdf", loginUser, asyncHandler(estudiantePdf));
router.get(
  "/deshabilitar/:id",
  loginUser,
  asyncHandler(deshabilitarEstudianteControler)
);

module.exports = router;
