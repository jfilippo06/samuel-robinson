const { getNoticiaService } = require("../services/home");

const getNoticiaController = async (req, res) => {
  try {
    const data = await getNoticiaService();
    res.render("noticia", { data });
  } catch (error) {
    req.flash("alert", { msg: error.message });
    res.redirect("/noticia");
  }
};

module.exports = {
  getNoticiaController,
};
