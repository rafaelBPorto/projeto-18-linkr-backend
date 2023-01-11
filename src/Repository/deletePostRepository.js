import connectionDb from "../Database/db.js";

export default async function deletePostDB(postId, userId){

    const authUser = await connectionDb.query(`SELECT user_id FROM posts WHERE id = $1`, [postId])

    if(authUser.rows[0].user_id === userId){
        await connectionDb.query(`DELETE FROM likes WHERE post_id = $1;`, [postId]);
        await connectionDb.query(`DELETE FROM posts WHERE id = $1 and user_id=$2;`, [postId, userId]);
        
        return false
    }
        else return true 
}
