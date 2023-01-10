import bcrypt from "bcrypt";
import { nanoid } from "nanoid";
import { createUserSession, signUpUser, updateUserSession, userSession } from "../Repository/authUserRepository.js";

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


export async function signInController( req, res) {
    const { id, name, photo } = res.locals.userInfo;
    const token = nanoid();


    try {
        const userSessionExists = await userSession(id);
        const userInfo = {id: id, name: name, photo: photo, token: token}

        if (!userSessionExists.rows[0]) {
          await createUserSession(id, token);
    
          return res.status(200).send(userInfo);
        }
    
        await updateUserSession(id, token);
  
        return res.status(200).send(userInfo);
      } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
}
