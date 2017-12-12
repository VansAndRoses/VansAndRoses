const tripModel = require('./Trip.model');
const reviewModel = require('../Review/Review.model');
// const upload = require('../../config/multer');

//Get trips
exports.getAllList = function (req,res,next){
  tripModel.find()
  .then( tripList => {res.status(200).json(tripList);})
  .reject(err => { res.status(500).json(err);});
};


exports.singleTrip = function(req,res,next){
  tripModel.findById(req.params.id)
    .populate("itinerations")
    .then(singleTrip => {
      reviewModel.find({to: req.params.id})
       .then(review => {
         res.status(200).json({trip:singleTrip, reviews:review});
       });
     })
    .catch(err => { res.status(500).json(err);});
};



exports.createTrip = function(req, res, next) {
  console.log("esto vale lo que recibo en mi back");
  console.log(req.body);
  console.log("ESTE ES REQ.USER:");
    console.log(req.user);
  const newTrip = new tripModel({
    title: req.body.title,
    itinerations: req.body.itinerations,
    description: req.body.description,
    category: req.body.category,
    duration: req.body.duration,
    location: req.body.location,
    locationOfStart: req.body.locationOfStart,
    locationOfEnd: req.body.locationOfEnd,
    options: req.body.options,

  });
	newTrip.save()
      .then( trip => {res.status(200).json({ message: 'New trip created!', id: newTrip._id });})
      .catch( err => {res.status(500).json({error:err, message:"Cannot create trip"}); });
};

exports.editTrip = function(req, res ,next) {
  const updates = {
    title: req.body.title,
    itinerations: req.body.itinerations,
    description: req.body.description,
    category: req.body.category,
    duration: req.body.duration,
    location: req.body.location,
    locationOfStart: req.body.locationOfStart,
    locationOfEnd: req.body.locationOfEnd,
    options: req.body.options,
    pic_path: req.body.pic_path,
  };
  tripModel.findByIdAndUpdate(req.params.id, updates, (err) => {
    if (err) {
      return res.status(400).json({ message: "Unable to update Trip", error});
    }
    res.status(500).res.json({ message: 'Trip updated successfully'});
  });
};

exports.removeTrip = function (req, res) {
    tripModel.findByIdAndRemove(req.params.id)
      .then((list) => res.status(202).json({ message: 'Trip removed successfully' }))
      .catch(err => res.status(500).json({ message: 'impossible to remove the Trip', error: err }));
};
