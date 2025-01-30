import { MovieInterface, InputMovieInterface } from "../interfaces/movieInterface";
import Models from "../models";



export class MovieService {
    public async getMovie():Promise<MovieInterface[]>{
        const data = await Models.Movie.findAll();
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