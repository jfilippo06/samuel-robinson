const { crearNoticia } = require("../DAL/noticia");

const noticiaService = async (id, nombre, titulo, noticia) => {
  await crearNoticia(id, nombre, titulo, noticia);
};

module.exports = {
  noticiaService,
};
