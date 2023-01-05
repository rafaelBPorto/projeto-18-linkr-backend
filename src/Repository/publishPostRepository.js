import connectionDb from "../Database/db.js";

export default async function insertPublishPost(userId, link, description) {
    try {
        await connectionDb.query(`
            INSERT INTO posts (link, description, user_id) VALUES( $1, $2, $3)
        `, [link, description, userId])
    } catch (error) {
        return error.message;
    }
}