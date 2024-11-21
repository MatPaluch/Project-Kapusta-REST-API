const passport = require('passport');
const passportJWT = require('passport-jwt');
const User = require('../models/mongoose/userSchema');

require('dotenv').config();
const secret = process.env.JWT_SECRET;
const tokenJwtFromRequest = passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken();

const options = {
  secretOrKey: secret,
  jwtFromRequest: tokenJwtFromRequest,
};

const verifyCallBack = async function (payload, done) {
  try {
    const user = await User.findById(payload.id);

    if (!user) {
      return done(null, false, { message: 'User not found' });
    }

    if (user.token === null) {
      return done(null, false, { message: 'Not authorized' });
    }

    return done(null, user);
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return done(null, false, { message: 'Token has expired' });
    }

    return done(error, false);
  }
};

passport.use(new passportJWT.Strategy(options, verifyCallBack));
