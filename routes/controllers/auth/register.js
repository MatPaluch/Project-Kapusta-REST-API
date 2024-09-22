const MongooseHelpers = require("../../../models/helpers/auth");
const gravatar = require("gravatar");
const validRegisterReq = require("../../helpers/validRegisterReq");

require("dotenv").config();

const register = async (req, res, next) => {
  try {
    const validBody = validRegisterReq(req.body);
    if (validBody !== true) {
      return res.status(400).json({
        status: "Error",
        code: 400,
        message: validBody.replace(/"/g, "'"),
      });
    }
    const { email, password, username } = req.body;

    const user = await MongooseHelpers.findUserByEmail(email);

    if (user) {
      return res.status(409).json({
        status: "Error",
        code: 409,
        message: "Email in use",
      });
    }
    const avatarURL = gravatar.url(
      email,
      { s: "300", d: "wavatar", r: "x" },
      true
    );
    const newUser = await MongooseHelpers.createUser({
      username,
      email,
      password,
      avatarURL,
    });

    await newUser.setPassword(password);
    await newUser.save();

    return res.status(201).json({
      status: "Success",
      code: 201,
      message: "User successfully created!",
      user: {
        username: newUser.username,
        email: newUser.email,
        avatarURL: newUser.avatarURL,
      },
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = register;
