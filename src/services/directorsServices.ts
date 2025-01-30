import { DirectorInterface,InputDirectorInterface  } from "../interfaces/directorInterface";
import Models from "../models";


export class DirectorService {
    public async getDirector(){
        const data = await Models.Director.findAll();
        return data;
    }

    // public async create(genreData: { name: string }) {
    //     const data = await Models.Genre.create(genreData);
    //     return data;
    // }

   

    public async create(data:InputDirectorInterface):Promise<DirectorInterface> {
        const genre = await Models.Director.create(data);
        return genre;
    }

    public async update(id:number,data:InputDirectorInterface):Promise<boolean>{
        const result = await Models.Director.update(data,{
            where:{
                id:id,
            },
        });
        return result[0] === 0 ? false :true;
    }

    public async delete(id:number)
    {
        const deleted = await Models.Director.destroy(
            {
                where:{
                    id:id
                }
            }
        )
        return deleted;
    }
}