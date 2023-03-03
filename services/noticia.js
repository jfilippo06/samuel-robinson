const { crearNoticia, editarNoticia } = require("../DAL/noticia");

const noticiaService = async (id, nombre, titulo, noticia) => {
  await crearNoticia(id, nombre, titulo, noticia);
};

const editarNoticiaService = async (id, titulo, noticia) => {
  await editarNoticia(id, titulo, noticia)
}

module.exports = {
  noticiaService,
  editarNoticiaService,
};
