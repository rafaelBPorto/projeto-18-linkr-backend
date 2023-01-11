import connectionDb from "../Database/db.js";

// export function getPostByHashtagRepository (hashtag) {
//     return connectionDb.query(`SELECT
//     posts.*,
//     users.name, users.photo
//     ARRAY_AGG(likes.user_id)
//     FROM posts
//     JOIN users ON users.id = posts.user_id
//     JOIN likes ON likes.post_id = posts.id
//     WHERE description ILIKE $1 OR
//     description ILIKE $2`,
//     [`%#${hashtag} %`, `%#${hashtag}`])
// }

export function getPostByHashtagRepository (hashtag) {
    return connectionDb.query(`
    select posts.*,
    ARRAY_AGG(likes.user_id)  AS "likedBy" ,
    users.name, users.photo from posts
    LEFT JOIN likes ON posts.id = likes.post_id
    JOIN users ON posts.user_id = users.id
    WHERE posts.description ILIKE $1 OR
    posts.description ILIKE $2
    GROUP by users.id,users.name, users.email, users.photo, users.password, users.created_at,
    posts.id, posts.link, posts.description, posts.user_id, posts.created_at, posts.link_title, posts.link_description, posts.link_url, posts.link_image
;`,
    [`%#${hashtag} %`, `%#${hashtag}`])
}


export function getTopTrendsRepository () {
    return connectionDb.query(`SELECT COUNT(trend), trend
    FROM trends
    GROUP BY (trend)
    ORDER BY count(trend) DESC
    LIMIT 100`);
}

