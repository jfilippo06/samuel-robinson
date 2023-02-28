const express = require("express");
const {
  registerController,
  loginController,
  logOutController,
} = require("../controllers/auth");
const router = express.Router();
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");

/* GET login page. */
router.get("/login", function (req, res, next) {
  res.render("login");
});

router.post("/register", asyncHandler(registerController));
router.post("/login", asyncHandler(loginController));
router.get("/logout", loginUser, asyncHandler(logOutController));

module.exports = router;
