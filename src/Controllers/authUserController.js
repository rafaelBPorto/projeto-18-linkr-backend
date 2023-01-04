import bcrypt from "bcrypt";
import { signUpUser } from "../Repository/authUserRepository.js";

export async function signUpController(req, res) {
  const { username, email, password, pictureUrl } = req.body;

  try {
    const hashPassword = bcrypt.hashSync(password, 7);
    await signUpUser(email, username, hashPassword, pictureUrl);

    return res.sendStatus(201);
  } catch (err) {
    return res.sendStatus(500);
  }
}