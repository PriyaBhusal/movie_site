import * as Sequelize from 'sequelize';
import {Database} from "../config";
import {DirectorModelInterface} from "../interfaces/directorInterface";
const sequelize = Database.sequelize;

const Director =  sequelize.define<DirectorModelInterface>("create-directors",{
        id:{
           type: Sequelize.INTEGER,
           allowNull:false,
           autoIncrement:true,  
            primaryKey:true,
        },
        name:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        country:{
            type:Sequelize.STRING,
           
        },
        DOB:{
            type:Sequelize.DATE,
            
        }
    },
    {
        timestamps:false,
    }
);
export default Director;