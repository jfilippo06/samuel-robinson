var express = require("express");
const { noticiaController } = require("../controllers/noticia");
var router = express.Router();
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");

router.get("/", loginUser, function (req, res, next) {
  res.render("admin/noticia");
});
router.post("/", loginUser, asyncHandler(noticiaController));
router.post("/:id", (req,res) => {
  res.json(req.params.id)
})

module.exports = router;
