import connectionDb from "../Database/db.js";

export function postLike (post_id, user_id) {
    return connectionDb.query(`INSERT INTO likes (post_id, user_id) 
    VALUES ($1, $2)`,
    [post_id, user_id])
}


