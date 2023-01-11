import connectionDb from "../Database/db.js";

export function postLike (post_id, user_id) {
    return connectionDb.query(
        `INSERT INTO likes (post_id, user_id) 
        VALUES ($1, $2)`,
        [post_id, user_id])
}

export function deletePostLike (post_id, user_id) {
    return connectionDb.query(
        `DELETE FROM likes
        WHERE post_id = $1
        AND user_id= $2`, [post_id, user_id]
    )
}

