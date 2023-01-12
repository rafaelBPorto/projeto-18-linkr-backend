import connectionDb from "../Database/db.js";

export default async function getPostTimeline(){
    const posts = await connectionDb.query(`SELECT posts.*, users.name AS user_name, users.photo AS user_photo FROM posts JOIN users ON user_id = users.id ORDER BY posts.id DESC LIMIT 20`)
    return posts;
}