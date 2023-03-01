"use strict";
const bcrypt = require("bcrypt");
const auth = require("../config/auth");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const salt = await bcrypt.genSalt(Number.parseInt(auth.rounds));
    const admin = await bcrypt.hash(auth.admin, salt);
    await queryInterface.bulkInsert(
      "Usuarios",
      [
        {
          email: "admin@test.com",
          nombre: "Admin",
          clave: admin,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Usuarios", null, {});
  },
};
