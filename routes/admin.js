const express = require("express");
const router = express.Router();

const noticiaRouter = require("./noticia");
const estudianteRouter = require("./estudiante");

router.use("/noticia", noticiaRouter);
router.use("/estudiante", estudianteRouter);

module.exports = router;