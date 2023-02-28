const AppError = require("../errors/appErrors");
const bcrypt = require("bcrypt");
const { Usuario } = require("../models");

const registrarUsuario = async (email, nombre, hash) => {
  const user = await Usuario.findOne({
    where: {
      email: email,
    },
  });
  if (user) throw new AppError("Usuario ya existe", 200);
  await Usuario.create({
    email,
    nombre,
    clave: hash,
  });
};

module.exports = {
  registrarUsuario,
};
