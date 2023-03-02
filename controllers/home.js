const { getNoticiaService, estudiantesService } = require("../services/home");

const getNoticiaController = async (req, res) => {
  try {
    const { page, size } = req.query;
    const { noticia, next, prev } = await getNoticiaService(page, size);
    res.render("noticia", { noticia, next, prev });
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/noticia");
  }
};

const estudiantesController = async (req, res) => {
  try {
    const { username, password, firstname, lastname, email } = req.body;
    await estudiantesService(username, password, firstname, lastname, email);
    req.flash("success", { msg: "Información registrada" });
    res.redirect("/estudiantes");
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/estudiantes");
  }
};

module.exports = {
  getNoticiaController,
  estudiantesController,
};
