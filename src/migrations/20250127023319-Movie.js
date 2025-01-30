'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movies', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imdbScore: {
        type: Sequelize.DECIMAL(2,1),
        defaultValue:0.0,
        allowNull: false,
      },
      directorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'create-directors',
          key: 'id',
        },
      },
      actors: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      genreId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'genres',
          key: 'id',
        },
      },
      description: {
        type: Sequelize.TEXT,
       
      },
      thumbnail: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      embedVideoUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      avgRatings: {
        type: Sequelize.DECIMAL(11,10),
        defaultValue:0.0,
        allowNull: false,
      },
      totalRatings: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        allowNull: false,
      },
      duration: {
        type: Sequelize.STRING,
        
      },
      releasedAt: {
        type: Sequelize.DATE,
       
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movies');
  },
};
