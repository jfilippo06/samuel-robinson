const express = require("express");
const router = express.Router();

const noticiaRouter = require("./noticia");

router.use("/noticia", noticiaRouter);

module.exports = router;