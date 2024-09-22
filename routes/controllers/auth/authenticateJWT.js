const passport = require('passport');

module.exports = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (error, user, info) => {
    if (error) {
      return res.status(401).json({
        status: 'Error',
        code: 401,
        message: error.message,
      });
    }

    if (!user) {
      return res.status(404).json({
        status: 'Error',
        code: 404,
        message: info.message,
      });
    }

    req.user = user;
    next();
  })(req, res, next);
};
