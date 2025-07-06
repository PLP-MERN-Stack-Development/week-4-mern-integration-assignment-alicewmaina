const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const auth = require('../middleware/auth');
const upload = require('../utils/upload');
const { body } = require('express-validator');
const commentsRouter = require('./comments');

router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.post('/',
  auth,
  upload.single('image'),
  body('title').notEmpty().withMessage('Title is required'),
  body('content').notEmpty().withMessage('Content is required'),
  body('category').notEmpty().withMessage('Category is required'),
  postController.createPost
);
router.put('/:id',
  auth,
  upload.single('image'),
  body('title').notEmpty().withMessage('Title is required'),
  body('content').notEmpty().withMessage('Content is required'),
  body('category').notEmpty().withMessage('Category is required'),
  postController.updatePost
);
router.delete('/:id', auth, postController.deletePost);

// Nested comments routes
router.use('/:postId/comments', commentsRouter);

module.exports = router;
