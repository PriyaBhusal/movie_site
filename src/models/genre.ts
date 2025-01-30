import * as Sequelize from "sequelize";
import {Database} from "../config";
import { GenreModelInterface } from "../interfaces/genreInterface";
const sequelize = Database.sequelize;

const Genre = sequelize.define<GenreModelInterface>("genres",
    {
        id:{
            type:Sequelize.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
        },
        name:{
            type:Sequelize.STRING,
            allowNull:false,
        },
    },
    {
        timestamps:false,
    }
);
export default Genre;