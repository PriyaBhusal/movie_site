import * as Sequelize from "sequelize";
import { Database } from "../config";
import { MovieModelInterface } from "../interfaces/movieInterface";

const sequelize = Database.sequelize;

const Movie = sequelize.define<MovieModelInterface>(
  "movies",
  {
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
        model: "create-directors", 
        key: "id",
      },
      onUpdate: "CASCADE",  // Optional: define what happens on update
      onDelete: "SET NULL",
    },
    actors: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    genreId: {
      type: Sequelize.INTEGER,
      references: {
        model: "genres", 
        key: "id",
      },
      onUpdate: "CASCADE",  // Optional: define what happens on update
      onDelete: "SET NULL",
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
      type: Sequelize.INTEGER,
      defaultValue:0,
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
  },
  {
    timestamps: false, 
  }
);

export default Movie;
