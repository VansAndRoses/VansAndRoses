const eventModel = require('./Event.model');


//Get events
exports.getAllList = function (req,res,next){
  eventModel.find()
  .then( eventList => {res.status(200).json(eventList);})
  .reject(err => { res.status(500).json(err);});
};

exports.singleEvent = function(req,res,next){
  eventModel.findById(req.params.id)
  .then(singleEvent => {res.status(200).json(singleEvent);})
  .reject(err => { res.status(500).json(err);});
};
// POST
exports.createEvent = function(req, res, next) {
  const newEvent = new eventModel({
    creator: req.body.creator,
    name: req.body.name,
    description: req.body.description,
    participants: req.body.participants,
    tripId: req.body.tripId,
    startDate: req.body.startDate
  });

	newEvent.save()
      .then( event => {res.json({ message: 'New event created!', id: newEvent._id });})
      .catch( err => {res.status(500).json({error:err, message:"Cannot create event"}); });
};

exports.editEvent = function(req, res ,next) {
  const updates = {
    name: req.body.name,
    description: req.body.description,
    startDate: req.body.startDate,
    image: `/uploads/${req.file.filename}`
  };
  eventModel.findByIdAndUpdate(req.params.id, updates, (err) => {
    if (err) {
      return res.status(400).json({ message: "Unable to update event", error});
    }
    res.json({ message: 'event updated successfully'});
  });
};

removeEvent = function (req, res) {
    eventModel.findByIdAndRemove(req.params.id)
      .then((list) => res.status(202).json({ message: 'event removed successfully' }))
      .catch(err => res.status(500).json({ message: 'impossible to remove the event', error: err }));
};
