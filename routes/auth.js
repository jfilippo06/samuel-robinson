const express = require("express");
const { registerController } = require("../controllers/auth");
const router = express.Router();
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");
const verifyAdmin = require("../middlewares/verifyAdmin");

/* GET login page. */
router.get("/login", function (req, res, next) {
  res.render("login");
});

router.post("/register", asyncHandler(registerController));
router.post("/login");

module.exports = router;
