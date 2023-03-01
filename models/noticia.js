'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Noticia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Noticia.belongsTo(models.Usuario)
    }
  }
  Noticia.init({
    usuario: DataTypes.STRING,
    titulo: DataTypes.STRING,
    noticia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Noticia',
    paranoid: true,
  });
  return Noticia;
};