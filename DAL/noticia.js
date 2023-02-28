const { Noticia } = require("../models");

const crearNoticia = async (id, nombre, titulo, noticia) => {
  await Noticia.create({
    UsuarioId: id,
    usuario:nombre,
    noticia,
    titulo,
  });
};

module.exports = {
  crearNoticia,
};
