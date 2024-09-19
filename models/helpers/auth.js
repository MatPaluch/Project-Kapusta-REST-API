const User = require("../mongoose/userSchema");

const findUserByEmail = async (email) => {
  return await User.findOne({ email: email });
};
const findUserById = async (id) => {
  return await User.findById(id);
};
const createUser = async ({ email, password, avatarURL }) => {
  return await new User({ email, password, avatarURL });
};

module.exports = { findUserByEmail, findUserById, createUser };
