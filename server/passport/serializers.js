const LocalStrategy = require('passport-local').Strategy;
const User = require('../api/User/User.model');
const passport = require('passport');

passport.serializeUser((loggedInUser, next) => {
  next(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, next) => {
  User.findById(userIdFromSession)
  .then(user => next(null,user))
  .catch(e => next(e));
});
