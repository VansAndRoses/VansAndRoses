mongoose = require('mongoose');
itinerationModel = require('./itineration.model');
tripModel = require('../Trip/Trip.model');

//Get Plates
exports.getAllItineration = function (req,res,next){
  itinerationModel.find()
  .then( itinerationList => {res.status(200).json(itinerationList);})
  .reject(err => { res.status(500).json(err);});
};

exports.singleItineration = function(req,res,next){
  itinerationModel.findById(req.params.id)
  .then(singleItineration => {res.status(200).json(singleItineration);})
  .reject(err => { res.status(500).json(err);});
};

// POST
exports.createItineration = function(req, res, next) {
  console.log('Req.params =>');
  console.log(req.params);
  const newItineration = new itinerationModel({
    title:       req.body.title,
    description:   req.body.description,
    creator:       req.body.creator,
    locationOfStart:    req.body.locationOfStart,
    locationOfEnd:    req.body.locationOfEnd,
    placeToSleep:      req.body.placeToSleep,
    placeToEat:      req.body.placeToEat,
    washingPlace:    req.body.washingPlace,
    photo:           req.body.photo,
  });

  console.log("Itineration created");
	newItineration.save()
    .then(newItin => {
      tripModel.findByIdAndUpdate(req.params.id, {$push: {itinerations: newItin._id}}, {new: true})
        .then( trip => res.status(200).json(trip));
    })
    .catch(err => res.status(500).json({ message: 'Something went wrong'}));
};

exports.editItineration = function(req, res ,next) {
  const updates = {
    title,
    description,
    locationOfStart,
    locationOfEnd,
    placeToSleep,
    placeToEat,
    washingPlace,
    photo,
  } = req.body;
  itinerationModel.findByIdAndUpdate(req.params.id, updates, (err) => {
    if (err) {
      return res.status(400).json({ message: "Unable to update Itineration", error});
    }
    res.status(500).json({ message: 'Itineration updated successfully'});
  });
};

exports.removeItineration = function (req, res) {
    itinerationModel.findByIdAndRemove(req.params.id)
      .then((list) => res.status(202).json({ message: 'Itineration removed successfully' }))
      .catch(err => res.status(500).json({ message: 'impossible to remove the Itineration', error: err }));
};
