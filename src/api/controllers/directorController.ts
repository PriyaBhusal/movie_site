import {Request , Response} from "express";
import { DirectorService } from "../../services/directorsServices";

export class DirectorController{
    public constructor(){}
    static async getDirector(req:Request,res:Response):Promise<Response>{
         const directors = await new DirectorService().getDirector();
                    return res.status(200).json({
                        success:true,
                        status:200,
                        message:'Genres fetched successfully.',
                        data:directors,
                    });
                }


    //  static async Create(req: Request, res: Response): Promise<Response> {
    //      const {name} = req.body; 
                
                   
              
                
    //              const genreService = new GenreService();
    //              const genre = await genreService.create({name});
                
    //                 return res.status(200).json({
    //                     success: true,
    //                     status: 200,
    //                     message: 'successfull.',
    //                     data: genre,
    //                 });
    //             }

    static async Create(req: Request, res: Response): Promise<Response> {
        const data = req.body; 
               
                
                const director = await new DirectorService().create(data);
               
                   return res.status(200).json({
                       success: true,
                       status: 201,
                       message: 'successfully created.',
                       data:director ,
                   });
               }

    
    static async Update(req:Request,res:Response):Promise<Response>{
        const id = req.params.id as unknown as number;
        const data = req.body;
        const update =await new DirectorService().update(id,data)

        if(update== false)
        {
            throw new Error(`Couldnot update genre with id ${id}`)
        }
         return res.status(200).json({
            success:true,
            status:200,
            message:'updated successfully'
         })
    }

    static async Delete(req:Request,res:Response):Promise<Response>{
        const id = req.params.id as unknown as number;
        await new DirectorService().delete(id)
        return res.status(200).json({
            success:true,
            status:200,
            message:'deleted successfully'
         })
    }

    }

