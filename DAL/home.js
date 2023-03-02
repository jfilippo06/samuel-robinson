const { Noticia, Estudiante } = require("../models");

const obtenerNoticias = async (limit, offset) => {
  return await Noticia.findAndCountAll({
    attributes: {
      exclude: ["createdAt", "updatedAt", "deletedAt"],
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

const deshabilitarNoticia = async (id) => {
  await Noticia.destroy({
    where: {
      id: id,
    },
  });
}

const getEditarNoticia = async (id) => {
  return await Noticia.findOne({
    where: {
      id:id
    }
  })
}

module.exports = {
  obtenerNoticias,
  crearEstudiantes,
  deshabilitarNoticia,
  getEditarNoticia,
};
