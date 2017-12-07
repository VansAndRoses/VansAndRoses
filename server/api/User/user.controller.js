const userModel = require('./User.model');
const tripModel = require('../Trip/Trip.model');


exports.profileGet = function(req, res, next){
  tripModel.find({creator: result._id})
    .then(result => {res.status(200).json({result});})
    .reject(err => {res.status(500).json(err);});
},

exports.profileIdGet = function(req, res, next){
  userModel.findById(req.params.id)
  .then(result1 => {
    tripModel.find({creator: result1._id})
      .then(result2 => {res.status(200).json({user: result1, trip: result2});});
  })
.reject(err => { res.status(500).json(err);});
},

exports.editGet = function(req, res, next){
    userModel.findById(req.params.id)
      .then( user => {res.status(200).json(user);})
      .reject(err => { res.status(500).json(err);});
  },

exports.editPost = function(req, res, next){
    let updates = {
      name: req.body.name,
      lastname: req.body.lastname,
      username: req.body.username,
      password: req.body.password,
      location: {
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        description: req.body.description
      },
      pic_path: `/uploads/${req.file.filename}`,
      pic_name: req.file.originalname
    };
    userModel.findByIdAndUpdate(req.params.id, updates, (err) => {
    if (err) {
      return res.status(400).json({ message: "Unable to update user", error});
    }
    res.json({ message: 'User updated successfully'});
  });
};
