const { Noticia, Estudiante } = require("../models");

const noticias = async () => {
  return await Noticia.findAll({
    order: [["id", "DESC"]],
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
  noticias,
  crearEstudiantes,
};
