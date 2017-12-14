const express = require('express');
const controller = require('./auth-routes');
const Usercontroller = require('./user.controller');
const upload = require('../../config/multer');
const router = express.Router();
const multer = require('multer');

router.post('/signup', upload.single('file'), controller.signUp);
router.post('/login', controller.logIn);
router.get('/logout', controller.logOut);
router.get('/loggedIn', controller.loggedIn);
router.get('/profile', Usercontroller.profileGet);
router.get('/profile/:id', Usercontroller.profileIdGet);
router.get('/:id/edituser', Usercontroller.editGet);
router.post('/:id/edituser', Usercontroller.editPost);
module.exports = router;
