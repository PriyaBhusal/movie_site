import {Request , Response} from "express";
import { GenreService } from "../../services";

export class GenreController{
    public constructor(){}
    static async getGenre(req:Request,res:Response):Promise<Response>{
         const users = await new GenreService().getGenre();
                    return res.status(200).json({
                        success:true,
                        status:200,
                        message:'Users fetched successfully.',
                        data:users,
                    });
                }
    }

