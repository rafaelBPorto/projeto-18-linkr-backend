import { postLike } from "../Repository/likeRepository.js";


export async function postLikeController(req, res) {

    const {post_id, user_id} = res.locals;

    
    try {
        await postLike(post_id, user_id);

        return res.status(200).send("Você curtiu o post");
    } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
}