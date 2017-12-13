const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const session    = require('express-session');
const MongoStore = require('connect-mongo')(session);
const logger = require('morgan');
const passport   = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
module.exports = function (app){
require('./database');
var whitelist = [
    'http://localhost:4200',
];
var corsOptions = {
    origin: function(origin, callback){
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
app.use(cors(corsOptions));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'angular auth passport secret shh',
  resave: true,
  saveUninitialized: true,
  cookie : { httpOnly: true, maxAge: 60*60*24*365 },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
require('../passport/serializers');
require('../passport/local');
app.use(passport.initialize());
app.use(passport.session());
const authRoutes = require('../api/User/index');
const tripRoutes = require('../api/Trip/index');
const messageRoutes = require('../api/Message/index');
const reviewRoutes = require('../api/Review/index');
const itinerationRoutes = require('../api/Itineration/index');
app.use('/auth', authRoutes);
app.use('/user', authRoutes);
// app.use('/event', eventRoutes);
app.use('/message', messageRoutes);
app.use('/review', reviewRoutes);
app.use('/trip', tripRoutes);
app.use('/itineration', itinerationRoutes);
};
