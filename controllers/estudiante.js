const {
  getEstudianteService,
  paginacionService,
  deshabilitarEstudianteService,
} = require("../services/estudiante");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const path = require("path");
const ejs = require("ejs");
const pdf = require("html-pdf");

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
    res.render("admin/estudiantes-csv", { estudiante, next, prev });
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/admin/estudiante-csv");
  }
};

const paginacion2 = async (req, res) => {
  try {
    const { page, size } = req.query;
    const { estudiante, next, prev } = await paginacionService(page, size);
    res.render("admin/estudiantes-pdf", { estudiante, next, prev });
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/admin/estudiante-pdf");
  }
};

const deshabilitarEstudianteControler = async (req, res) => {
  try {
    const { id } = req.params;
    await deshabilitarEstudianteService(id);
    req.flash("susccess", { msg: "Deshabilitado correctamente" });
    res.redirect("/admin/estudiante/reporte-csv");
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/admin/estudiante/reporte-csv");
  }
};
const deshabilitarEstudianteControler2 = async (req, res) => {
  try {
    const { id } = req.params;
    await deshabilitarEstudianteService(id);
    req.flash("susccess", { msg: "Deshabilitado correctamente" });
    res.redirect("/admin/estudiante/reporte-pdf");
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/admin/estudiante/reporte-pdf");
  }
};

const estudiantePdf = async (req, res) => {
  try {
    const data = await getEstudianteService();
    ejs.renderFile(
      path.join(__dirname, `../views/reporte/`, "pdf.ejs"),
      { data },
      (err, data) => {
        if (err) {
          res.json(error.message);
        } else {
          pdf
            .create(data)
            .toFile(`./reporte/reporte.pdf`, (err, data) => {
              if (err) {
                res.json(error.message);
              } else {
                res.download(path.join(__dirname, `../reporte`, "reporte.pdf"));
              }
            });
        }
      }
    );
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = {
  getEstudianteController,
  paginacion,
  paginacion2,
  deshabilitarEstudianteControler,
  deshabilitarEstudianteControler2,
  estudiantePdf,
};
