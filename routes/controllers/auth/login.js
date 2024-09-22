const MongooseHelpers = require("../../../models/helpers/auth");
const validLoginReq = require("../../helpers/validLoginReq");
const JWT = require("jsonwebtoken");

require("dotenv").config();

const login = async (req, res, next) => {
  try {
    const validBody = validLoginReq(req.body);
    if (validBody !== true) {
      return res.status(400).json({
        status: "Error",
        code: 400,
        message: validBody.replace(/"/g, "'"),
      });
    }

    const { email, password } = req.body;
    const user = await MongooseHelpers.findUserByEmail(email);

    if (!user) {
      return res.status(400).json({
        status: "Error",
        code: 400,
        message: "User doesn't exist",
      });
    }

    const isPasswordCorrect = await user.validPassword(password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        status: "Error",
        code: 401,
        message: "Email or password is wrong",
        data: "Bad request",
      });
    } else {
      const payload = {
        id: user._id,
        username: user.username,
      };

      const secret = process.env.SECRET;
      const token = JWT.sign(payload, secret, { expiresIn: "2h" });

      user.token = token;
      user.save();

      return res.status(200).json({
        status: "Success",
        code: 200,
        message: "Successfully logged in.",
        token: token,
        data: {
          id: user._id,
          username: user.username,
          email: user.email,
          avatarURL: user.avatarURL,
          balance: user.balance,
        },
        transactions: [],
      });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = login;
