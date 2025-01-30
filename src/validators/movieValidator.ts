import Joi from 'joi';

const createMovie = Joi.object({
    title:Joi.string().label('Title').required(),
    imdbScore:Joi.number().label('imdbscore').required(),
    directorId:Joi.number().label('directorId').required(),
    actors:Joi.string().label('Actors').required(),
    genreId:Joi.number().label('genreId').required(),
    description:Joi.string().label('description').required(),
    thumbnail:Joi.string().label('thumnail').required(),
    embedVideoUrl:Joi.string().label('embedVideoUrl').required(),
    avgRatings:Joi.number().label('avg').required(),
    totalRatings:Joi.number().label('avg').required(),
    duration:Joi.number().label('avg').required(),
    releasedAt:Joi.date().label('avg').required(),

});

export{createMovie};