import { checkToken } from "../Repository/authorizationRepository.js";

export async function postLikeMiddleware(req, res, next) {
    const {post_id } = req.body;
    const {authorization} = req.headers;
  
    const token = authorization.replace("Bearer ", "");

    try {
     const user = await checkToken(token);
     if (!user) {
        return res.status(409).send("Invalid Token")
     }
  
      res.locals.post_id = post_id;
      res.locals.user_id = user.user_id;
      next();
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  }
  