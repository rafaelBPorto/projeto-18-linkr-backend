import { signUpModel } from "../Models/authUserModels.js";
import { userEmail } from "../Repository/authUserRepository.js";

export async function signUpMiddleware(req, res, next) {
  const { username, email, password, pictureUrl } = req.body;

  const validation = signUpModel.validate(req.body, {abortEarly: false});


  if (validation.error) {
    const errors = validation.error.details.map((detail) => detail.message);
    return res.status(400).send({ message: errors });
  }

  try {
    const userExists = await userEmail(email);
    if (userExists.rows[0]) {
      return res.status(409).send("E-mail já cadastrado");
    }

    next();
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}