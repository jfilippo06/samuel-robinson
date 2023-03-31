const { Op } = require("sequelize");
const AppError = require("../errors/appErrors");
const { Noticia, Estudiante } = require("../models");

const obtenerNoticias = async (limit, offset) => {
  return await Noticia.findAndCountAll({
    attributes: {
      exclude: ["updatedAt", "deletedAt"],
    },
    order: [["id", "DESC"]],
    limit: limit,
    offset: offset,
  });
};

const crearEstudiantes = async (
  username,
  cedula,
  password,
  firstname,
  lastname,
  email
) => {
  const user = await Estudiante.findOne({
    where: {
      [Op.or]: [{ username: username }, { email: email }, { cedula: cedula }],
    },
  });
  if (user) throw new AppError("Usuario ya existe", 200);
  await Estudiante.create({
    username,
    cedula,
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
};

const getEditarNoticia = async (id) => {
  return await Noticia.findOne({
    where: {
      id: id,
    },
  });
};

const consultarCedula = async (cedula) => {
  const data = await Estudiante.findOne({
    where: {
      cedula: Number.parseInt(cedula),
    },
  });
  if (data) throw new AppError("Cedula ya existe", 200);
};

module.exports = {
  obtenerNoticias,
  crearEstudiantes,
  deshabilitarNoticia,
  getEditarNoticia,
  consultarCedula,
};
