const {
  getEstudiante,
  paginacionEstudiantes,
  deshabilitarEstudiante,
} = require("../DAL/estudiante");
const { nextPage, prevPage } = require("../helpers/paginationTools");

const getEstudianteService = async () => {
  return await getEstudiante();
};

const paginacionService = async (page, size) => {
  const limit = size ? +size : 20;
  const offset = page ? page * limit : 0;
  const { count: totalItems, rows: estudiante } = await paginacionEstudiantes(
    limit,
    offset
  );
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  const next = nextPage("admin/estudiante", currentPage, totalPages, limit);
  const prev = prevPage("admin/estudiante", currentPage, totalPages, limit);
  return { estudiante, next, prev };
};

const deshabilitarEstudianteService = async (id) => {
  await deshabilitarEstudiante(id);
};

module.exports = {
  getEstudianteService,
  paginacionService,
  deshabilitarEstudianteService,
};
