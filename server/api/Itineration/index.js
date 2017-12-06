const express = require('express');
const controller = require('./itineration.controller');
const upload = require('../../config/multer');

var router = express.Router();

router.get('/itineration', controller.getAllItineration);
router.post('/new-tineration', upload.single('file'),  controller.createItineration);
router.put('/single/:id/edit', upload.single('file'), controller.editItineration);
router.delete('/single/:id/edit', controller.removeItineration);


module.exports = router;
