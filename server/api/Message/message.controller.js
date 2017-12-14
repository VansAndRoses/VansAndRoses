const messageModel = require('./Message.model');
const userModel = require('../User/User.model');


  exports.messageGet = function(req, res, next){
    messageModel.find({to:req.user._id})
      .populate('from')
      .then(result => {res.status(200).json(result);})
      .reject(err => { res.status(500).json(err);});
  };

  exports.newMessagePost = function(req, res, next){
    console.log("entrando", req.body);
      const newMessage = new messageModel({
        from: req.user._id,
        to: req.params.id,
        text: req.body.text
      });
      console.log(newMessage);
      newMessage.save()
        .then(result1 => res.status(200).json({result: result1}))
        .catch(err => res.status(500).json({ message: 'You are idiot', error: err }));
};
