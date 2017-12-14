const express = require('express');
const passport = require('passport');
const path = require('path');
const User = require('./User.model');
const bcrypt = require('bcrypt');
const authRoutes = express.Router();
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);
const multer = require('multer');



/* GET home page. */
exports.signUp = function(req, res, next) {
  const {name, lastname, email, username, password, typeOfVan} = req.body;

  if (!username || !password)
    return res.status(400).json({ message: 'Provide username and password' });

  debug('Find user in DB');

  User.findOne({ username },'_id').exec().then(user =>{
    if(user)
      return res.status(400).json({ message: 'The username already exists' });

    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);
    debug('creating user');
    const theUser = new User({
      name,
      lastname,
      email,
      username,
      password: hashPass,
      typeOfVan,
      image: `/uploads/${req.file.filename}`,
    });
    return theUser.save()
    .then(user =>{
      req.login(user, (err) => {
        if (err)
          return res.status(500).json({ message: 'Something went wrong' });

        res.status(200).json(req.user);
      });
    });
  })
  .catch(e => {
    console.log(e);
    res.status(400).json({ message: 'Something went wrong' });
  });
};

exports.logIn = function(req, res, next) {
  console.log("entrando");
  passport.authenticate('local', (err, user, failureDetails) => {
    if (err)
      return res.status(500).json({ message: 'Something went wrong' });

    if (!user)
      return res.status(401).json(failureDetails);

    req.login(user, (err) => {
      if (err)
        return res.status(500).json({ message: 'Something went wrong' });

      // We are now logged in (notice req.user)
      res.status(200).json(req.user);
    });
  })(req, res, next);
};

exports.logOut = function(req, res, next) {
  req.logout();
  res.status(200).json({ message: 'Success' });
};

exports.loggedIn = function (req,res,next){
  if (req.isAuthenticated())
    return res.status(200).json(req.user);
  res.status(403).json({ message: 'Unauthorized' });
};
