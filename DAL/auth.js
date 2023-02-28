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

const loginUsuario = async (nombre, clave) => {
  const user = await Usuario.findOne({
    where: {
      nombre: nombre,
    },
    paranoid: false,
  });
  if (!user) throw new AppError("Usuario no existe", 404);
  if (!bcrypt.compareSync(clave, user.clave))
    throw new AppError("Contraseña no valida", 404);
  return user;
};

module.exports = {
  registrarUsuario,
  loginUsuario,
};
