import { publishPostSchema } from "../Models/publishPostModel.js";

export async function publishPostValidation (req, res, next){

    const post = req.body

    const {error} = publishPostSchema.validate(post, {abortEarly:false});

    if(error){
        const erros = error.details.map((details)=> details.message)
        return res.status(422).send(erros);
    }

    next();
}