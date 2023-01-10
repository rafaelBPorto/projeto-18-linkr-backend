import connectionDb from "../Database/db.js";

export function getPostByHashtagRepository (hashtag) {
    return connectionDb.query(`SELECT
    posts.id, posts.link, posts.description, posts.user_id, posts.created_at,
    users.name, users.photo
    FROM posts
    JOIN users ON users.id = posts.user_id
    WHERE description ILIKE $1 OR
    description ILIKE $2`,
    [`%#${hashtag} %`, `%#${hashtag}`])
}


export function getTopTrendsRepository () {
    return connectionDb.query(`SELECT COUNT(trend), trend
    FROM trends
    GROUP BY (trend)
    ORDER BY count(trend) DESC
    LIMIT 100`);
}