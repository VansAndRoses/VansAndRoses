const tripModel = require('./Trip.model');

//Get trips
exports.getAllList = function (req,res,next){
  tripModel.find()
  .then( tripList => {res.status(200).res.json(tripList);})
  .reject(err => { res.status(500).json(err)});
};

exports.paramsTrip = function(req,res, next){
  tripModel.find({location: req.params.location, category: req.params.category})
  .then( tripList => {res.status(200).res.json(tripList);})
  .reject(err => { res.status(500).json(err)});
};

exports.singleTrip = function(req,res,next){
  tripModel.findById(req.params.id)
  .then(singleTrip => {res.status(200).res.json(singleTrip);})
  .reject(err => { res.status(500).json(err)});
};
