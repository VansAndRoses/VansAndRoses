const express = require('express');
const app = express();
require('./config/passport');
require('./config/express')(app);

require('./routes')(app);
require('./config/error-handler')(app);

module.exports = app;
