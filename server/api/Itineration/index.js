const express = require('express');
const controller = require('./itineration.controller');
const upload = require('../../config/multer');

var router = express.Router();

router.get('/', controller.getAllItineration);
router.post('/new-itineration', upload.single('file'),  controller.createItineration);
router.put('/single/:id/edit', upload.single('file'), controller.editItineration);
router.get('/single/:id', controller.singleItineration);
router.delete('/single/:id/delete', controller.removeItineration);


module.exports = router;
