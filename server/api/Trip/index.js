const express = require('express');
const controller = require('./trip.controller');
const upload = require('../../config/multer');
const router = express.Router();

router.get('/', controller.getAllList);
router.get('/single/:id', controller.singleTrip);
router.post('/new-trip', upload.single('file'),  controller.createTrip);

router.put('/single/:id/edit', upload.single('file'), controller.editTrip);
router.delete('/single/:id/delete', controller.removeTrip);


module.exports = router;
