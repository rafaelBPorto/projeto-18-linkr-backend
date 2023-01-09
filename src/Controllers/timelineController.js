import getPostTimeline from "../Repository/getPostsTimelineRepository.js";
import insertPublishPost from "../Repository/publishPostRepository.js";

export async function timelineController(req, res) {
    const session = res.locals.session;
    try {
        const posts = await getPostTimeline();
        res.send(posts.rows);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function publishPostController(req, res) {
    const userId = res.locals.session.user_id;
    const { link, description } = req.body;
    try {
        const errorPost = await insertPublishPost(userId, link, description)
        if (errorPost) {
            return res.status(500).send(errorPost);
        }
        res.sendStatus(201);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}