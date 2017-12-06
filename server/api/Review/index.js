const router = require('express').Router();
const controller = require('./review.controller');

router.get('/:id/new', controller.newReviewGet);
router.post('/:id/new', controller.newReviewPost);

module.exports = router;
