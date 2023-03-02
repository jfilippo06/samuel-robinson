const {
  obtenerNoticias,
  crearEstudiantes,
  deshabilitarNoticia,
  getEditarNoticia,
} = require("../DAL/home");
const { nextPage, prevPage } = require("../helpers/paginationTools");

const getNoticiaService = async (page, size) => {
  const limit = size ? +size : 5;
  const offset = page ? page * limit : 0;
  const { count: totalItems, rows: noticia } = await obtenerNoticias(
    limit,
    offset
  );
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  const next = nextPage("noticia", currentPage, totalPages, limit);
  const prev = prevPage("noticia", currentPage, totalPages, limit);
  return { noticia, next, prev };
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

const deshabilitarNoticiaService = async (id) => {
  await deshabilitarNoticia(id);
};

const getEditarNoticiaService = async (id) => {
  return await getEditarNoticia(id);
};

module.exports = {
  getNoticiaService,
  estudiantesService,
  deshabilitarNoticiaService,
  getEditarNoticiaService,
};
