import connectionDb from "../Database/db.js";

export default async function getAllUsersRepository(){
    const users =  await connectionDb.query(
    `SELECT users.name, users.photo from USERS;`)
    console.log(users);
    return users.rows;
}