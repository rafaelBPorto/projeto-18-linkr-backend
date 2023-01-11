import { deletePostLike, postLike } from "../Repository/likeRepository.js";


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

export async function deleteLikeController(req, res) {

    const {post_id, user_id} = res.locals;

    console.log(post_id)
    console.log(user_id)
    try {
        await deletePostLike(post_id, user_id);

        return res.status(200).send("Você descurtiu o post");
    } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
}