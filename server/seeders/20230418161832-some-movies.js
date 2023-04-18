"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "movies",
      [
        {
          title: "Stardust",
          year: "2007",
          poster:
            "https://resizing.flixster.com/1TSqJEQjZ0pd0wA7S3XWmV6c6KA=/206x305/v2/https://flxt.tmsimg.com/assets/p162796_p_v8_aa.jpg",
          raiting: "7.6",
          description:
            "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",
          watched: true,
          genreId: 3,
        },
        {
          title: "Indiana Jones and the Dial of Destiny",
          year: "2023",
          poster:
            "https://resizing.flixster.com/S2TNAOyRhTU_uayXdSjJk17lQU8=/206x305/v2/https://resizing.flixster.com/xYGAolR7ksdDWhEXU09Vv9JQB0s=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZiNWJhYWY1LWM5ODAtNGI3My04OWQ1LTUxOThjMzcyZTE3Yy5qcGc=",
          raiting: "-",
          description: "The plot is unknown at this time.",
          watched: false,
          genreId: 2,
        },
        {
          title: "Mad Max: Fury Road",
          year: "2015",
          poster:
            "https://resizing.flixster.com/OlMKHx-awXBsb09-L5jWwTgiFMA=/206x305/v2/https://flxt.tmsimg.com/assets/p10854488_p_v8_ao.jpg",
          raiting: "8.1",
          description:
            "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper and a drifter named Max.",
          watched: true,
          genreId: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("movies", null, {});
  },
};
