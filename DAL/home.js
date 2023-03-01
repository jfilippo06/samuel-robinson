const { Noticia } = require("../models");

const noticias = async () => {
    return await Noticia.findAll({
        order: [["id", "DESC"]],
    })
};

module.exports = {
    noticias,
}