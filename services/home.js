const { noticias, crearEstudiantes } = require("../DAL/home");

const getNoticiaService = async () => {
  return await noticias();
};

const estudiantesService = async (
  username,
  password,
  firstname,
  lastname,
  email
) => {
  await crearEstudiantes(username, password, firstname, lastname, email);
};

module.exports = {
  getNoticiaService,
  estudiantesService,
};
