const bCrypt = require("bcryptjs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String },
    email: { type: String, required: [true, "Email is required"] },
    password: { type: String, required: [true, "Password is required"] },
    balance: { type: Number, default: 0 },
    token: {
      type: String,
      default: null,
    },
    avatarURL: { type: String },
  },
  {
    versionKey: "version",
    timestamps: true,
  }
);

userSchema.methods.setUsername = function (email) {
  const atPosition = email.indexOf("@");
  const cutedEmail = email.slice(0, atPosition);
  this.username = cutedEmail;
};

userSchema.methods.setPassword = async function (password) {
  this.password = await bCrypt.hash(password, await bCrypt.genSalt(12));
};

userSchema.methods.validPassword = async function (password) {
  return await bCrypt.compare(password, this.password);
};

const User = mongoose.model("user", userSchema);

module.exports = User;