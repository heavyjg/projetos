const User = require('../models/User.js');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const jwt = require('jsonwebtoken');

const ExtractJwt = passportJWT.ExtractJwt;
const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = 'movieratingapplicationsecretkey';

module.exports.controller = (app) => {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  }, (email, password, done) => {
    User.getUserByEmail(email, (err, user) => {
      if(err){return done(err);}
      if(!user){ return done(null, false);}
      User.comparePassword(password, user.password, (error, isMatch) => {
        if(isMatch){
          return done(null, user);
        }
        return done(null, false);
      });
      return true;
    });
  }));


  // register a User
  app.post('/users/register', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const newUser = new User({
      name, email, password,
    });

    User.createUser(newUser, (err, user) => {
      if (err) {
        res.status(422).json({
          message: 'Algo deu errado. Por favor tente novamente após um tempo!',
        });
      }
      res.send({user});
    });
  });

  app.post('/users/login',
    passport.authenticate('local', { failureRedirect: '/users/login'}),
    (req, res) =>{
      res.redirect('/');
  });

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) =>{
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

};
