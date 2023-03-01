const {
  getEstudianteService,
  paginacionService,
} = require("../services/estudiante");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const getEstudianteController = async (req, res) => {
  try {
    const data = await getEstudianteService();
    const csvWriter = createCsvWriter({
      path: "prueba.csv",
      header: [
        { id: "username", title: "username" },
        { id: "password", title: "password" },
        { id: "firstname", title: "firstname" },
        { id: "lastname", title: "lastname" },
        { id: "email", title: "email" },
      ],
    });
    csvWriter.writeRecords(data).then(()=>{
      res.redirect("/admin/estudiante");
    })
    
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

module.exports = {
  getEstudianteController,
  paginacion,
};
