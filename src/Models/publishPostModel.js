import Joi from "joi";

export const publishPostSchema = Joi.object({
    link: Joi.string().uri().required(),
    description: Joi.string().trim()
})