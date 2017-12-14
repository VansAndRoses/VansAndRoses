const express = require('express');
const controller = require('./itineration.controller');
const upload = require('../../config/multer');
const multer = require('multer');

var router = express.Router();

router.get('/', controller.getAllItineration);
router.post('/new-itineration/:id', upload.single('file'), controller.createItineration);
router.put('/single/:id/edit', controller.editItineration);
router.get('/single/:id', controller.singleItineration);
router.delete('/single/:id/delete', controller.removeItineration);


module.exports = router;
