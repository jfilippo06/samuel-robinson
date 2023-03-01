const { Estudiante } = require("../models");

const getEstudiante = async () => {
  return await Estudiante.findAll({
    attributes: {
      exclude: ["id", "createdAt", "updatedAt", "deletedAt"],
    },
  });
};

module.exports = {
  getEstudiante,
};
