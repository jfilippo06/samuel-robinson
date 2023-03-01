'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.hasOne(models.Noticia)
    }
  }
  Usuario.init({
    email: DataTypes.STRING,
    nombre: DataTypes.STRING,
    clave: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
    paranoid: true,
  });
  return Usuario;
};