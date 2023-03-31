const {
  getNoticiaService,
  estudiantesService,
  deshabilitarNoticiaService,
  getEditarNoticiaService,
  consultarCedulaService,
} = require("../services/home");

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
    const { username, cedula, password, firstname, lastname, email } = req.body;
    await estudiantesService(username, cedula, password, firstname, lastname, email);
    delete req.session.cedula
    req.flash("success", { msg: "Información registrada" });
    res.redirect("/estudiantes");
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/registrar/estudiantes");
  }
};

const deshabilitarNoticiaController = async (req, res) => {
  try {
    const { id } = req.params;
    await deshabilitarNoticiaService(id);
    req.flash("success", { msg: "Noticia deshabilitada" });
    res.redirect("/noticia");
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/noticia");
  }
};

const getEditarNoticiaController = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getEditarNoticiaService(id);
    res.render("admin/editar", { data });
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect(`/noticia/editar/${id}`);
  }
};

const consultarCedulaController = async (req, res) => {
  try {
    const { cedula } = req.body;
    await consultarCedulaService(cedula);
    req.session.cedula = cedula;
    res.redirect('/registrar/estudiantes')
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect(`/estudiantes`);
  }
};

module.exports = {
  getNoticiaController,
  estudiantesController,
  deshabilitarNoticiaController,
  getEditarNoticiaController,
  consultarCedulaController,
};
