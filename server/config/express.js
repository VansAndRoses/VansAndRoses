const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');
const session = require ('express-session');
const passport = require ('passport');
const cors = require ('cors');
const MongoStore = require('connect-mongo')(session);
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);
const dbURL = process.env.DBURL || 'mongodb://localhost/vansandroses';

module.exports = function (app){

  mongoose.connect(dbURL)
    .then(() => debug(`connected to database ${dbURL}`))
    .catch(e => {
      debug(`ERROR CONNECTING TO DB ${dbURL}`);
      throw e;
    });

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
app.use(passport.initialize());
app.use(passport.session());


}
