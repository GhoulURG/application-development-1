let posts = [];
let nextId = 1;

exports.getAllPosts = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const start = (page - 1) * limit;
  const end = start + limit;

  const paginated = posts.slice(start, end);

  res.json({
    data: paginated,
    meta: {
      page,
      limit,
      total: posts.length
    }
  });
};

exports.getPostById = (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({
      error: { code: "POST_NOT_FOUND", message: "Post not found" }
    });
  }
  res.json(post);
};

exports.createPost = (req, res) => {
  const { title, content, authorId } = req.body;

  if (!title || !content || !authorId) {
    return res.status(400).json({
      error: { code: "INVALID_INPUT", message: "Title, content, and authorId are required" }
    });
  }

  const newPost = {
    id: nextId++,
    title,
    content,
    authorId
  };

  posts.push(newPost);

  res.status(201).json(newPost);
};

exports.updatePost = (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({
      error: { code: "POST_NOT_FOUND", message: "Post not found" }
    });
  }

  if (req.body.title) post.title = req.body.title;
  if (req.body.content) post.content = req.body.content;

  res.json(post);
};

exports.deletePost = (req, res) => {
  const index = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({
      error: { code: "POST_NOT_FOUND", message: "Post not found" }
    });
  }

  posts.splice(index, 1);
  res.status(204).send();
};
