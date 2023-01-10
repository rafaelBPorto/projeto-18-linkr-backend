import linkMetaData from "../helpers/linkMetaData.js";
import getPostTimeline from "../Repository/getPostsTimelineRepository.js";
import insertPublishPost from "../Repository/publishPostRepository.js";

export async function timelineController(req, res) {
    const session = res.locals.session;
    try {
        const posts = await getPostTimeline();
        const link = posts.rows.map(post=> post.link)
        const metadataPromises = link.map(async (url)=> await linkMetaData(url))
        const metaData = await Promise.all(metadataPromises)
        res.send(metaData);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function publishPostController(req, res) {
    const userId = res.locals.session.user_id;
    const { link, description } = req.body;
    const metaData = await linkMetaData(link)
    console.log(metaData);
    try {
        const errorPost = await insertPublishPost(userId, link, description, metaData)
        if (errorPost) {
            return res.status(500).send(errorPost);
        }
        res.sendStatus(201);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}