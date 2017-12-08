const express = require('express');
const controller = require('./event.controller');

const router = express.Router();

router.get('/', controller.getAllList);
router.post('/new',   controller.createEvent);
router.get('/single/:id', controller.singleEvent);
router.put('/single/:id/edit', controller.editEvent);
router.delete('/single/:id/edit', controller.removeEvent);



module.exports = router;
