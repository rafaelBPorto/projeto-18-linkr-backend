import linkMetaData from "../helpers/linkMetaData.js";
import deletePostDB from "../Repository/deletePostRepository.js";
import getPostTimeline from "../Repository/getPostsTimelineRepository.js";
import insertPublishPost from "../Repository/publishPostRepository.js";

export async function timelineController(req, res) {

    try {
        const posts = await getPostTimeline();
        console.log(posts.rows)
        res.send(posts.rows);
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

export async function deletePostController(req, res){
    const {postId} = req.body;
    const userId = res.locals.session.user_id
    
    try {
        const unauthorized = await deletePostDB(postId, userId)
        if(unauthorized){
            return res.sendStatus(401)
        }
    } catch (error) {
        res.status(500).send(error.message)
    }

    res.sendStatus(201);
}