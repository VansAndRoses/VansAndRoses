const express = require('express');
const controller = require('./auth-routes');
const router = express.Router();

router.post('/signup', controller.signUp);
router.post('/login', controller.logIn);
router.get('/logout', controller.logOut);
router.get('/loggedIn', controller.loggedIn);
module.exports = router;
