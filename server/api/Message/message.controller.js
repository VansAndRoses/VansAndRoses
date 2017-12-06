const messageModel = require('./Message.model');
const userModel = require('../User/User.model');


  exports.messageGet = function(req, res, next){
    Message.find({to:req.user._id})
      .populate('from')
      .then(result => {res.status(200).json(result);})
      .reject(err => { res.status(500).json(err);});
  };

  exports.newMessageGet = function(req, res, next){
    console.log("8=======D ----- 3  ");
    console.log(req.params.id);
    User.findById(req.params.id)
    .then(result => {res.status(200).json(result);})
    .reject(err => { res.status(500).json(err);});
  };

  exports.newMessagePost = function(req, res, next){
      const newMessage = new Message({
        from: req.user._id,
        to: req.params.id,
        text: req.body.text,
      });
      console.log(newMessage);
      newMessage.save()
        .then(() => res.status(200).json({message:"okele"}))
        .catch(err => res.status(500).json({ message: 'You are idiot', error: err }));
};
