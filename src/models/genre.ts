import * as Sequelize from "sequelize";
import {Database} from "../config";
const sequelize = Database.sequelize;

const Genre = sequelize.define<any>("genres",
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