require('dotenv').config();
const express = require('express');
const controller = require('./trip.controller');
const router = express.Router();
const mongoose = require('mongoose');
///DESDE AQUI///
const multer = require('multer');
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'folder-name',
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
  photoName = new Date().getTime();
    cb(undefined, photoName);
  }
});

var upload = multer({ storage: storage });

router.get('/', controller.getAllList);
router.post('/new-trips', upload.single('file'), controller.createTrip);
router.get('/single/:id', controller.singleTrip);

router.put('/single/:id/edit', controller.editTrip);
router.delete('/single/:id/delete', controller.removeTrip);


module.exports = router;
