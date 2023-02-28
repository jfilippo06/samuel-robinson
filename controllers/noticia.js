const noticiaController = async (req, res) => {
  try {
    const { nombre, clave } = req.body;
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/admin/noticia");
  }
};

module.exports = {
  noticiaController,
};
