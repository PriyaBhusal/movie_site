import Models from "../models";
import { UserInterface,InputUserInterface } from "../interfaces/userInterface"; 

export class userService{
public async findOne(email:string): Promise<UserInterface | null>{
    const user = await Models.User.findOne({
        where:{
            email:email,
        },
    }
    );
    return user;
}

public async create(data:InputUserInterface):Promise<UserInterface>{
    const users = await Models.User.create(data);
    return users;

}
}





