const User = require('../User/User.model');
const Review = require('../Review/Review.model');
const Trip = require('../Trip/Trip.model');

  exports.newReviewGet = function(req, res, next){
    console.log(req.params.id);
    findById(req.params.id)
    .then(result => {res.status(200).json(result);})
    .reject(err => {res.status(500).json(err);});
  };

  exports.newReviewPost = function(req, res, next){
      const newReview = new Review({

        to: req.params.id,
        text: req.body.text,
        rating: req.body.rating
      });
      console.log(newReview);
      newReview.save()
        .then(result1 => {
          Trip.findById(req.params.id)
          .then(result2 => {
            console.log(result2);
            result2.quantityReviews ++;
            console.log(result2.quantityReviews);
            result2.count+= result1.rating;
            result2.average = result2.count/result2.quantityReviews;
            result2.save()
              .then(result2Updated=>res.status(200).json({result2Updated, result1}));

        });
      })
        .catch(err => res.status(500).json({ message: 'You are idiot', error: err }));
};
