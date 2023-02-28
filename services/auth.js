const bcrypt = require("bcrypt");
const auth = require("../config/auth");
const { registrarUsuario } = require("../DAL/auth");

const registerService = async (email, nombre, clave) => {
  const salt = await bcrypt.genSalt(Number.parseInt(auth.rounds));
  const hash = await bcrypt.hash(clave, salt);
  await registrarUsuario(email, nombre, hash);
};

module.exports = {
  registerService,
};
