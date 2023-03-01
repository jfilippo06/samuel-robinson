"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Noticia",
      [
        {
          UsuarioId: 1,
          usuario: "Admin",
          titulo: "Very happy to find this institute!",
          noticia: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea saepe placeat ipsam pariatur fuga nesciunt quae corporis quisquam quam voluptate explicabo at error, autem corrupti id doloremque consectetur, ipsum rem!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UsuarioId: 1,
          usuario: "Admin",
          titulo: "Very happy to find this institute!",
          noticia: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea saepe placeat ipsam pariatur fuga nesciunt quae corporis quisquam quam voluptate explicabo at error, autem corrupti id doloremque consectetur, ipsum rem!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UsuarioId: 1,
          usuario: "Admin",
          titulo: "Very happy to find this institute!",
          noticia: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea saepe placeat ipsam pariatur fuga nesciunt quae corporis quisquam quam voluptate explicabo at error, autem corrupti id doloremque consectetur, ipsum rem!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UsuarioId: 1,
          usuario: "Admin",
          titulo: "Very happy to find this institute!",
          noticia: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea saepe placeat ipsam pariatur fuga nesciunt quae corporis quisquam quam voluptate explicabo at error, autem corrupti id doloremque consectetur, ipsum rem!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UsuarioId: 1,
          usuario: "Admin",
          titulo: "Very happy to find this institute!",
          noticia: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea saepe placeat ipsam pariatur fuga nesciunt quae corporis quisquam quam voluptate explicabo at error, autem corrupti id doloremque consectetur, ipsum rem!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Noticia", null, {});
  },
};
