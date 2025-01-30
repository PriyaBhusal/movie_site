import{Request,Response} from 'express';
import Models from '../../models';
export class AuthController{
    public static async signup(req:Request,res:Response):Promise<Response>{
        const data = req.body;
        const user = await Models.User.findOne()
        if(!user){
            res.status(401).json({message:'Failed authentication'})
        }
        else{

        }  

        return res.status(200).json({message:'Signup successfull.You can proceed to login.'})
    }
}