const express = require('express');
const controller = require('./review.controller');

const router = express.Router();

router.get('/:id/new', controller.newReviewGet);
router.post('/:id/new', controller.newReviewPost);

module.exports = router;
