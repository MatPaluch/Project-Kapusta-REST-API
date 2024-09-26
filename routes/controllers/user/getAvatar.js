const User = require('../../../models/mongoose/userSchema');

const getAvatar = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const user = await User.findById(userId);

    if (!user || !user.avatarURL) {
      return res.status(404).json({
        status: 'Error',
        code: 404,
        message: 'User or avatar not found',
      });
    }

    return res.status(200).json({
      status: 'Success',
      code: 200,
      avatarURL: user.avatarURL,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAvatar;
