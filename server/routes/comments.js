const express = require('express');
const router = express.Router({ mergeParams: true });
const commentController = require('../controllers/commentController');
const auth = require('../middleware/auth');

router.get('/', commentController.getComments);
router.post('/', auth, commentController.createComment);

module.exports = router;
