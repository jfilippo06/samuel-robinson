"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Estudiantes",
      [
        {
          username: "Jesus",
          password: "Jesus123()",
          firstname: "Jesus",
          lastname: "Herrera",
          email: "example@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Juan",
          password: "Juan123()",
          firstname: "Juan",
          lastname: "Alvarez",
          email: "example@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Daniel",
          password: "Daniel123()",
          firstname: "Daniel",
          lastname: "Guetierrez",
          email: "example@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Esmeralda",
          password: "Esmeralda123()",
          firstname: "Esmeralda",
          lastname: "Castro",
          email: "example@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Dubraska",
          password: "Dubraska123()",
          firstname: "Dubraska",
          lastname: "Perez",
          email: "example@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Pedro",
          password: "Pedro123()",
          firstname: "Pedro",
          lastname: "Castillo",
          email: "example@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Estudiantes", null, {});
  },
};
