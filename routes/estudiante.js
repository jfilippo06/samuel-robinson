var express = require("express");
const { getEstudianteController } = require("../controllers/estudiante");
var router = express.Router();
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");

router.get("/", function (req, res, next) {
  res.render("admin/estudiantes");
});

router.get("/reporte", asyncHandler(getEstudianteController));

module.exports = router;
