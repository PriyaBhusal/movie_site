import Joi from 'joi';
const createDirector = Joi.object({
    name:Joi.string().label('Name').required(),
    country:Joi.string().label('Country').required(),
    DOB:Joi.date().label('DOB').required()
});

export{createDirector};