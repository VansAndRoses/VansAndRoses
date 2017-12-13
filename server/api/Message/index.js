const router = require('express').Router();
const controller = require('./message.controller');

router.get('/', controller.messageGet);
router.post('/:id/new', controller.newMessagePost);

module.exports = router;
