const Comment = require('../models/Comment');

exports.createComment = async (req, res, next) => {
  try {
    const { content } = req.body;
    const comment = await Comment.create({
      post: req.params.postId,
      author: req.user.id,
      content,
    });
    res.status(201).json(comment);
  } catch (err) {
    next(err);
  }
};

exports.getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ post: req.params.postId }).populate('author', 'username');
    res.json(comments);
  } catch (err) {
    next(err);
  }
};
