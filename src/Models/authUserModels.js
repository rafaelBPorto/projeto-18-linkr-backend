import joi from "joi";

export const signUpModel = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
    username: joi.string().required(),
    pictureUrl: joi.string().pattern(new RegExp("^https?:\/\/(.*)")).required()
});

export const signInModel = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required()
});
