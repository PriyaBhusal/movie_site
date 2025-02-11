import * as Sequelize from 'sequelize';
import {Database} from "../config";
import {UserModelInterface} from "../interfaces/userInterface";
import { RoleEnum } from '../enums';
const sequelize = Database.sequelize;

const User =  sequelize.define<UserModelInterface>("users",{
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
        email:{
            type:Sequelize.STRING,
            allowNull:false,
            unique:true,
           
        },
        password:{
            type:Sequelize.STRING,
            allowNull:false,
            
        },
        role:{
            type:Sequelize.ENUM(RoleEnum.admin,RoleEnum.user),
            allowNull:false,
            defaultValue:RoleEnum.user
        }
    },
    {

        // tableName: 'user'
        timestamps:false,
    }
);
export default User;