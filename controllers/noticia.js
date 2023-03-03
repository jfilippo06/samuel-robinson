const { noticiaService, editarNoticiaService } = require("../services/noticia");

const noticiaController = async (req, res) => {
  try {
    const { id, nombre } = req.user;
    const { titulo, noticia } = req.body;
    await noticiaService(id, nombre, titulo, noticia);
    req.flash("success", { msg: "Noticia agregada" });
    res.redirect("/admin/noticia");
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/admin/noticia");
  }
};

const editarNoticiaController = async (req, res) => {
  const { id } = req.params;
  try {
    const { titulo, noticia } = req.body;
    await editarNoticiaService(id, titulo, noticia);
    req.flash("success", { msg: "Noticia agregada" });
    res.redirect("/noticia");
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect(`/noticia/editar/${id}`);
  }
};

module.exports = {
  noticiaController,
  editarNoticiaController,
};
