const express = require('express');
const controller = require('./trip.controller');

const router = express.Router();

router.get('/trips', controller.getAllList);
router.get('/single/:id', controller.singleTrip);
router.get('/:location', controller.paramsTrip);
router.get('/:category', controller.paramsTrip);


module.exports = router;
