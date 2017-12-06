var path = require('path');
module.exports = function(app) {
  console.log("8============D--------0+=")
  app.use('/api/user', require('../api/User/auth-routes'));
  // app.use('/api/itineration', require('../api/Itineration'));
  // app.use('/api/message', require('../api/Message'));
  // app.use('/api/review', require('../api/Review'));
  // app.use('/api/trip', require('../api/Trip'));
  // app.use('/api/event', require('../api/Event'));
  //   // catch 404 and forward to Angular
  // app.all('/*', function (req, res) {
  //   res.sendFile(__dirname + '/public/index.html');
  // });
};
