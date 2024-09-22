const express = require("express");
const router = express.Router();

const controllersAuthRegister = require("../controllers/auth/register");
const controllersAuthLogin = require("../controllers/auth/login");

router.post("/register", controllersAuthRegister);

router.post("/login", controllersAuthLogin);

router.post("/logout", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
