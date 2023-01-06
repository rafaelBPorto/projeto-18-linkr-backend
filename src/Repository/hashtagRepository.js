import { hash } from "bcrypt";
import connectionDb from "../Database/db.js";

export function getHashtagByName (hashtag) {
    return connectionDb.query(`SELECT * FROM posts WHERE description ILIKE $1`,
    [`%#${hashtag}%`])
}