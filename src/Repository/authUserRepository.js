
import connectionDb from "../Database/db.js";


export function userEmail(email) {
    return connectionDb.query("SELECT * FROM users WHERE email=$1", [email]);
  }


export function signUpUser(email, username, hashPassword, pictureUrl) {
  return connectionDb.query(
    `INSERT INTO users (name, email, photo, password) VALUES ($1, $2, $3, $4)`,
    [username, email, pictureUrl, hashPassword]
  );
}