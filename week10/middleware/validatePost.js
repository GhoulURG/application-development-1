module.exports = function validatePost(req, res, next) {
  const { title, content, authorId } = req.body;

  if (!title || !content || !authorId) {
    return res.status(400).json({
      error: {
        code: "INVALID_INPUT",
        message: "Title, content, and authorId are required"
      }
    });
  }

  next();
};
