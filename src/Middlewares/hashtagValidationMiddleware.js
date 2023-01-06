

export async function getPostByHashtagMiddleware(req, res, next) {
  const { hashtag } = req.params;

  try {
    if (!hashtag) {
        return res.sendStatus(404);
      }

    res.locals.hashtag = hashtag;
    next();
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

