const express = require('express');
const controller = require('./trip.controller');
const router = express.Router();
const mongoose = require('mongoose');
const upload = require('../../config/multer');
const multer = require('multer');



router.get('/', controller.getAllList);
router.post('/new-trips', upload.single('file'), controller.createTrip);
router.get('/single/:id', controller.singleTrip);

router.put('/single/:id/edit', controller.editTrip);
router.delete('/single/:id/delete', controller.removeTrip);


module.exports = router;
