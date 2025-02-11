import { GenreInterface, InputGenreInterface } from "../interfaces";
import Models from "../models";



export class GenreService {
    public async getGenre():Promise<GenreInterface[]>{
        const data = await Models.Genre.findAll();
        return data;
    }

    // public async create(genreData: { name: string }) {
    //     const data = await Models.Genre.create(genreData);
    //     return data;
    // }

    public async create(data:InputGenreInterface):Promise<GenreInterface> {
        const genre = await Models.Genre.create(data);
        return genre;
    }

    public async update(id:number,data:InputGenreInterface):Promise<boolean>{
        const result = await Models.Genre.update(data,{
            where:{
                id:id,
            },
        });
        return result[0] === 0 ? false :true;
    }

    public async delete(id:number)
    {
        const deleted = await Models.Genre.destroy(
            {
                where:{
                    id:id
                }
            }
        )
        return deleted;
        }
}