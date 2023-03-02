const { Noticia, Estudiante } = require("../models");

const obtenerNoticias = async (limit, offset) => {
  return await Noticia.findAndCountAll({
    attributes: {
      exclude: ["id", "createdAt", "updatedAt", "deletedAt"],
    },
    order: [["id", "DESC"]],
    limit: limit,
    offset: offset,
  });
};

const crearEstudiantes = async (
  username,
  password,
  firstname,
  lastname,
  email
) => {
  await Estudiante.create({
    username,
    password,
    firstname,
    lastname,
    email,
  });
};

module.exports = {
  obtenerNoticias,
  crearEstudiantes,
};
