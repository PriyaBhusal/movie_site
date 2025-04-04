import {Request , Response} from "express";
import { GenreService } from "../../services";

export class GenreController{
    public constructor(){}
    static async getGenre(req:Request,res:Response):Promise<Response>{
         const genres = await new GenreService().getGenre();
                    return res.status(200).json({
                        success:true,
                        status:200,
                        message:'Genres fetched successfully.',
                        data:genres,
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
               
                
                const genre = await new GenreService().create(data);
               
                   return res.status(200).json({
                       success: true,
                       status: 201,
                       message: 'successfully created.',
                       data: genre,
                   });
               }

    
    static async Update(req:Request,res:Response):Promise<Response>{
        const id = req.params.id as unknown as number;
        const data = req.body;
        const update =await new GenreService().update(id,data)

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
        await new GenreService().delete(id)
        return res.status(200).json({
            success:true,
            status:200,
            message:'deleted successfully'
         })
    }

    }

