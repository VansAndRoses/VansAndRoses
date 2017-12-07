const User = require('../User/User.model');
const Review = require('../Review/Review.model');
const Trip = require('../Trip/Trip.model');

  exports.newReviewGet = function(req, res, next){
    console.log("8=======D ----- 3  ");
    console.log(req.params.id);
    findById(req.params.id)
    .then(result => {res.status(200).json(result);})
    .reject(err => { res.status(500).json(err);});
  };

  exports.newReviewPost = function(req, res, next){
      const newReview = new Review({
        from: req.params.id,
        to: req.params.id,
        text: req.body.text,
        rating: req.body.rating
      });
      console.log(newReview);
      newReview.save()
        .then(() => res.status(200).json({message:"okele"}))
        .catch(err => res.status(500).json({ message: 'You are idiot', error: err }));
    };
