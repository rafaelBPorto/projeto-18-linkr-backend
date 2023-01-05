export async function timelineController(req, res){
    const userId = res.locals.session.user_id
    console.log("user id: ", userId)

    res.send(`userId ${userId}`);
}