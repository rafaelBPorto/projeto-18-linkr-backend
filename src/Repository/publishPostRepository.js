import connectionDb from "../Database/db.js";

export default async function insertPublishPost(userId, link, description) {
    try {
        await connectionDb.query(`
            INSERT INTO posts (link, description, user_id) VALUES( $1, $2, $3)
        `, [link, description, userId]);

        const trends = description.match(/#\w+/g);
        await trends.map((i) =>  connectionDb.query('INSERT INTO trends (trend) VALUES ($1)',
        [i]
        ))
    } catch (error) {
        return error.message;
    }
}