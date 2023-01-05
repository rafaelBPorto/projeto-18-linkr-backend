import { checkToken } from "../Repository/authorizationRepository.js";

export async function authorizationToken(req, res, next) {
    const authorization = req.headers.authorization;


    const token = authorization?.replace("Bearer ", "");
    console.log(token)
    if (!token) {
        return res.status(401).send("token don't finded");
    }

    try {
        const session = await checkToken(token);

        if (!session) {
            return res.status(401).send("Invalid token");
        }

        res.locals.session = session
    } catch (error) {
        res.status(500).send(error.message);
    }

    next();
}