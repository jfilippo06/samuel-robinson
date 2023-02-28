const express = require("express");
const router = express.Router();

const homeRouter = require("./home");
const authRouter = require("./auth");
const adminRouter = require("./admin");

router.use("/", homeRouter);
router.use("/auth", authRouter);
router.use("/admin", adminRouter);

module.exports = router;
