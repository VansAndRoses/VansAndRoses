const express = require('express');
const controller = require('./event.controller');

const router = express.Router();

router.get('/', controller.getAllList);
router.post('/new', upload.single('file'),  controller.createEvent);
router.get('/single/:id', controller.singleEvent);
router.put('/single/:id/edit', upload.single('file'), controller.editEvent);
router.delete('/single/:id/edit', controller.removeEvent);
router.get('/:location', controller.listEvents);


module.exports = router;
