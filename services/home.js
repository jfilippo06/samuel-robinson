const { noticias } = require("../DAL/home");

const getNoticiaService = async () => {
  return await noticias();
};

module.exports = {
  getNoticiaService,
};
