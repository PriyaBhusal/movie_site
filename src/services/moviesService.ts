import { MovieInterface, InputMovieInterface,ArgsMovieInterface } from "../interfaces/movieInterface";
import Models from "../models";
import {Op} from 'sequelize';



export class MovieService {
    public async getMovie(args:ArgsMovieInterface):Promise<MovieInterface[]>{

        let where;
        if(args.searchQuery){
            where={
                title:{
                    [Op.like]:`%${args.searchQuery}%`
                }
            }
        }

        if(args.category){
            switch(args.category){
                case 'latest':
                    const date = '2024-01-01'
                    where={
                        ...where,
                        releasedAt:{
                            [Op.gt]:date,
                        }
                    }
                    break;
                    case 'top-rated':
                        const baseRating = '8.00'
                        where={
                            ...where,
                            avgRatings:{
                                [Op.gte]:baseRating,
                            }
                        }
                        break;
                    case 'popular':
                        const baseImdbScore = '7.00'
                        where = {
                            ...where,
                            imdbScore:{
                                [Op.gte]:baseImdbScore
                            }
                        }
                        break;
            }
        }

        if(args.genreId){
            where={
                ...where,
                genreId:parseInt(args.genreId)
            }
        }

        if(args.searchQuery){
            where={
                title:{
                    [Op.like]:`%${args.searchQuery}%`
                }
            }
        }
        const data = await Models.Movie.findAll({
            offset:args.offset,
            limit:args.limit,
            order:[[args.order,args.sort]],
            where,
        });
        return data;
    }

    // public async create(genreData: { name: string }) {
    //     const data = await Models.Genre.create(genreData);
    //     return data;
    // }

    public async create(data:InputMovieInterface):Promise<MovieInterface> {
        const genre = await Models.Movie.create(data);
        return genre;
    }

    public async update(id:number,data:InputMovieInterface):Promise<boolean>{
        const result = await Models.Movie.update(data,{
            where:{
                id:id,
            },
        });
        return result[0] === 0 ? false :true;
    }

    public async delete(id:number)
    {
        const deleted = await Models.Movie.destroy(
            {
                where:{
                    id:id
                }
            }
        )
        return deleted;
    }
}