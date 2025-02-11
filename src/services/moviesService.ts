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
        const data = await Models.Movie.findAll({
            offset:args.offset,
            limit:args.limit,
            order:[[args.order,args.sort]]
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