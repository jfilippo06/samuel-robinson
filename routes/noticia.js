var express = require("express");
const {
  noticiaController,
  editarNoticiaController,
} = require("../controllers/noticia");
var router = express.Router();
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");

router.get("/", loginUser, function (req, res, next) {
  res.render("admin/noticia");
});
router.post("/", loginUser, asyncHandler(noticiaController));
router.post("/:id", asyncHandler(editarNoticiaController));

module.exports = router;
