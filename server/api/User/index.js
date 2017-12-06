const router = require('express').Router();
const controller = require('./user.controller');

router.get('/profile', controller.profileGet);
router.get('/profile/:id', controller.profileIdGet);
router.get('/:id/edituser', controller.editGet);
router.post('/:id/edituser', controller.editPost);

module.exports = router;
