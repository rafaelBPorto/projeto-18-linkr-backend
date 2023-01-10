import connectionDb from "../Database/db.js";

export default async function getPostTimeline(){
    const posts = await connectionDb.query(`SELECT * FROM posts ORDER BY id DESC LIMIT 20;`)
    return posts;
}