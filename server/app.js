const express = require('express');
const app = express();
require('./passport/local');
require('./passport/serializers');
require('./config/express')(app);

require('./routes')(app);
require('./config/error-handler')(app);

module.exports = app;
