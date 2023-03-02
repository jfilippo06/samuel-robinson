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
      exclude: ["createdAt", "updatedAt", "deletedAt"],
    },
    limit: limit,
    offset: offset,
  });
};

const deshabilitarEstudiante = async (id) => {
  await Estudiante.destroy({
    where: {
      id: id,
    },
  });
}

module.exports = {
  getEstudiante,
  paginacionEstudiantes,
  deshabilitarEstudiante,
};
