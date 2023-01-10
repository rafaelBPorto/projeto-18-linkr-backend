import connectionDb from "../Database/db.js";

export default async function insertPublishPost(userId, link, description, metaData) {

    const { linkTitle, linkDescription, linkUrl, linkImage } = metaData
    try {
        await connectionDb.query(`
            INSERT INTO posts 
            (link, description, user_id, link_title, link_description, link_url, link_image) 
            VALUES( $1, $2, $3, $4, $5, $6, $7)
        `, [link, description, userId, linkTitle, linkDescription, linkUrl, linkImage]);

        const trends = description.match(/#\w+/g);
        console.log(trends)
        if (trends) {
            await trends.map((i) => connectionDb.query('INSERT INTO trends (trend) VALUES ($1)', [i]))
        }
    } catch (error) {
        return error.message;
    }
}