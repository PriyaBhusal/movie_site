import Models from "../models";
import { UserInterface,InputUserInterface } from "../interfaces/userInterface"; 

export class authService{
public async findOne(email:string){
    const auth = await Models.User.findOne({
        where:{
            email:email,
        },
    }
    );
    return auth;
}
}