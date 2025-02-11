import {Response,NextFunction} from 'express';
import { jwtSecret } from '../config';
import jwt from 'jsonwebtoken';
import {CustomRequestInterface} from '../interfaces/requestInterface'
import { UserInterface } from '../interfaces';
import { RoleEnum } from '../enums';

export class Guard{
    public static grantAccess(req:CustomRequestInterface,res:Response,next:NextFunction){
        //fetch access token from the req.headers
        const accessToken = req.headers.authorization?.split(" ")[1];
        console.log(accessToken);
        //check if access token exists
        if(!accessToken){
            return res.status(500).json({
                success:false,
                message:"Please provide an access token with request headers "
            })
        }
    
        //decode the provided access token

        const decodedToken = jwt.verify(accessToken,jwtSecret)

        //if(invalid case token)return error message response
        if(!decodedToken){
            return res.status(500).json({
                success:false,
                message:"Invalid or expired access token"
            })
        }

        //if(valid access token ) next()
        req.user = decodedToken as UserInterface;
        next();
    }

public static grantRole(role: string) {
    return (req: CustomRequestInterface, res: Response, next: NextFunction) => {
        console.log(req.user)
        if (req.user.role === role) {
           next();
        }else{
            return res.status(403).json({
                success: false,
                message: "Unauthorized"
            });
        }
    };
}
}
