import connectionDb from "../Database/db.js";

export default async function getPostTimeline(){
    const posts = await connectionDb.query(`SELECT * FROM posts ORDER BY created_at DESC LIMIT 20;`)
    return posts;
}