import {  getPostByHashtagRepository } from "../Repository/hashtagRepository.js";


export async function getPostByHashtagController (req, res) {
    const {hashtag} = res.locals;
    
    try {
       const response = await getPostByHashtagRepository(hashtag);
       
       if (!response.rows[0]) {
        return res.sendStatus(404);
       }
       return res.send(response.rows);
    } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
}