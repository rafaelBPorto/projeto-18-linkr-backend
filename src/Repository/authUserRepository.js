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

export function userSession(id) {
  return connectionDb.query(`SELECT * FROM sessions WHERE "user_id" = $1`, [
    id,
  ]);
}

export function createUserSession(id, token) {
  return connectionDb.query(
    `INSERT INTO sessions (user_id, token) VALUES ($1, $2)`,
    [id, token]
  );
}

export function updateUserSession(id, token) {
  return connectionDb.query(
    `UPDATE sessions SET token = $1 WHERE "user_id" = $2`,
    [token, id]
  );
}
