import { signInModel, signUpModel } from "../Models/authUserModels.js";
import { userEmail } from "../Repository/authUserRepository.js";
import bcrypt from "bcrypt";

export async function signUpMiddleware(req, res, next) {
  const { email } = req.body;

  const validation = signUpModel.validate(req.body, { abortEarly: false });

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

export async function signInMiddleware(req, res, next) {
  const { email, password } = req.body;

  const validation = signInModel.validate(req.body, { abortEarly: false });

  if (validation.error) {
    const errors = validation.error.details.map((detail) => detail.message);
    return res.status(400).send({ message: errors });
  }

  try {
    const userExists = await userEmail(email);
    if (!userExists.rows[0]) {
      return res.status(409).send("E-mail não cadastrado");
    }

    const passwordIsCorrect = await bcrypt.compare(
      password,
      userExists.rows[0].password
    );

    if (!passwordIsCorrect) {
      return res.status(401).send("Senha incorreta");
    }
    res.locals.id = userExists.rows[0].id;
    next();
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
