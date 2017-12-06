const LocalStrategy = require('passport-local').Strategy;
const User = require('../api/User/User.model');
const bcrypt = require('bcrypt');
const passport = require('passport');


module.exports = function () {

  passport.serializeUser((loggedInUser, next) => {
    next(null, loggedInUser._id);
  });

  passport.deserializeUser((userIdFromSession, next) => {
    User.findById(userIdFromSession)
    .then(user => next(null,user))
    .catch(e => next(e));
  });

passport.use(new LocalStrategy((username, password, next) => {
  User.findOne({ username })
  .then(user =>{
    if (!user)
      return next(null, false, { message: 'Incorrect username' });

    if (!bcrypt.compareSync(password, user.password))
      return next(null, false, { message: 'Incorrect password' });

    next(null, user);
  })
  .catch(e => next(e));
}));

}
