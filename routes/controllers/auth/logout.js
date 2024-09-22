const logout = async (req, res, next) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.token = null;
    await user.save();

    return res.status(200).json({ message: 'Successfully logged out' });
  } catch (error) {
    next(error);
  }
};

module.exports = logout;
