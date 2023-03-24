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
          titulo: "Inscripciónes 2023",
          noticia: "Desde el 10 de Enero de 2023, las inscripciónes en la Escuela Ténica Samuel Robinsón estarán disponibles, debe dirigirse a las instalaciones de la intitución.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UsuarioId: 1,
          usuario: "Admin",
          titulo: "Inicio de clases 2023",
          noticia: "El inicio de las clases en la institución, es el 15 de Enero de 2023.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UsuarioId: 1,
          usuario: "Admin",
          titulo: "Apertura OPSU",
          noticia: "Para nuestra comunidad de estudiantes de 3º Año de bachillerato deben de a la dirección.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UsuarioId: 1,
          usuario: "Admin",
          titulo: "Inicio de clases intercurso",
          noticia: "Inicio de clases recreativas el 27 de Febrero para nuestra comunidad estudiantil.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UsuarioId: 1,
          usuario: "Admin",
          titulo: "Campeonato de Ajedrez 2023",
          noticia: "El campeonato de ajedrez dará comienzo el 20 de Marzo en nuestras instalaciónes de la Escuela Técnica Samuel Robinsón.",
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
