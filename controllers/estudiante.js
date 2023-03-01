const {
  getEstudianteService,
  paginacionService,
} = require("../services/estudiante");

const getEstudianteController = async (req, res) => {
  try {
    const data = await getEstudianteService();
    res.json(data);
  } catch (error) {
    res.json(error.message);
  }
};

const paginacion = async (req, res) => {
  try {
    const { page, size } = req.query;
    const { estudiante, next, prev } = await paginacionService(page, size);
    res.render("admin/estudiantes", { estudiante, next, prev });
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/admin/estudiantes");
  }
};

module.exports = {
  getEstudianteController,
  paginacion,
};
