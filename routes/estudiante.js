var express = require("express");
const {
  getEstudianteController,
  paginacion,
} = require("../controllers/estudiante");
var router = express.Router();
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");

router.get("/", asyncHandler(paginacion));

router.get("/reporte", asyncHandler(getEstudianteController));

module.exports = router;
