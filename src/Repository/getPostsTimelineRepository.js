import connectionDb from "../Database/db.js";

export default async function getPostTimeline(){
    const posts = await connectionDb.query(
    `select posts.*,
    JSON_AGG(likes.user_id)  AS "likedById",
    users.name, users.photo from posts
    LEFT JOIN likes ON posts.id = likes.post_id
    JOIN users ON posts.user_id = users.id
    GROUP by users.id,users.name, users.email, users.photo, users.password, users.created_at,
    posts.id, posts.link, posts.description, posts.user_id, posts.created_at, posts.link_title, posts.link_description, posts.link_url, posts.link_image
    ORDER BY posts.id DESC LIMIT 20
;`)
    return posts;
}