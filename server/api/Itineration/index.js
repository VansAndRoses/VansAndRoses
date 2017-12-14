const express = require('express');
const controller = require('./itineration.controller');
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



var router = express.Router();

router.get('/', controller.getAllItineration);
router.post('/new-itineration/:id', upload.single('file'), controller.createItineration);
router.put('/single/:id/edit', controller.editItineration);
router.get('/single/:id', controller.singleItineration);
router.delete('/single/:id/delete', controller.removeItineration);


module.exports = router;
