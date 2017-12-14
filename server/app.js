require('dotenv').config();
const express = require('express');
const app = express();
require('./passport/local');
require('./passport/serializers');
require('./config/express')(app);

require('./routes')(app);
app.all('/*', function (req, res) {
   res.sendFile(__dirname + '/public/index.html');
 });
require('./config/error-handler')(app);

module.exports = app;
