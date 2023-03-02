const {
  getEstudianteService,
  paginacionService,
  deshabilitarEstudianteService,
} = require("../services/estudiante");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const path = require("path");

const getEstudianteController = async (req, res) => {
  try {
    const data = await getEstudianteService();
    const csvWriter = createCsvWriter({
      path: "reporte/reporte.csv",
      header: [
        { id: "username", title: "username" },
        { id: "password", title: "password" },
        { id: "firstname", title: "firstname" },
        { id: "lastname", title: "lastname" },
        { id: "email", title: "email" },
      ],
    });
    csvWriter.writeRecords(data).then(() => {
      res.download(path.join(__dirname, `../reporte`, "reporte.csv"));
    });
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
    res.redirect("/admin/estudiante");
  }
};

const deshabilitarEstudianteControler = async (req, res) => {
  try {
    const { id } = req.params;
    await deshabilitarEstudianteService(id);
    req.flash("susccess", { msg: "Deshabilitado correctamente" });
    res.redirect("/admin/estudiante");
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/admin/estudiante");
  }
};

module.exports = {
  getEstudianteController,
  paginacion,
  deshabilitarEstudianteControler,
};
