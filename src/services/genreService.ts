import Models from "../models";



export class GenreService {
    public async getGenre(){
        const data = await Models.Genre.findAll();
        return data;
    }

    // public async create(){
            
    //     const data = await Models.Genre.create();
    //     return data;
    // }
}