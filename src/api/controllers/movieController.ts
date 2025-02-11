import {Request , Response} from "express";
import {MovieService} from "../../services/moviesService";

export class MovieController{
    public constructor(){}
    static async getMovie(req:Request,res:Response):Promise<Response>{
        console.log(req.query);
        const page = req.query.page ? +req.query.page:1;
        const limit = req.query.limit ?  +req.query.limit:2;
        //calculate your offset based on the page nummber and limit 
        //offset based pagination
        const offset = (page-1)*limit;
        const searchQuery = req.query.searchQuery as string

         const directors = await new MovieService().getMovie({
                offset:offset,
                limit:limit,
                order:'id',
                sort:'asc',
                searchQuery:searchQuery
            }
         );
                    return res.status(200).json({
                        success:true,
                        status:200,
                        message:'Movies fetched successfully.',
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
               
                
                const director = await new MovieService().create(data);
               
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
        const update =await new MovieService().update(id,data)

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
        await new MovieService().delete(id)
        return res.status(200).json({
            success:true,
            status:200,
            message:'deleted successfully'
         })
    }

    }

