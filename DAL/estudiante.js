const { Estudiante } = require("../models");

const getEstudiante = async () => {
  return await Estudiante.findAll({
    attributes: {
      exclude: ["id", "createdAt", "updatedAt", "deletedAt"],
    },
  });
};

const paginacionEstudiantes = async (limit, offset) => {
  return await Estudiante.findAndCountAll({
    attributes: {
      exclude: ["id", "createdAt", "updatedAt", "deletedAt"],
    },
    limit: limit,
    offset: offset,
  });
};

module.exports = {
  getEstudiante,
  paginacionEstudiantes,
};
