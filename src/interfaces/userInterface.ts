import * as Sequelize from 'sequelize';
import {RoleEnum} from "../enums"
export interface InputUserInterface{
    name:string;
    email:string;
    password:string;
    role:RoleEnum;
}

export interface UserInterface extends InputUserInterface{
    id:number;
}

export interface UserModelInterface 
extends Sequelize.Model<UserInterface,Partial<InputUserInterface>>,UserInterface{}