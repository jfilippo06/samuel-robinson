const { getEstudiante } = require("../DAL/estudiante");

const getEstudianteService = async () => {
  return await getEstudiante();
};

module.exports = {
  getEstudianteService,
};
