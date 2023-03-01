"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Estudiantes",
      [
        {
          username: "Maria",
          password: "Maria123()",
          firstname: "Maria",
          lastname: "Herrera",
          email: "example@example1.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Valentin",
          password: "Valentin123()",
          firstname: "Valentin",
          lastname: "Alvarez",
          email: "example@example2.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Daniel",
          password: "Daniel123()",
          firstname: "Daniel",
          lastname: "Guetierrez",
          email: "example@example3.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Esmeralda",
          password: "Esmeralda123()",
          firstname: "Esmeralda",
          lastname: "Castro",
          email: "example@example4.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Dubraska",
          password: "Dubraska123()",
          firstname: "Dubraska",
          lastname: "Perez",
          email: "example@example5.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Pedro",
          password: "Pedro123()",
          firstname: "Pedro",
          lastname: "Castillo",
          email: "example@example6.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Flavio",
          password: "Flavio123()",
          firstname: "Flavio",
          lastname: "Salazar",
          email: "example@example7.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Rebeca",
          password: "Rebeca123()",
          firstname: "Rebeca",
          lastname: "Salazar",
          email: "example@example8.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Cesar",
          password: "Cesar123()",
          firstname: "Cesar",
          lastname: "Salazar",
          email: "example@example9.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "America",
          password: "America123()",
          firstname: "America",
          lastname: "Salazar",
          email: "example@example10.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Jose",
          password: "Jose123()",
          firstname: "Jose",
          lastname: "Salazar",
          email: "example@example11.com",
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
