const { Noticia } = require("../models");

const crearNoticia = async (id, nombre, titulo, noticia) => {
  await Noticia.create({
    UsuarioId: id,
    usuario:nombre,
    noticia,
    titulo,
  });
};

const editarNoticia = async (id, titulo, noticia) => {
  await Noticia.update(
    {
      titulo: titulo,
      noticia: noticia,
    },
    {
      where: {
        id: id,
      },
    }
  );
}

module.exports = {
  crearNoticia,
  editarNoticia,
};
